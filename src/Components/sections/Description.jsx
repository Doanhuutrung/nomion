const Desciption = () => {
  return (
    <div className="relative flex w-full flex-col gap-y-14 overflow-x-clip px-6 md:mt-28 lg:px-10">
      <div className="md:absolute md:-top-[400px] md:right-[500px] md:h-[1440px] md:w-full md:rounded-full"></div>
      <div className=" md:absolute md:-top-[400px] md:left-[500px] md:h-[1440px] md:w-full md:rounded-full"></div>
      <div className="z-10 flex h-full w-full flex-col gap-14 bg-[transparent]">
        <div className="flex flex-col items-center justify-center gap-3 md:px-[116px]">
          <p className="w-full text-center text-3xl font-semibold leading-[2.5rem] text-white md:text-4xl">
            Chúng tôi định danh vạn vật như thế nào ?
          </p>
          <p class="text-center text-lg text-white md:w-[595px]">
            "Với"
            <b>NOMION</b> " - một giải pháp toàn diện sử dụng công nghệ
            blockchain để số hoá các sản phẩm vật lý, giúp các ""
            <span class="whitespace-nowrap text-white">thương hiệu Việt</span>
          </p>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-5 md:flex-row md:gap-10">
          <div class="flex w-2/5 flex-col items-center md:h-60 md:w-60 ">
            <img
              class="md:rounded-4xl shadow-white-alpha backdrop-blur-1.5xl mb-2 w-full rounded-2xl object-contain"
              src="https://assets.nomion.io/nomion-website/identity-asset.png"
              alt="Identity asset"
            />
            <p class="w-[200px] text-center text-lg font-semibold leading-[1.5rem] text-white">
              Định danh tài sản thực trên không gian số
            </p>
          </div>
          <div class="flex w-2/5 flex-col items-center md:h-60 md:w-60 ">
            <img
              class="md:rounded-4xl shadow-white-alpha backdrop-blur-1.5xl mb-2 w-full rounded-2xl object-contain"
              src="https://assets.nomion.io/nomion-website/exploitation-digital.png"
              alt="Identity asset"
            />
            <p class="w-[200px] text-center text-lg font-semibold leading-[1.5rem] text-white">
              Khai thác tối ưu tài nguyên số
            </p>
          </div>
          <div class="flex w-2/5 flex-col items-center md:h-60 md:w-60 ">
            <img
              class="md:rounded-4xl shadow-white-alpha backdrop-blur-1.5xl mb-2 w-full rounded-2xl object-contain"
              src="https://assets.nomion.io/nomion-website/global-customer.png"
              alt="Identity asset"
            />
            <p class="w-[200px] text-center text-lg font-semibold leading-[1.5rem] text-white">
              Tiếp cận khách hàng số toàn cầu
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Desciption;
