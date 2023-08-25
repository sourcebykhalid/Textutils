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
    props.showAlert("Converted to upperCase", "success");
  };
  const lowerCase = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to lowerCase", "success");
  };
  const onChange = (e) => {
    setText(e.target.value);
  };
  const clipboard = async () => {
    let text = document.getElementById("myBox");
    text.select();
    let copied = document.getElementById("copy");

    try {
      await navigator.clipboard.writeText(text.value);
      copied.innerHTML = text.value;
      props.showAlert("Copied to Clipboard", "success");
    } catch (error) {
      copied.innerHTML = "Error copying text to clipboard.";
      console.error("Clipboard writeText error:", error);
    }
  };
  const reset = (e) => {
    e.preventDefault();
    setText((e.target.value = ""));
    props.showAlert("Textarea cleared", "success");
  };

  const [text, setText] = useState("");

  return (
    <>
      <div>
        <h1 style={{ fontSize: "1.5rem" }}>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            rows="8"
            onChange={onChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={upperCase}>
          UpperCase Conversion
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={lowerCase}>
          LowerCase Conversion
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={clipboard}>
          Copy to Clipboard
        </button>
        <button
          className="btn btn-primary mx-2 my-2"
          type="reset"
          onClick={reset}
        >
          Clear Textarea
        </button>
      </div>

      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {
            text.split(" ").filter((e) => {
              return e.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((e) => {
              return e.length !== 0;
            }).length}{" "}
          Minutes read!
        </p>
        <h2>Preview</h2>
        <p style={myStyle2}>{text.length > 0 ? text : "Nothing to preview!"}</p>
        <h2>Clipboard</h2>
        <p style={myStyle} id="copy"></p>
      </div>
    </>
  );
}
