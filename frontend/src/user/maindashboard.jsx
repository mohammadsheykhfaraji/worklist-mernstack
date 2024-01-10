import React from 'react';
import Works from './pagesdashboard/Workss'

export default function Maindashboard({selectedItem}) {



const profile=()=>{
  return (
    <div>
      اینجا پروفایل است
     </div>
  );
}


  return (
    <div className="flex-1 mt-14 h-screen p-4">
     
      {selectedItem ? (
        <div>
         
              {selectedItem.code==="profile"?(
                <div>
                  {profile()}
                </div>
              ):(
              <div>
                <Works/>
              </div>
              )}
        
        </div>
      ):(
        <h2 className="text-2xl font-semibold mb-4">Main Content</h2>
      )}
    </div>
  );
}
