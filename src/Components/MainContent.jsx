import React from "react";
import KeyVisual from "./sections/Keyvisual";
import Desciption from "./sections/Description";

function MainContent() {
  return <main className="main min-h-[100svh]"> 
    <KeyVisual/>
    <Desciption/>
  </main>;
}

export default MainContent;

//Small viewport units = svh
