import React from "react";

export default function About(props) {
  const myStyle = {
    backgroundColor: "#000",
    color: "#fff",
    padding: "15px",
  };
  return (
    <>
      <h1 className="my-4 mx-4" style={myStyle}>
        At TextUtils App
      </h1>
      <h3 className="my-4 mx-5">
        You can Analyze and transfom your text into different forms
      </h3>
    </>
  );
}
