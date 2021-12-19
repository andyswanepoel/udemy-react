import { useState } from "react";

const useAdvancedInput = (validations) => {
  const [value, setValue] = useState("");
  const [interacted, setInteracted] = useState(false);

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  const handleInputBlur = () => {
    setInteracted(true);
  };

  const reset = () => {
    setValue("");
    setInteracted(false);
  };

  const errorMessage = validations.find(
    (validation) => !validation.fn(value)
  )?.message;

  const validValue = validations.every((validation) => validation.fn(value));

  const inputInvalid = !validValue && interacted;

  return [
    value,
    validValue,
    inputInvalid,
    errorMessage,
    handleValueChange,
    handleInputBlur,
    reset
  ];
};

export default useAdvancedInput;
