import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8020/api/v1/cmy-employees";

export const listCmyEmployees = () =>{
    return axios.get(REST_API_BASE_URL);
}