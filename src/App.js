import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Kigali" />
        <footer>
          This project is coded by Nadia Simbi is open-sourced on{" "}
          <a
            href="https://github.com/Nadia-si/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}
