import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import AnswerOption from "./AnswerOption";

export default function AnswerOptions({
  id,
  description,
  answer,
  images,
  currentQuestionId,
  handleCurrentQuestionId,
}) {
  const [checkedId, setCheckedId] = useState(null);
  const handleRadio = (id) => setCheckedId(id);

  return (
    <div key={id}>
      <h1>{description}</h1>
      <div className="w-full flex items-center md:justify-around xs: justify-center flex-wrap">
        {images.map((src, questionIdx) => {
          return (
            <AnswerOption
              key={questionIdx + 1}
              id={id}
              answer={answer}
              questionIdx={questionIdx}
              src={src}
              checkedId={checkedId}
              handleRadio={handleRadio}
            />
          );
        })}
      </div>
      <div className="flex justify-center mt-8">
        <div className="flex flex-row mx-auto">
          <button
            disabled={typeof checkedId !== "number"}
            onClick={() => {
              handleCurrentQuestionId(currentQuestionId + 1);
              setCheckedId(null);
            }}
            type="button"
            className="disabled:bg-gray-400 disabled:cursor-not-allowed text-white bg-indigo-600 hover:bg-indigo-700 font-medium rounded-lg text-md px-8 py-2 focus:outline-none "
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
