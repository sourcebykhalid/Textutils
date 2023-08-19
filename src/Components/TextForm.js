import React, { useState } from "react";

export default function TextForm(props) {
  const upperCase = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const lowerCase = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };
  const onChange = (e) => {
    setText(e.target.value);
  };
  const reset = (e) => {
    e.preventDefault();
    setText((e.target.value = ""));
  };

  const [text, setText] = useState("");

  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            rows="8"
            onChange={onChange}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={upperCase}>
          UpperCase Conversion
        </button>
        <button className="btn btn-primary mx-3" onClick={lowerCase}>
          lowerCase Conversion
        </button>
        <button className="btn btn-primary mx-3" type="reset" onClick={reset}>
          Reset
        </button>
      </div>

      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read!</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
