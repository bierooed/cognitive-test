import React, { useState } from "react";
import { useSelector } from "react-redux";
import AnswerOption from "./AnswerOption";
import { Link } from "react-router-dom";
import paths from "../../paths";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { auth, db } from "../../firebase";
import CTtest from "./test-1";

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

  const { CTtestAnswers } = useSelector((state) => state.test);

  const addResult = async () => {
    try {
      await setDoc(
        doc(db, "usersResult", auth.currentUser.email),
        CTtestAnswers
      );
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

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
          {id < CTtest.length ? (
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
          ) : (
            <Link
              onClick={addResult}
              className="disabled:bg-gray-400 disabled:cursor-not-allowed text-white bg-indigo-600 hover:bg-indigo-700 font-medium rounded-lg text-md px-8 py-2 focus:outline-none "
              disabled={typeof checkedId !== "number"}
              to={paths.result}
            >
              See result
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
