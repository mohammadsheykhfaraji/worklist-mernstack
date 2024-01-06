  import React from "react";
import { Link } from "react-router-dom";

   
  export default function sidbar({ onItemClick }) {
      // const items = ['پروفایل','کارها']
      const profile={
        name:"پروفایل",
        code:"profile"
      }
      const works={
        name:"کارها",
        code:"works"
      }
    

    return (
      <div className="w-1/5 bg-gray-600 p-4 mt-14 h-screen text-white">
     
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">داشبورد</h2>
        <p className="text-gray-400">خوش اومدید</p>
      </div>
      <nav>
        <ul>
           <li key={profile.code} className="mb-2">
              <Link
                className=" rounded p-3  "
                onClick={() => onItemClick(profile)}
              >
                {profile.name}
              </Link>
            </li>
            <li key={works.code} className="mb-2">
              <Link
                className=" rounded p-3  "
                onClick={() => onItemClick(works)}
              >
                {works.name}
              </Link>
            </li>
        
        </ul>
      </nav>
    </div>
    );
  }