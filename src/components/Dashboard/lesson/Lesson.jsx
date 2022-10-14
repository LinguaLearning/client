import React from "react";

const Lesson = ({ cardNr, selLesson }) => {
  //! Component Plugins
  const LearnANewWorld = () => {
    return <div>New Word</div>;
  };

  const practiceAWord = () => {
    return <div>Practice a Word</div>;
  };

  const confidence = () => {
    return <div>How Confident are you with this Word</div>;
  };

  const allPlugins = [LearnANewWorld, practiceAWord, confidence];

  return (
    <div>
      <div>
        {selLesson.description} - {cardNr}
      </div>
    </div>
  );
};

export default Lesson;
