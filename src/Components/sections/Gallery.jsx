import DaNonNuoc from "../pages/DaNonNuoc";
const Gallery = () => {
  return (
    <div className="relative w-full overflow-x-clip px-2 py-6 lg:px-6 lg:py-20">
      <div className="m-auto flex max-w-[1440px] flex-col flex-wrap lg:flex-row">
        <div className="mb-[50px] flex h-full justify-center px-[24px] lg:w-1/2">
          <div className="relative flex flex-col items-center justify-center">
            <div className="absolute top-2 z-10 w-fit rounded-full bg-gray-600 text-white md:top-6">
              <p className="px-[20px] py-[4px] text-center text-base font-semibold md:text-xl">
                Ortho
              </p>
            </div>
            <img
              src="https://assets.nomion.io/nomion-website/ortho-banner.png"
              alt="general.ortho"
              className="h-full w-full rounded-lg object-cover md:max-w-lg"
            />
            <div className="flex	 w-full flex-col gap-3 rounded-lg bg-gray-700 p-4 transition-all duration-300 hover:opacity-100 md:absolute md:bottom-2 md:z-10 md:h-fit md:w-[95%] md:opacity-0">
              <p className="font-medium text-white">Thương hiệu thời trang số</p>
              <p className="h-5/6 text-[#BFBFBF] md:h-full">
                Ortho sử dụng giải pháp Nomion trong việc định danh số 300 chiếc
                áo sweater với Astro chip trong bộ sưu tập Starlight phiên bản
                giới hạn.
              </p>
              <div className="flex justify-center gap-3 md:justify-start">
                <div className="flex items-center rounded-lg border px-2 py-2 md:gap-2 md:px-4">
                  <a
                    target="_blank"
                    className="text-sm font-semibold text-white"
                    href="https://ortho.fashion"
                    rel="noreferrer"
                  >
                    Thư viện số
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-[50px] flex h-full justify-center px-[24px] lg:w-1/2">
          <div className="relative flex flex-col items-center justify-center">
            <div className="absolute top-2 z-10 w-fit rounded-full bg-gray-600 text-white md:top-6">
              <p className="px-[20px] py-[4px] text-center text-base font-semibold md:text-xl">
                Le J' Cafe
              </p>
            </div>
            <img
              src="https://assets.nomion.io/nomion-website/lej-banner.png"
              alt="Le J' Cafe"
              className="h-full w-full rounded-lg object-cover md:max-w-lg"
            />
            <div className="flex	 w-full flex-col gap-3 rounded-lg bg-gray-700 p-4 transition-all duration-300 hover:opacity-100 md:absolute md:bottom-2 md:z-10 md:h-fit md:w-[95%] md:opacity-0">
              <p className="font-medium text-white">Cafe đặc sản Đà Lạt</p>
              <p className="h-5/6 text-[#BFBFBF] md:h-full">
                Nomion cung cấp trình duyệt web đơn giản với nội dung tương tác
                đa dạng được cá nhân hóa, giúp Le J' dễ dàng lan tỏa niềm đam mê
                và tâm huyết với cà phê Việt.
              </p>
              <div className="flex justify-center gap-3 md:justify-start">
                <div className="flex items-center rounded-lg border px-2 py-2 md:gap-2 md:px-4">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-white"
                    href="https://nomion.io/lej"
                  >
                    Thư viện số
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-[50px] flex h-full justify-center px-[24px] lg:w-1/2">
          <div className="relative flex flex-col items-center justify-center">
            <div className="absolute top-2 z-10 w-fit rounded-full bg-gray-600 text-white md:top-6">
              <p className="px-[20px] py-[4px] text-center text-base font-semibold md:text-xl">
                Đá non nước 2023
              </p>
            </div>
            <img
              src="https://assets.nomion.io/nomion-website/da-non-nuoc-banner.png"
              alt="general.danonnuoc"
              className="h-full w-full rounded-lg object-cover md:max-w-lg"
            />
            <div className="flex w-full flex-col gap-3 rounded-lg bg-gray-700 p-4 transition-all duration-300 hover:opacity-100 md:absolute md:bottom-2 md:z-10 md:h-fit md:w-[95%] md:opacity-0">
              <p className="font-medium text-white">Đá non nước</p>
              <p className="h-5/6 text-[#BFBFBF] md:h-full">
                Với giải pháp Nomion, 10 tác phẩm tham gia Hội thi điêu khắc đá
                mỹ nghệ Non Nước 2023 lần đầu tiên được định danh số, chứng thực
                độc bản và triển lãm trên không gian số.
              </p>
              <div className="flex justify-center gap-3 md:justify-start">
                <div className="flex items-center rounded-lg border px-2 py-2 md:gap-2 md:px-4">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-white"
                    href="/DaNonNuoc"
                  >
                    Thư viện số
                  </a>
                </div>
                <div className="flex items-center rounded-lg border px-2 py-2 md:gap-2 md:px-4">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-white"
                    href="https://www.spatial.io/s/Nomion-Da-Non-Nuoc-Gallery-64df8d83ace3fe3b9c26a4c0?share=0"
                  >
                    Bảo tàng số
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-[50px] flex h-full justify-center px-[24px] lg:w-1/2">
          <div className="relative flex flex-col items-center justify-center">
            <div className="absolute top-2 z-10 w-fit rounded-full bg-gray-600 text-white md:top-6">
              <p className="px-[20px] py-[4px] text-center text-base font-semibold md:text-xl">
                ELLE Fashion Show 2023
              </p>
            </div>
            <img
              src="https://storage.googleapis.com/assets-fygito/elle/nomion-gallery/image%20207.png"
              alt="ELLE Fashion Show 2023"
              className="h-full w-full rounded-lg object-contain md:max-w-lg"
            />
            <div className="flex w-full flex-col gap-3 rounded-lg bg-gray-700 p-4 transition-all duration-300 hover:opacity-100 md:absolute md:bottom-2 md:z-10 md:h-fit md:w-[95%] md:opacity-0">
              <p className="font-medium text-white">
                ELLE Fashion Show 2023: Giao Lộ Thời Trang & Kiến Trúc
              </p>
              <p className="h-5/6 text-[#BFBFBF] md:h-full">
                Chương trình trình diễn thời trang mang yếu tố liên ngành đầu
                tiên được đồng tổ chức bởi ELLE Vietnam và ELLE Decoration
                Vietnam.
              </p>
              <div className="flex justify-center gap-3 md:justify-start">
                <div className="flex items-center rounded-lg border px-2 py-2 md:gap-2 md:px-4">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-semibold text-white"
                    href="https://nomion.io/elleshow2023"
                  >
                    Thư viện số
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-[50px] flex h-full justify-center px-[24px] lg:w-1/2">
          <div className="relative flex flex-col items-center justify-center">
            <div className="absolute top-2 z-10 w-fit rounded-full bg-gray-600 text-white md:top-6">
              <p className="px-[20px] py-[4px] text-center text-base font-semibold md:text-xl text-white">
                Cổ vật (Coming Soon)
              </p>
            </div>
            <img
              src="https://assets.nomion.io/nomion-website/hue-banner.png"
              alt="general.hue"
              className="h-full w-full rounded-lg object-contain blur md:max-w-lg"
            />
          </div>
        </div>
        <div className="mb-[50px] flex h-full justify-center px-[24px] lg:w-1/2">
          <div className="relative flex flex-col items-center justify-center">
            <div className="absolute top-2 z-10 w-fit rounded-full bg-gray-600 text-white md:top-6">
              <p className="px-[20px] py-[4px] text-center text-base font-semibold md:text-xl text-white">
                Tác phẩm nghệ thuật (Coming Soon)
              </p>
            </div>
            <img
              src="https://assets.nomion.io/nomion-website/nhiep-anh-banner.png"
              alt="general.nghethuat"
              className="h-full w-full rounded-lg object-cover blur md:max-w-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Gallery;
