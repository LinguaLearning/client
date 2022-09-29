import { Container, Title } from "./ViewStyling";
import { Lessons } from "../../components";
import { useColors } from "../../context/StylingContext/ColorContext";
import { getAllLessons } from "../../server/lessons";
import { useState, useEffect } from "react";

const DashboardPageView = () => {
  const globalColors = useColors();
  const [lessonsData, setLessonsData] = useState([]);
  useEffect(() => {
    getAllLessons().then((data) => setLessonsData(data));
  }, []);

  console.log(lessonsData);

  getAllLessons();
  return (
    <Container>
      <Title secondary={globalColors.secondary}>The Lessons</Title>
      <Lessons lessonsData={lessonsData} />
    </Container>
  );
};

export default DashboardPageView;
