import React from "react";
import KeyVisual from "./sections/KeyVisual";
import Desciption from "./sections/Description";
import Partner from "./sections/Partner";
import Gallery from "./sections/Gallery";
import Technology from "./sections/Techonology";

function MainContent() {
  return (
    <main className="main min-h-[100svh]">
      <KeyVisual />
      <Desciption />
      <Technology />
      <Partner />
      <Gallery />
    </main>
  );
}

export default MainContent;

//Small viewport units = svh
