import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Technology() {
  return (
    <div className="m-auto max-w-[1440px] pb-10">
      <div className="relative mt-[120px] flex h-screen flex-col gap-14 md:mt-[357px] md:h-full">
        <p className="z-10 w-full text-center text-3xl font-semibold leading-[2.5rem] text-white md:text-4xl">
          Giải pháp công nghệ Nomion
        </p>
        <div className="h-full ">
          <Swiper
           
            grabCursor={true}
            centeredSlides={true}
            loop={false}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 10,
              stretch: 2,
              depth: 50,
              modifier: 3,
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            modules={[Pagination, Navigation]}
          >
            <SwiperSlide>
              <img
                src="https://assets.nomion.io/nomion-website/story-telling-platform-desktop.webp"
                className="ml-60 h-[450px] w-[952px] rounded-2xl object-cover md:ml-60"
                alt="product"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://assets.nomion.io/nomion-website/lidar%203d.gif"
                className="ml-60 h-[450px] w-[952px] rounded-2xl object-cover md:ml-60"
                alt="product"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://assets.nomion.io/nomion-website/marketplace-desktop.webp"
                className="ml-60 h-[450px] w-[952px] rounded-2xl object-cover md:ml-60"
                alt="product"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://assets.nomion.io/nomion-website/digital-gallary-desktop.webp"
                className="ml-60 h-[450px] w-[952px] rounded-2xl object-cover md:ml-60"
                alt="product"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://assets.nomion.io/nomion-website/digital-library-desktop.webp"
                className="ml-60 h-[450px] w-[952px] rounded-2xl object-cover md:ml-60"
                alt="product"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://assets.nomion.io/nomion-website/so-hoa-pc.png"
                className=" ml-60 h-[450px] w-[952px] rounded-2xl object-cover md:ml-60"
                alt="prodcut"
              />
            </SwiperSlide>
            <div className="swiper-pagination"></div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Technology;
