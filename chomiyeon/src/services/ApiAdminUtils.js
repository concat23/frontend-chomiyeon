import axios from 'axios';

const BASE_URL = 'http://localhost:8020/api/v1/administrator-auth';

export const login = async (loginRequest) => {
  try {
    const response = await axios.post(`${BASE_URL}/signin`, loginRequest);
    console.log(response.data); // Fix the typo here
    // Assuming the token is directly present in the response
    const { token } = response.data;

    // Handle the successful login, e.g., store the token in local storage, update state, etc.
    localStorage.setItem('accessToken', token);

    return response.data;
  } catch (error) {
    // Handle login failure, e.g., show an error message
    console.error('Login failed:', error);
    throw error;
  }
};


export const signup = async (signupRequest) => {
  try {
    const response = await axios.post(`${BASE_URL}/signup`, signupRequest);
    return response.data;
  } catch (error) {
    // Handle signup failure, e.g., show an error message
    console.error('Signup failed:', error);
    throw error;
  }
};
