import React,{ useState } from "react"
import { Link } from "react-router-dom"
import { signu } from "../auth";

export default function Signup() {

    const [values,setValues]=useState({
        fullname:'',
        email:'',
        password:'',
        confirmpassword:'',
        error:'',
        success:false,
      });
     
      const user={fullname:values.fullname,email:values.email,password:values.password,success:values.success,error:values.error}
    
     const clicksub=(e)=>{
      e.preventDefault();
       setValues({...values,error:''});
      signu(user).then(async response=>{
        console.log(response);
      
       
        if(response.error){
          
          setValues({...values,error:response.error,success:false});
        }else if(response.response){
          setValues({
            ...values,
            fullname:'', 
            email:'',
            password:'',
            confirmpassword:'',
            error:'',
            success:true,
          });
        }
      });
     }
     
       
  
  const showerror=()=>( 
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-8 rounded relative "  style={{display: user.error ? '' : 'none'}} role="alert">
        {user.error}
    </div>
    
  );
  const showsuccess=()=>(
    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 mb-8 rounded relative "  style={{display:user.success?'':'none'}} role="alert">
             اکانت ایجاد شد لطفا لاگین کنید
    </div>
   
);  

  const formsignup =()=>{
    return(
        <>
        
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">

        {showerror()}
        {showsuccess()}

            <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" className="bi bi-person-plus-fill mx-auto w-auto text-blue-900" viewBox="0 0 16 16">
                    <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                    <path  d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5"/>
                </svg>

            
             
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            لطفا ثبت نام کنید
        </h2>
       
    </div>

    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" action="#" method="POST">
            <div>
                    <label  className="block text-sm font-medium text-gray-700">
                        نام و نام خانوادگی
                    </label>
                    <div className="mt-1">
                         <input  id="fullname" name="fullname" type="fullname" 
                          value={values.fullname}
                          onChange={e => {
                                      const val = e.target.value;
                                      setValues(prevState => ({...prevState, fullname: val}));
                                  }} 
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="لطفا نام و نام خانوادگی  خود را وارد کنید" required
                            />
                    </div>
                </div>
                <div>
                    <label  className="block text-sm font-medium text-gray-700">
                        ایمیل
                    </label>
                    <div className="mt-1">
                         <input id="email" name="email" type="email"  
                          value={values.email}
                          onChange={e => {
                                      const val = e.target.value;
                                      setValues(prevState => ({...prevState, email: val}));
                                  }} 
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="لطفا ایمیل خود را وارد کنید" required
                            />
                    </div>
                </div>

                <div>
                    <label  className="block text-sm font-medium text-gray-700">
                        رمز عبور
                    </label>
                    <div className="mt-1">
                        <input id="password" name="password" type="password"  required 
                         value={values.password}
                         onChange={e => {
                                     const val = e.target.value;
                                     setValues(prevState => ({...prevState, password: val}));
                                 }} 
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="لطفا رمز عبور خود را وارد کنید"/>
                    </div>
                </div>
                <div>
                    <label  className="block text-sm font-medium text-gray-700">
                        تکرار رمز عبور
                    </label>
                    <div className="mt-1">
                        <input id="confirmpassword" name="confirmpassword" type="password"  required
                         value={values.confirmpassword}
                         onChange={e => {
                                     const val = e.target.value;
                                     setValues(prevState => ({...prevState, confirmpassword: val}));
                                 }} 
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="لطفا دوباره رمز عبور خود را وارد کنید"/>
                    </div>
                </div>

               
                <div>
                    <button type="submit" onClick={clicksub}
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">

                        ثبت نام
                    </button>
                </div>
                <div className="flex items-center justify-between">
                    <div className="text-sm">
                        <Link to="/signin" className="font-medium text-blue-600 hover:text-blue-500">
                            ایا قبلا ثبت نام کرده اید؟؟
                        </Link>
                    </div>
                </div>
            </form>
          
        </div>
    </div>
</div>
        </>
    )
  }


    return (
      <>
  
      {formsignup()}
      </>
    )
  }