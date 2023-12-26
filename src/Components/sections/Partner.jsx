const Partner = () => {
  return (
    <div className="relative flex flex-col gap-2 mt-20">
      <div className="z-10 h-full w-full">
        <p className="w-full text-center text-3xl font-semibold leading-[2.5rem] md:text-4xl text-white">
          Đối tác
        </p>
        <div className="flex flex-row flex-wrap items-center justify-center md:gap-10">
          <div className="flex w-1/2 items-center px-7 py-12 md:w-[192px] md:px-4 md:py-6">
            <img
              className="w-full"
              src="https://assets.nomion.io/nomion-website/ortho-logo.png"
              alt="Ortho"
            />
          </div>
          <div className="flex w-1/2 items-center px-7 py-12 md:w-[150px] md:px-4 md:py-6">
            <img
              className="w-full"
              src="https://assets.nomion.io/nomion-website/lej-logo.png"
              alt="Lej"
            />
          </div>
          <div className="flex w-1/2 items-center px-7 py-12 md:w-[192px] md:px-4 md:py-6">
            <img
              className="w-full"
              src="https://assets.nomion.io/nomion-website/da-nang-logo.png"
              alt="Da Nang"
            />
          </div>
          <div className="flex w-1/2 items-center px-7 py-12 md:w-[192px] md:px-4 md:py-6">
            <img
              className="w-full"
              src="https://assets.nomion.io/nomion-website/ho-tieu-logo.png"
              alt="Ho Tieu"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;