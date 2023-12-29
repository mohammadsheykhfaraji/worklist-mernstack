// import React from "react";
// import {Navigate,Outlet} from 'react-router-dom';
// import {isauthenticated} from './index';



// const Privateroutes=async()=>{
  
//     // const {response,error}=await isauthenticated();
//     const auth=await isauthenticated();
// console.log('sidls');
// console.log(auth);
// console.log('sidls1');
// console.log(auth.error);
// console.log('sidls2');
// console.log(auth.response);
// console.log('sidls3');


//   if (auth.response){
//     return <Outlet/>; 
  
//   } else if(auth.error) {
//     return <Navigate to='/signin' replace/>;
//   }
  
// }

// export default Privateroutes;


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

  return (
    <div>
      {authState.authenticated ? (
        // اگر احراز هویت با موفقیت انجام شده باشد، فرزندان را نمایش دهید
        <Outlet />
      ) : (
        // اگر احراز هویت ناموفق بود، به صفحه ورود هدایت شوید
        <Navigate to='/signin' replace />
      )}
    </div>
  );
};

export default Privateroutes;
