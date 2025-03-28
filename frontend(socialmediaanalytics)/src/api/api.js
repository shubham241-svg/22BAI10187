import axios from 'axios';

const API_URL = 'http://localhost:8000';

export const fetchApi = async(route)=>{
    try{
        const response = await axios.get(`${API_URL}/${route}`);
        return response.data;
    }catch(error){
        console.log(error);
        return null;
    }
}
