import { createSlice } from "@reduxjs/toolkit";

export const lessonSlice = createSlice({
  name: "lessonsContainer",
  initialState: {
    currentContainer: 0,
  },
  reducers: {
    moveOneContainerUp: (state) => {
      state.currentContainer += 1;
    },
    moveOneContainerDown: (state) => {
      if (state.currentContainer > 0) {
        state.currentContainer -= 1;
      }
    },
  },
});

export const { moveOneContainerUp, moveOneContainerDown } = lessonSlice.actions;

export default lessonSlice.reducer;
