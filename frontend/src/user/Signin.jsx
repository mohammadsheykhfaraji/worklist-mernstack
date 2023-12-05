import React,{useState} from "react"
import { Link} from "react-router-dom"
import { signi,authenticate } from "../auth";

export default function Signin() {


  const [values,setValues]=useState({
    email:'',
    password:'',
    error:'',
    loading:'',
    redirectrefrence:false,
  });
  const user={email:values.email,password:values.password,loading:values.loading,error:values.error,redirectrefrence:values.redirectrefrence};
 
  
// const navigate = useNavigate();

const clicksub=(e)=>{
        e.preventDefault();

        setValues({...values,error:'',loading:'loading...'});
        signi(user).then(async dataa=>{
            const data=await dataa.json();
            

            if(dataa.status!==200){
            setValues({...values,error:data.message,loading:''});

            }else if(dataa.status===200){
                authenticate(data,()=>{
                    setValues({
                    ...values,
                    redirectrefrence:true,
                    });
                })
            }
        });
}

const formsignin = () =>{
    return(
  <>
     <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
 
               <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor"  className="bi bi-person-circle mx-auto w-auto text-blue-900" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                </svg>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            لطفا وارد شوید
        </h2>
      
    </div>

    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" action="#" method="POST">
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
                            placeholder="لطفا ایمیل تون رو وارد کنید" required
                            />
                    </div>
                </div>

                <div>
                    <label  className="block text-sm font-medium text-gray-700">
                        پسورد
                    </label>
                    <div className="mt-1">
                        <input id="password" name="password" type="password"  required
                           value={values.password}
                           onChange={e => {
                                       const val = e.target.value;
                                       setValues(prevState => ({...prevState, password: val}));
                                   }} 
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="لطفا پسوردتون رو وارد کنید"/>
                    </div>
                </div>

                <div className="flex items-center justify-between">
               

                    <div className="text-sm">
                        <Link href="#" className="font-medium text-blue-600 hover:text-blue-500">
                            رمزتون رو فراموش کرده اید؟
                        </Link>
                    </div>
                </div>

                <div>
                    <button type="submit" onClick={clicksub}
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">

                        ورود
                    </button>
                </div>
                <div className="flex items-center justify-between">
               

               <div className="text-sm">
                   <Link to="/signup" className="font-medium text-blue-600 hover:text-blue-500">
                       ایا قبلا ثبت نام نکرده اید؟؟
                   </Link>
               </div>
           </div>
            </form>
       
        </div>
    </div>
</div>
  </>
  );
}
    return (
      <>
      {formsignin()}
   
      </>
    );
  }