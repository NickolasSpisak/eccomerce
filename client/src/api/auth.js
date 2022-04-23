import axios from "axios";
const API = axios.create({
  baseURL: "https://nickspisak-backend-project.herokuapp.com/",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const signup = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await API.post("/api/auth/signup", data, config);

  return response;
};

export const signin = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await API.post("/api/auth/signin", data, config);

  return response;
};
