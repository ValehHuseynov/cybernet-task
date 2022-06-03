import React, { useState } from "react";
import GenerateInputes from "./GenerateInputes";

const CreatedForm = ({ inputes, removeInputeListItem }) => {
  console.log(inputes);
  const [inputFileds, setInputFileds] = useState([]);
  const [isSubbmiting, setIsSubbmiting] = useState(false);

  const addInputDatas = (event) => {
    const oldInputFileds = [...inputFileds];

    let newArray = oldInputFileds.map((inputFiled) =>
      inputFiled.name === event.target.name
        ? {
            ...inputFiled,
            value: event.target.value,
          }
        : { name: event.target.name, value: event.target.value }
    );

    let formIsValid = true;
    for (let input of newArray) {
      formIsValid = input.value && formIsValid;
    }

    setInputFileds(newArray);
    setIsSubbmiting(formIsValid);
  };
  return (
    <form>
      <h4>From</h4>
      <div>
        {inputes.map((input) => (
          <GenerateInputes
            key={input.id}
            input={input}
            onChange={addInputDatas}
          />
        ))}
      </div>
      <div>
        <button type="submit" disabled={isSubbmiting}>
          Submit
        </button>
        <button type="button" onClick={removeInputeListItem}>
          Remove List
        </button>
      </div>
    </form>
  );
};

export default CreatedForm;
