import React, { useState } from "react";

export default function TextForm(props) {
  const upperCase = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const onChange = (e) => {
    setText(e.target.value);
  };
  const reset = (e) => {
    e.preventDefault();
    setText((e.target.value = ""));
  };

  const [text, setText] = useState("Enter your text here");

  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          value={text}
          rows="12"
          onChange={onChange}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={upperCase}>
        UpperCase Conversion
      </button>
      <button className="btn btn-primary mx-3" type="reset" onClick={reset}>
        Reset
      </button>
    </div>
  );
}
