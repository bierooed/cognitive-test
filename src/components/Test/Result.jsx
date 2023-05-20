import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import CTtest from "./test-1";

export default function Result() {
  const [userAnswers, setUserAnswer] = useState({});
  const [score, setScore] = useState(0);

  useEffect(() => {
    const getResult = async () => {
      onAuthStateChanged(auth, async (user) => {
        const docRef = doc(db, "usersResult", user.email);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserAnswer(Object.values(docSnap.data()));
          setScore(
            Object.values(docSnap.data()).filter(
              ({ correctAnswer, choosenAnswer }) =>
                choosenAnswer === correctAnswer
            ).length
          );
        } else {
          console.log("No such document!");
        }
      });
    };

    getResult();
  }, []);

  return (
    userAnswers.length > 0 && (
      <div>
        <h1 className="text-xl">
          Your Score - {score}/{userAnswers.length}
        </h1>
        {userAnswers.map(
          ({ questionId, choosenAnswer, correctAnswer }, idx) => {
            return (
              <div key={questionId} className="my-12">
                <h1>Question - {questionId}</h1>
                <div className="flex justify-around flex-wrap">
                  {CTtest[idx].images.map((src, idx) => (
                    <img
                      key={idx}
                      className={`border-2 ${
                        correctAnswer === idx + 1
                          ? "border-green-300"
                          : "border-red-300"
                      } w-44 m-2 ${
                        choosenAnswer !== correctAnswer &&
                        choosenAnswer === idx + 1 &&
                        "border-yellow-400"
                      }`}
                      src={src}
                    />
                  ))}
                </div>
              </div>
            );
          }
        )}
      </div>
    )
  );
}
