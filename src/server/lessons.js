import axios from "axios";

export const getAllLessons = async () => {
  return await axios
    .get("/lessons/getLessons")
    .then((result) => result.data.response);
};
