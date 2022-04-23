import axios from "axios";
const API = axios.create({
  baseURL: "https://nickspisak-eccomerce.herokuapp.com/",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const createProduct = async (data) => {
  const response = await API.post("/api/product", data);

  return response;
};
