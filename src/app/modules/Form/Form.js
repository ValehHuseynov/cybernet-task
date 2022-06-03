import React, { useState } from "react";
import AddForm from "./component/AddForm";
import CreatedForm from "./component/CreatedForm";
import "./Form.css";

const Form = () => {
  const [inputes, setInputes] = useState([]);

  const onSetInputes = (input) => {
    const oldInputes = [...inputes];
    const newInputes = [...oldInputes, input];
    setInputes(newInputes);
  };

  const removeInputeListItem = () => {
    let oldInputes = [...inputes];
    const removeInput = oldInputes.splice(oldInputes.length - 1, 1);
    setInputes(oldInputes);
  };

  return (
    <div className="Form">
      <AddForm onSetInputes={onSetInputes} />
      <CreatedForm
        inputes={inputes}
        removeInputeListItem={removeInputeListItem}
      />
    </div>
  );
};

export default Form;
