// ApiUtils.js
const REST_API_BASE_URL = "http://localhost:8020/api/v1/administrator-auth";

const request = async (url, options) => {
  const headers = new Headers({
    'Content-Type': 'application/json',
  });

  if (localStorage.getItem('accessToken')) {
    headers.append(
      'Authorization',
      'Bearer ' + localStorage.getItem('accessToken')
    );
  }

  const defaults = { headers: headers };
  options = Object.assign({}, defaults, options);

  const response = await fetch(url, options);

  if (!response.ok) {
    const error = await response.json();
    return Promise.reject(error);
  }

  return response.json();
};

export const login = (loginRequest) => {
  return request(`${REST_API_BASE_URL}/signin`, {
    method: 'POST',
    body: JSON.stringify(loginRequest),
  });
};

export const signup = (signupRequest) => {
  return request(`${REST_API_BASE_URL}/signup`, {
    method: 'POST',
    body: JSON.stringify(signupRequest),
  });
};

// Add other API functions as needed
