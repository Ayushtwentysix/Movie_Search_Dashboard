import React from "react";
import ReactDOM from "react-dom";
import Search from "./search";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Search url={"https://www.omdbapi.com/?apikey=85c4fbc0&t="} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
