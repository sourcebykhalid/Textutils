import React, { useState } from "react";
import "./Appb.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1700);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#2a2b2a";
      document.body.style.color = "#fff";
      document.body.style.transition = ".92s";
      showAlert("Dark Mode enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#f5f5f4";
      document.body.style.color = "#000";
      document.body.style.transition = "1.8s";
      showAlert("Light Mode enabled", "success");
    }
  };

  return (
    <>
      <Navbar title="Word-Counter" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3" mode={mode} toggleMode={toggleMode}>
        <TextForm heading="Enter your text here!" showAlert={showAlert} />
      </div>
    </>
  );
}
export default App;
