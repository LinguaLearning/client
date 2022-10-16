import { configureStore } from "@reduxjs/toolkit";
import lessonReducer from "./lessonsStore/lessonSlices";

export default configureStore({
  reducer: {
    lessons: lessonReducer,
  },
});
