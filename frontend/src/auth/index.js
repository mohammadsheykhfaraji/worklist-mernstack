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
    
  // return fetch(`${API}/signin`,{
  //     method: 'POST',
  //    headers: { 'Content-Type': 'application/json' },
  //    body: JSON.stringify( user ),
    
  //  }).then(async resp=>{
    
  //    return await resp;
  //  }).catch(err=>{
  //    console.log(err)
  //  });
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

