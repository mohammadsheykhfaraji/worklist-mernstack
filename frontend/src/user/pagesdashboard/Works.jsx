import React,{ useState } from 'react';

export default function Works() {


  const [values,setValues]=useState({
    text:'',
    error:'',
    success:false,
  });
const work={text:values.text}
  const subclick=(e)=>{
    e.preventDefault();
    setValues({...values,error:''});
    console.log(values);
    console.log(work);
  }



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
         
            <tr>
             <td className="py-2 px-1 border"> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac ante vel ipsum lobortis tristique.
              </td>
              <td className="py-2 px-1 border" > 
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">
                  accept
                </button>
              </td>
              <td className="py-2 px-1 border" > 
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                  Reject
                </button>
              </td>
            
            </tr>
    
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
    return (
      <div className='flex flex-col'>
        {addwork()}
        {table()}
       
      </div>
      );

}
