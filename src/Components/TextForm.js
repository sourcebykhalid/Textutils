import React, { useState } from "react";
// import { copy } from "react-copy-to-clipboard";
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
  const clipboard = (e) => {
    setText(e.target.value.copy);
    // alert(`You have copied "${text}"`);
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
        <button className="btn btn-primary mx-2" onClick={upperCase}>
          UpperCase Conversion
        </button>
        <button className="btn btn-primary mx-2" onClick={lowerCase}>
          LowerCase Conversion
        </button>
        <button className="btn btn-primary mx-2" onClick={clipboard}>
          Copy to Clipboard
        </button>
        <button className="btn btn-primary mx-2" type="reset" onClick={reset}>
          Clear text
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
