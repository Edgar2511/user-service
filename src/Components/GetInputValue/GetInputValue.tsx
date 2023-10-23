import React, { useState } from "react";
import "./GetInputValue.css";

export const GetInputValue = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    console.log("inputValue>>>>>>>", e.target.value);
  };
  //   React.FormEvent
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue) {
      alert(JSON.stringify(inputValue, null, 2));
    } else {
      alert("Oops");
    }
  };

  return (
    <div className="GetInputValue">
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
