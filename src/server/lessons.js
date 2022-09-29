import axios from "axios";

export const getAllLessons = async () => {
  return await axios
    .get("http://localhost:2022/lessons/getLessons")
    .then((result) => result.data.response);
};
