import React from "react";
import ReactDOM from "react-dom";
import App from "./app";

const yogaPoses = [
  "Tadasana",
  "Vrikshasana",
  "Adho Mukho Svanasana",
  "Trikonasana",
  "Kursiasana",
  "Naukasana",
  "Bhujangasana",
  "Paschimottanasana",
  "Balasana",
  "Sukhasna",
  "Bandha Sarvangasana",
  "Virabhadrasana I",
  "Chaturanga",
  "Utkatasana",
  "Bakasana",
  "Savasana"
];

ReactDOM.render(<App data={yogaPoses} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
