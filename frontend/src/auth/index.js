import axios from "axios";
import { API , handleApiError } from '../config';


export const signu=async(user)=>{
  try {
     const temp= await axios.post(`${API}/signup`,user ,{
      headers: { 'Content-Type': 'application/json' }
    });
    const response =temp.data;
    return { response , error:null };
  } catch (error) {
    return handleApiError(error);
  }

 }

 export const  signi=async(user)=>{
  try {
    const temp= await axios.post(`${API}/signin`,user ,{
     headers: { 'Content-Type': 'application/json' }
   });
   const response =temp.data;
   return { response , error:null };
 } catch (error) {
   return handleApiError(error);
 }
    
 
}

export const authenticate=(data,next)=>{
  if (typeof window!=='undefined'){
    localStorage.setItem('jwt',JSON.stringify(data));
    next();
  }
}

export const signout=async (next)=>{
  if (typeof window!=='undefined'){
    localStorage.removeItem('jwt');
   await next();
   return  fetch(`${API}/signout`,{
      method:'GET'
    }).then(res=>{
      console.log('signout',res);
    }).catch(err=>{
      console.log(err);
    });
  }
 
}
export const isauthenticated=async()=>{
  if(localStorage.getItem('jwt')){
    //  const res = await checkAuth();
      return 0;
  }else{
    console.log('no jwt')
    return  {};
  }
}

