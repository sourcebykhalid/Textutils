import "./Appb.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  return (
    <>
      <Navbar title="React-JS" aboutText="About" search="Search" />
      <div className="container">
        <TextForm heading="Enter your feedback here!" />
      </div>
    </>
  );
}
export default App;
