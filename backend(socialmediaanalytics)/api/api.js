import axios from "axios";
import { configDotenv } from "dotenv";
const API_URL = "http://20.244.56.144/test";

export const fetchApi = async (route) => {
    try {
        const response = await axios.get(`${API_URL}${route}`, {
            headers: {
                Authorization: process.env.Bearer,
               
            }
        });
        console.log(data)
        return response.data;
    } catch (error) {
        console.error("Error fetching", route, error.message);
        return null;
    }
}

