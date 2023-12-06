import React from "react";
import {Navigate,Outlet} from 'react-router-dom';
import {isauthenticated} from './index';



const Privateroutes=()=>{
  
    const auth=isauthenticated();
console.log(auth);
  if (auth && auth.user && auth.true){
    return <Outlet/>; 
  
  } else {
    return <Navigate to='/signin' replace/>;
  }
  

  
}


export default Privateroutes;