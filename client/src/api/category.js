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

export const createCategory = async (formData) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await API.post("/api/category", formData, config);

  return response;
};

export const getCategories = async () => {
  const response = await API.get("/api/category");

  return response;
};
