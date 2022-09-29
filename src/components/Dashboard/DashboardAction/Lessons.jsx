import React from "react";
import {
  Layout,
  CardList,
  InfoGraphicsList,
  Card,
  Context,
  Title,
  SubTitle,
  BottomSection,
  BottomSection2,
  PlayButton,
  Language,
  Image,
  Text,
  BellowContent,
  GraphicsBox,
  SideTitle,
  Description,
  UserImage,
  LeaderBordList,
  LeaderBordUser,
  UserName,
  UserScore,
  LeaderTitle,
  UsersBackground,
} from "./LessonsStyled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import franceFlag from "../../../assets/franceFlag.png";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useColors } from "../../../context/StylingContext/ColorContext";

const Lessons = ({ lessonsData }) => {
  const globalColors = useColors();

  return (
    <Layout>
      <CardList>
        {lessonsData.map((lesson, idx) => (
          <Card key={idx} background={lesson.image}>
            <Context>
              <Title>{lesson.title}</Title>
              <SubTitle>Lesson {lesson.lesson_number}</SubTitle>
            </Context>
            <PlayButton>
              <FontAwesomeIcon
                style={{ fontSize: "50px", color: "#6e6e6e", opacity: "0.5" }}
                icon={faPlayCircle}
              />
            </PlayButton>
            <BellowContent>
              <BottomSection color="white"></BottomSection>
              <BottomSection2 color="blue">
                <Language>
                  <Image src={franceFlag} />
                  <Text>French</Text>
                </Language>
              </BottomSection2>
            </BellowContent>
          </Card>
        ))}
      </CardList>
      <InfoGraphicsList>
        <SideTitle secondary={globalColors.secondary}>Progress</SideTitle>
        <GraphicsBox>
          <CircularProgressbar percentage={25} text="25%" />
        </GraphicsBox>
        <GraphicsBox>
          <Description secondary={globalColors.secondary}>
            1/4 of the tasks have been finished
          </Description>
        </GraphicsBox>
        <GraphicsBox>
          <LeaderBordList secondary={globalColors.secondary}>
            <LeaderTitle secondary={globalColors.text}>Leaderboard</LeaderTitle>
            <UsersBackground>
              {[0, 1, 2, 3, 4].map((el) => (
                <LeaderBordUser key={el}>
                  <UserImage src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
                  <UserName>Jonathan Beckham</UserName>
                  <UserScore>300</UserScore>
                </LeaderBordUser>
              ))}
            </UsersBackground>
          </LeaderBordList>
        </GraphicsBox>
      </InfoGraphicsList>
    </Layout>
  );
};

export default Lessons;
