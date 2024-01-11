import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8020/api/v1/cmy-employees";
const REST_API_CREATE = REST_API_BASE_URL + "/create/cmy-employee";
const REST_API_DETAIL = REST_API_BASE_URL + "/detail/cmy-employee/";
const REST_API_UPDATE = REST_API_BASE_URL + "/update/cmy-employee/";
const REST_API_DELETE = REST_API_BASE_URL + "/delete/cmy-employee/";

export const listCmyEmployees = async () => {
  try {
    const response = await axios.get(`${REST_API_BASE_URL}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createCmyEmployee = async (cmyEmployee) => {
  try {
    const response = await axios.post(`${REST_API_CREATE}`, cmyEmployee);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCmyEmployeeById = async (id) => {
  try {
    const response = await axios.get(`${REST_API_DETAIL}${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateCmyEmployee = async (cmyEmployee, id) => {
    try {
      if (!id) {
        throw new Error('ID is required for updating the employee.');
      }
  
      const { id: employeeId, ...employeeData } = cmyEmployee;
  
      const response = await axios.put(`${REST_API_UPDATE}${id}`, employeeData);
  
      return response.data;
    } catch (error) {
      throw error;
    }
};
  
export const deleteCmyEmployee = async (id) => {
    try {
      if (!id) {
        throw new Error('ID is required for deleting the employee.');
      }
  
      const response = await axios.delete(`${REST_API_DELETE}${id}`);
  
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  