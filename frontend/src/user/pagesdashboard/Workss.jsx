import React,{ useState,useEffect } from 'react';

import { addworkk,getwork,delwork } from '../api/admin/works';

export default function Works() {

  const [works,setWorks]=useState([]);
  const [values,setValues]=useState({
    text:'',
    error:'',
    success:false,
    
  });

  useEffect(() => {
   gettwork();
  }, []);
  useEffect(() => {
    gettwork();
   }, [values.success]);

  const gettwork=async()=>{
   await getwork().then(res=>{
      const ww=res.response;
      if(ww){
        setWorks(ww);
      }
     
    })
  }

//////////////add works
  const work={text:values.text}
  const subclick=(e)=>{
    e.preventDefault();
    setValues({...values,error:''});
    if(values.text!==''){
      addworkk(work).then(async res=>{
       if(res.error){
        setValues({...values,error:res.error,success:false});
       }else if(res.response){
        setValues({
          ...values,
          error:'',
          text:'',
          success:true,
        });
     
       }
      });
    
    }
   
  }

  if (values.success){
    setTimeout(() => {
      setValues({...values,success:false})
    }, 5000);
  }

////////////////////////////////////show error and success
   const showerror=()=>( 
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 mb-8 rounded relative "  style={{display: values.error ? '' : 'none'}} role="alert">
        {values.error}
    </div>
    
  );
  const showsuccess=()=>( 
    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 mb-8 rounded relative "  style={{display:values.success?'':'none'}} role="alert">
        ثبت شد!!!
    </div>
    
  );
  const hasdo=(e)=>{
    
   console.log(e);
  }
  const delet=(e)=>{
  
    delwork(e);
    ///////////////////getwork ro bego test kon

   }

  ////////////////////////////////////////////forms
 
  const table=()=>{
   
    return(
     
      <div className=" grid grid-cols-1 mx-auto mt-5 mr-1 ">
       <table className="w-auto border">
          <thead>
            <tr>
              <th className="py-2 px-4 border">کار</th>
              <th className="py-2 px-4 border">تایید</th>
              <th className="py-2 px-4 border">حذف</th>
            </tr>
          </thead>

          <tbody>
         {works.map((item,index)=>( 
           <tr key={index}>

           <td className="py-2 px-1 border"> 
             {item.work}
            </td>
            <td className="py-2 px-1 border"  > 
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded" onClick={()=>hasdo(item)}>
                انجام شد
              </button>
            </td>
            <td className="py-2 px-1 border" > 
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded" onClick={()=>delet(item)} >
                حذف
              </button>
            </td>
          
          </tr>
         ))}
           
    
          </tbody>
        </table>
      </div>
    );
  }
    
  const addwork=()=>{
    return(
      <div className='grid grid-cols-4'>
      <input
        type="text"
        value={values.text}
        onChange={e => {
          const val = e.target.value;
          setValues(prevState => ({...prevState, text: val}));
      }} 
        className="block col-span-3  h-11  rounded-md  border-0  py-1.5 pl-3 pr-3 text-purple-900 ring-1 ring-inset ring-purple-300"
      />

      <button onClick={subclick}  className="bg-purple-500 h-11 mr-2 col-span-1 mx-auto hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
          اضافه
      </button>
  </div>
    );
  }



  /////////////////////////return
    return (
      <div className='flex flex-col'>
        {showerror()}
        {showsuccess()}
        {addwork()}
        {table()}
       
      </div>
      );

}
