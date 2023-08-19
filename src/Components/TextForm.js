import React, { useState } from "react";
export default function TextForm(props) {
  let myStyle = {
    backgroundColor: "#fff",
    color: "black",
    padding: "18px",
  };
  let myStyle2 = {
    backgroundColor: "#f2f2f2",
    color: "grey",
    fontFamily: "Poppins",
    padding: "18px",
    border: "2px solid lightgreen",
  };
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
  const clipboard = async () => {
    var text = document.getElementById("myBox");
    text.select();
    var copied = document.getElementById("copy");

    try {
      await navigator.clipboard.writeText(text.value);
      copied.innerHTML = text.value;
    } catch (error) {
      copied.innerHTML = "Error copying text to clipboard.";
      console.error("Clipboard writeText error:", error);
    }
  };

  const reset = (e) => {
    e.preventDefault();
    setText((e.target.value = ""));
  };
  const dark = () => {
    let darkMode = (document.querySelectorAll(".btn").style.backgroundColor =
      "red");
    return darkMode;
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
          Clear Textarea
        </button>
        <button className="btn btn-primary mx-2" onClick={dark}>
          Dark Mode
        </button>
      </div>

      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read!</p>
        <h2>Preview</h2>
        <p style={myStyle2}>{text}</p>
        <h2>Clipboard</h2>
        <p style={myStyle} id="copy"></p>
      </div>
    </>
  );
}
