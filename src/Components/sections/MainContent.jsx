import React from "react";
import KeyVisual from "./KeyVisual";
import Desciption from "./Description";
import Partner from "./Partner";
import Gallery from "./Gallery";
import Technology from "./Techonology";

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
