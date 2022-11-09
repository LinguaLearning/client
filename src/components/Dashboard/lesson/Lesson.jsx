import React, { useContext } from "react";
import {
  Confidence,
  AudioLearningType,
  ImageLearningType,
  SentenceLearningType,
  VideoLearningType,
  AlternativesPracticeType,
  ImageDescPracticeType,
  ImagePracticeType,
  ReadingPracticeType,
  SentenceComplitionPracticeType,
  VoicePracticeType,
  WriteDownPracticeType,
} from "../lessonTypes";
import { LessonContext } from "../../../context/lessonsContext/LessonContext";

const Lesson = ({ selLesson }) => {
  const { selectedLesson } = useContext(LessonContext);

  let lessonTypesArray = [
    <Confidence info={selectedLesson.lesson_container[selLesson]} />,
    <AudioLearningType info={selectedLesson.lesson_container[selLesson]} />,
    <ImageLearningType info={selectedLesson.lesson_container[selLesson]} />,
    <SentenceLearningType info={selectedLesson.lesson_container[selLesson]} />,
    <VideoLearningType info={selectedLesson.lesson_container[selLesson]} />,
    <AlternativesPracticeType
      info={selectedLesson.lesson_container[selLesson]}
    />,
    <ImageDescPracticeType info={selectedLesson.lesson_container[selLesson]} />,
    <ImagePracticeType info={selectedLesson.lesson_container[selLesson]} />,
    <ReadingPracticeType info={selectedLesson.lesson_container[selLesson]} />,
    <SentenceComplitionPracticeType
      info={selectedLesson.lesson_container[selLesson]}
    />,
    <VoicePracticeType info={selectedLesson.lesson_container[selLesson]} />,
    <WriteDownPracticeType info={selectedLesson.lesson_container[selLesson]} />,
  ];

  return (
    <div>
      <div>
        {
          lessonTypesArray[
            selectedLesson.lesson_container[selLesson].lessonType - 1
          ]
        }
      </div>
    </div>
  );
};

export default Lesson;
