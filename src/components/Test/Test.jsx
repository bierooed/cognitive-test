import React, { useState } from "react";
import CTtest from "./test-1";
import { useSelector } from "react-redux";
import AnswerOptions from "./AnswerOptions";

export default function Test() {
  const { CTtestAnswers } = useSelector((state) => state.test);
  const [currentQuestionId, setCurrentQuestionId] = useState(0);
  const { id, description, images, answer } = CTtest[currentQuestionId];
  return (
    <div className="flex justify-center">
      <div>
        <AnswerOptions
          id={id}
          description={description}
          images={images}
          answer={answer}
          currentQuestionId={currentQuestionId}
          handleCurrentQuestionId={(value) => setCurrentQuestionId(value)}
        />
      </div>
    </div>
  );
}
