import React from "react";
import KeyVisual from "./sections/keyVisual";
import Desciption from "./sections/Description";
import Partner from "./sections/Partner";
import Gallery from "./sections/Gallery";


function MainContent() {
  return (
    <main className="main min-h-[100svh]">
      <KeyVisual />
      <Desciption />
      <Partner/>
      <Gallery/>
    </main>
  );
}

export default MainContent;

//Small viewport units = svh
