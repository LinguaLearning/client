import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllLessons = createAsyncThunk("lesson/getAllLessons", () => {
  return axios
    .get("/lessons/getLessons")
    .then((result) => result.data.response);
});
