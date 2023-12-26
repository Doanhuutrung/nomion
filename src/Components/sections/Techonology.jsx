import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Technology() {
  return (
    <div className="max-w[1440px] m-auto pb-10">
      <div className="relative mt-[120px] flex h-screen flex-col gap-14 md:mt-[357px] md:h-full">
        <p className="z-10 w-full text-center text-3xl font-semibold leading-[2.5rem] text-white md:text-4xl">
          Giải pháp công nghệ Nomion
        </p>
        <div className="h-full">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            modules={[Pagination, Navigation]}
          >
            <SwiperSlide>
              <img
                alt="product"
                src="https://assets.nomion.io/nomion-website/nfc-chip-desktop.webp"
                class="h-[450px] w-[952px] rounded-2xl object-cover"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://assets.nomion.io/nomion-website/story-telling-platform-desktop.webp"
                class="h-[450px] w-[952px] rounded-2xl object-cover"
                alt="product"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://assets.nomion.io/nomion-website/lidar%203d.gif"
                class="h-[450px] w-[952px] rounded-2xl object-cover"
                alt="product"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://assets.nomion.io/nomion-website/marketplace-desktop.webp"
                class="h-[450px] w-[952px] rounded-2xl object-cover"
                alt="product"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://assets.nomion.io/nomion-website/digital-gallary-desktop.webp"
                class="h-[450px] w-[952px] rounded-2xl object-cover"
                alt="product"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://assets.nomion.io/nomion-website/digital-library-desktop.webp"
                class="h-[450px] w-[952px] rounded-2xl object-cover"
                alt="product"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://assets.nomion.io/nomion-website/so-hoa-pc.png"
                class="h-[450px] w-[952px] rounded-2xl object-cover"
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
