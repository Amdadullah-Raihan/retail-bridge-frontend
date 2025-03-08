import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const baseURL = "http://localhost:5000/api/";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: baseURL,
    prepareHeaders: (header) => {
      const token = JSON.parse(localStorage.getItem("token"));
      if (token) {
        header.set("Authorization", `Bearer ${token}`);
      }
      return header;
    },
  }),
  endpoints: () => ({}),
});
