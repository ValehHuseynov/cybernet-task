import React from "react";

const GenerateInputes = ({ input, ...rest }) => {
  function generateInput() {
    switch (input.type) {
      case "input": {
        return (
          <div>
            <label>{input.name}</label>
            <input
              type={input.type}
              placeholder={input.placeholder}
              name={input.name}
              {...rest}
            />
          </div>
        );
      }
      case "email": {
        return (
          <div>
            <label>{input.name}</label>
            <input
              type={input.type}
              placeholder={input.placeholder}
              name={input.name}
              {...rest}
            />
          </div>
        );
      }
      case "textarea": {
        return (
          <div>
            <label>{input.name}</label>
            <textarea
              placeholder={input.placeholder}
              name={input.name}
              {...rest}
            ></textarea>
          </div>
        );
      }
      case "date": {
        return (
          <div>
            <label>{input.name}</label>
            <input
              type={input.type}
              name={input.name}
              placeholder={input.placeholder}
              {...rest}
            />
          </div>
        );
      }
      default:
        return (
          <div>
            <label>{input.name}</label>
            <input
              type={input.type}
              name={input.name}
              placeholder={input.placeholder}
              {...rest}
            />
          </div>
        );
    }
  }

  return generateInput(input);
};

export default GenerateInputes;
