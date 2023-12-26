import React from "react";
import ReactSwipe from "react-swipe";

const Technology = () => {
  let reactSwipeEl;
  return (
    <div className="m-auto max-w-[1440px] pb-10">
      <div className="md:bg-gradient-blue md:absolute md:right-[500px] md:top-[100px] md:h-[1440px] md:w-full md:rounded-full"></div>
      <p className="z-10 w-full text-center text-3xl font-semibold leading-[2.5rem] md:text-4xl">
        Giải pháp công nghệ Nomion
      </p>
      <div className="swiper swiper-initialized swiper-horizontal mySwiper swiper-backface-hidden text-white">
        <div>
          <ReactSwipe
            className="carousel"
            swipeOptions={{ continuous: false }}
            ref={(el) => (reactSwipeEl = el)}
          >
            <div>PANE 1</div>
            <div>PANE 2</div>
            <div>PANE 3</div>
          </ReactSwipe>
          <button onClick={() => reactSwipeEl.next()}>Next</button>
          <button onClick={() => reactSwipeEl.prev()}>Previous</button>
        </div>
      </div>
    </div>
  );
};
export default Technology;