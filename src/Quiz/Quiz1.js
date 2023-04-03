import React from "react";
import { questions } from "./Questions1";
import { Radio, FormLabel, Button } from "@mui/material";
export default function Quiz1() {
  return (
    <div>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e);
        }}
      >
        {questions.map((question, index) => (
          <div key={index}>
            <h3>{question.question}</h3>
            <ol type="A">
              {question.options.map((option, optionIndex) => (
                <li key={optionIndex}>
                  <label>
                    <input
                      type="radio"
                      value={option}
                      name={`question${index}`}
                    />
                    {option}
                  </label>
                </li>
              ))}
            </ol>
          </div>
        ))}
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
