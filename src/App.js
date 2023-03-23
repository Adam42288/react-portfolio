import React from "react";
import Home from "./components/Home";
import "./App.css";
import projects from "./projects";

export default function app() {
  return <Home projects={projects} />;
}
