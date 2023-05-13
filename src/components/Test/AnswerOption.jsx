import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCTanswer } from "../../slices/testSlice";

export default function AnswerOption({
  id,
  answer,
  questionIdx,
  src,
  checkedId,
  handleRadio,
}) {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        handleRadio(questionIdx + 1);
        dispatch(
          setCTanswer({
            questionId: id,
            correctAnswer: answer,
            choosenAnswer: questionIdx + 1,
          })
        );
      }}
    >
      <img className="w-64 p-2" src={src} />
      <input
        readOnly
        type="radio"
        checked={checkedId === questionIdx + 1}
        value={questionIdx + 1}
      />
    </div>
  );
}
