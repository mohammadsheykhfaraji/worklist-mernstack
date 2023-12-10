import React,{useState} from "react"
import Sidbar from "./sidbar";
import Menu from "../core/Menu";
import Maindashboard from "./maindashboard";

export default function Userdashboard() {

    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
      setSelectedItem(item);
    };



    return(
        <div className="flex">
        <Menu/>
          
        <Sidbar onItemClick={handleItemClick}/>
       
      
       <Maindashboard selectedItem={selectedItem}/>
        

        </div>
    );
}