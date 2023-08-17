import React, { useState } from "react";

export default function TextForm(props) {
  const upperCase = () => {
    // alert("Upper case");
    setText("Please enter your feedback here!");
  };
  const onChange = (e) => {
    console.log("Upper case");
    setText(e.target.value);
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
          placeholder={text}
          rows="12"
          onChange={onChange}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={upperCase}>
        UpperCase Conversion
      </button>
    </div>
  );
}
