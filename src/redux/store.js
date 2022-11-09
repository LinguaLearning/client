import { configureStore } from "@reduxjs/toolkit";
import lessonReducer from "./lessonsStore/lessonSlices";
import lessonsContainer from "./lessonsStore/lessonContainerSlice";

export default configureStore({
  reducer: {
    lessons: lessonReducer,
    lessonContainer: lessonsContainer,
  },
});
