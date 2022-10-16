import { createSlice } from "@reduxjs/toolkit";
import { getAllLessons } from "../../server/lessons";

export const lessonSlice = createSlice({
  name: "lessons",
  initialState: {
    allLessons: [],
    loading: false,
    error: "",
  },
  //   reducers: {
  //     fetchAllLessons: (state) => {
  //       getAllLessons().then((data) => (state.allLessons = data));
  //     },
  //   },
  extraReducers: (builder) => {
    builder.addCase(getAllLessons.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllLessons.fulfilled, (state, action) => {
      state.loading = false;
      state.allLessons = action.payload;
      state.error = "";
    });
    builder.addCase(getAllLessons.rejected, (state, action) => {
      state.loading = false;
      state.allLessons = [];
      state.error = action.rejected.message;
    });
  },
});

export const { fetchAllLessons } = lessonSlice.actions;

export default lessonSlice.reducer;
