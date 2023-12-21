import Logo from "../icons/Logo";

const KeyVisual = () => {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center bg-cover bg-center">
      <div className="md:bg-gradient-blue md:absolute md:-top-[650px] md:h-[1440px] md:w-full md:rounded-full"></div>
      <div className="bg-gradient-blue-mobile md:hiddenx absolute inset-0 -top-[120px] w-full blur-[150px]"></div>
      <video class="h-full w-full object-cover" autoPlay loop muted playsInline>
        <source
          src="https://assets.nomion.io/nomion-website/earth_rotate.mp4"
          type="video/mp4"
        />
      </video>
      <div className="top-50 left-50 absolute z-10 flex flex-col items-center">
        <div className="mb-[16px] flex flex-col items-center justify-center md:flex-row">
          <p className="text-6xl font-bold leading-[4rem] md:text-8xl md:leading-[5rem] "> Định danh</p>
          <div className="mx-[16px] hidden items-center justify-center md:flex md:h-[72px] md:w-[72px]">
            <Logo/>
          </div>
          <p className="text-6xl font-bold leading-[4rem] md:text-8xl md:leading-[5rem]"> Vạn vật</p>
        </div>
      </div>
    </div>
  );
};

export default KeyVisual;
