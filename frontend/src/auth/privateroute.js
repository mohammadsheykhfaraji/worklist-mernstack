
import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from 'react-router-dom';
import { isauthenticated } from './index';

const Privateroutes = () => {
  const [authState, setAuthState] = useState({
    loading: true,
    authenticated: false,
  });

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const auth = await isauthenticated();
        setAuthState({
          loading: false,
          authenticated: auth.response,
        });
      } catch (error) {
        console.error("Error checking authentication:", error);
        setAuthState({
          loading: false,
          authenticated: false,
        });
      }
    };

    checkAuthentication();
  }, []);

  if (authState.loading) {
    // در حال چک کردن احراز هویت 
    return <div>Loading...</div>;
  }


  if(authState.authenticated){
    return <Outlet/>;
  }else{
    return  <Navigate to='/signin' replace />;
  }
 
};

export default Privateroutes;
