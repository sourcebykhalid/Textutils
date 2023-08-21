import React, { useState } from "react";
import "./Appb.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2a2b2a";
      document.body.style.color = "#fff";
      document.body.style.transition = ".92s";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#f5f5f4";
      document.body.style.color = "#000";
      document.body.style.transition = "1.8s";
    }
  };

  return (
    <>
      <Navbar title="Word-Counter" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3" mode={mode} toggleMode={toggleMode}>
        <TextForm heading="Enter your text here!" />
      </div>
    </>
  );
}
export default App;
