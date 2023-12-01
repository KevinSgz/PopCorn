import { useState } from "react";
import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";

import StartRating from "./StarRatin";

/*unction Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StartRating color="green" maxRating={10} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  );
}*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/*  <StartRating
      maxRating={5}
      messages={["Terrible", "Bad", "Ok", "Good", "Awesome"]}
    />
    <StartRating size={25} color="blue" className="test" defaultRating={3} />

<Test /> */}
  </React.StrictMode>
);
