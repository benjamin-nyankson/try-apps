import React, { useState } from "react";
import { questions } from "./Questions";
import {
  Radio,
  FormControlLabel,
  FormControl,
  RadioGroup,
  FormLabel,
  Box,
  Button,
} from "@mui/material";
export default function Quiz() {
  const [value, setValue] = useState('');
  const handleSubmit = (e) => {
    console.log(value);
  };

  return (
    <div>
      <ol>
        {questions?.map((question) => (
          <div key={question.id}>
            <p>
              {question.id}. {question.question}{" "}
            </p>

            {question.options.map((option) => (
              <ol key={option.id}>
                <FormControl>
                  <RadioGroup
                    value={value}
                    name="quiz"
                    onChange={(e) => setValue(e.target.value)}
                  >
                    <table>
                      <tr>
                        <td>
                          <FormLabel>A.</FormLabel>
                          <FormControlLabel
                            value={option.a}
                            label={option.a}
                            control={<Radio />}
                            sx={{ ml: 1 }}
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <FormLabel>B.</FormLabel>
                          <FormControlLabel
                            value={option.b}
                            label={option.b}
                            control={<Radio />}
                            sx={{ ml: 1 }}
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <FormLabel>C.</FormLabel>
                          <FormControlLabel
                            value={option.c}
                            label={option.c}
                            control={<Radio />}
                            sx={{ ml: 1 }}
                          />
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <FormLabel>D.</FormLabel>
                          <FormControlLabel
                            value={option.d}
                            label={option.d}
                            control={<Radio />}
                            sx={{ ml: 1 }}
                          />
                        </td>
                      </tr>
                    </table>
                  </RadioGroup>
                </FormControl>
              </ol>
            ))}
          </div>
        ))}
        <Button type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </ol>
    </div>
  );
}
