import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AnswerOption from "./AnswerOption";
import { Link } from "react-router-dom";
import paths from "../../paths";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "../../firebase";
import CTtest from "./test-1";

import * as tf from "@tensorflow/tfjs";
import * as speech from "@tensorflow-models/speech-commands";

import microphoneIcon from "./icons/microphone-icon.png";
import translate from "../../helpers/languageSwitcher";
import { setCTanswer } from "../../slices/testSlice";

export default function AnswerOptions({
  id,
  description,
  answer,
  images,
  currentQuestionId,
  handleCurrentQuestionId,
}) {
  const [checkedId, setCheckedId] = useState(null);
  const [model, setModel] = useState(null);
  const [action, setAction] = useState(null);
  const [labels, setLabels] = useState(null);

  const dispatch = useDispatch();

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

  const loadModel = async () => {
    const recognizer = await speech.create("BROWSER_FFT");
    await recognizer.ensureModelLoaded();

    setModel(recognizer);
    setLabels(recognizer.wordLabels());
  };

  useEffect(() => {
    loadModel();
  }, []);

  const argMax = (arr) => {
    return arr
      .map((x, i) => [x, i])
      .reduce((acc, el) => (el[0] > acc[0] ? el : acc))[1];
  };

  const recognizeCommands = async () => {
    const commands = {
      one: 1,
      two: 2,
      three: 3,
      four: 4,
    };
    console.log("Listening for commands");
    model.listen(
      (res) => {
        const maxAction = argMax(Object.values(res.scores));
        setAction(labels[maxAction]);
        handleRadio(commands[labels[argMax(Object.values(res.scores))]]);
        dispatch(
          setCTanswer({
            questionId: id,
            correctAnswer: answer,
            choosenAnswer: commands[labels[maxAction]],
          })
        );
        !!res.scores && model.stopListening();
      },
      { includeSpectrogram: true, probabilityThreshold: 0.9 }
    );
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
        <div className="flex flex-row mx-auto items-center">
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
          <img
            className="w-6 h-6 ml-8 cursor-pointer"
            src={microphoneIcon}
            onClick={recognizeCommands}
          />
        </div>
      </div>
      <p className="mt-2 italic text-gray-400 text-sm">
        {translate("answerChoosingGuide")}
      </p>
    </div>
  );
}
