import React, { useState } from "react";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import SecondPage from "./components/SecondPage/SecondPage"; // Make sure this path is correct

function App() {
  const [route, setRoute] = useState("landing");

  const onRouteChange = (route) => {
    setRoute(route);
  };

  return (
    <div className="App">
      {route === "landing" ? (
        <LandingPage onRouteChange={onRouteChange} />
      ) : (
        <SecondPage />
      )}
    </div>
  );
}

export default App;
