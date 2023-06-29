/* eslint-disable react/react-in-jsx-scope */
"use client";
import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import Home from "../src/home/Index";

function App() {
  const isBrowser = () => typeof window !== "undefined";
  isBrowser(); // true

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <>
      <Home />
    </>
  );
}

export default App;
