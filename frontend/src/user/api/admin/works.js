import axios from "axios";
import { API , handleApiError } from '../../../config';


export const addworkk=async(work)=>{
    try {
        const jwt = JSON.parse(localStorage.getItem('jwt'));
        
        const works ={work:work.text,token:jwt.token}
        const temp= await axios.post(`${API}/addwork`,works ,{
            headers: { 'Content-Type': 'application/json' }
          });
          const response =temp.data;
          return { response , error:null };
    } catch (error) {
        return handleApiError(error);
    }
}