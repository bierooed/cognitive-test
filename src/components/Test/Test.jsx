import React from "react";
import CTtest from "./test-1";

export default function Test() {
  return (
    <div className="flex justify-center">
      <div>
        {CTtest.map(({ id, description, images, answer }) => {
          return (
            <div key={id}>
              <h1>{description}</h1>
              <h1>Right answer - {answer}</h1>
              <div className="w-full flex items-center justify-between flex-wrap">
                {images.map((src, idx) => {
                  return (
                    <div key={idx + 1}>
                      <img className="w-64 p-2" src={src} />
                      <input type="checkbox" />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
