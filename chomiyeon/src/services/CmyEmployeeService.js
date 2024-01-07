import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8020/api/v1/cmy-employees";
const REST_API_CREATE = REST_API_BASE_URL + "/create/cmy-employee"
export const listCmyEmployees = () =>{
    return axios.get(REST_API_BASE_URL);
}

export const createCmyEmployee = (cmyEmployee) => axios.post(REST_API_CREATE, cmyEmployee)