const Gallery = () => {
  return (
    <div className="relative w-full overflow-x-clip px-2 py-6 lg:px-6 lg:py-20">
      <div className="m-auto flex max-w-[1440px] flex-col flex-wrap lg:flex-row">
        <div class="mb-[50px] flex h-full justify-center px-[24px] lg:w-1/2">
          <div class="relative flex flex-col items-center justify-center">
            <div class="rounded-full bg-gray-600 text-white absolute top-2 z-10 w-fit md:top-6">
              <p class="px-[20px] py-[4px] text-center text-base font-semibold md:text-xl">
                Ortho
              </p>
            </div>
            <img
              src="https://assets.nomion.io/nomion-website/ortho-banner.png"
              alt="general.ortho"
              class="undefined h-full w-full rounded-lg object-cover md:max-w-lg"
            />
            <div class="bg-gray-700	 flex w-full flex-col gap-3 rounded-lg p-4 transition-all duration-300 hover:opacity-100 md:absolute md:bottom-2 md:z-10 md:h-fit md:w-[95%] md:opacity-0">
              <p class="font-medium text-white">Thương hiệu thời trang số</p>
              <p class="h-5/6 text-[#BFBFBF] md:h-full">
                Ortho sử dụng giải pháp Nomion trong việc định danh số 300 chiếc
                áo sweater với Astro chip trong bộ sưu tập Starlight phiên bản
                giới hạn.
              </p>
              <div class="flex justify-center gap-3 md:justify-start">
                <div class="flex items-center rounded-lg border px-2 py-2 md:gap-2 md:px-4">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    class="text-sm font-semibold text-white"
                    href="https://ortho.fashion"
                  >
                    Thư viện số 
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>   
      </div>
    </div>
  );
};
export default Gallery;
