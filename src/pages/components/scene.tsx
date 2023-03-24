import Spline from "@splinetool/react-spline";

export default function Scene() {
  return (
    <div className=" mx-auto w-10/12">
      <Header />

      <div className="font-[Spline Sans] relative ml-auto min-h-screen w-[66%] text-base text-cyan-50">
        <Spline
          className="absolute top-0 left-0"
          scene="https://prod.spline.design/sKN9fAeS5WuOA3Rz/scene.splinecode"
        />
      </div>
    </div>
  );
}

const Header = () => {
  return (
    <div className="absolute top-0 z-10 max-w-2xl pt-40">
      <h1 className="font-[Spline Sans Mono] whitespace-pre-line text-6xl font-bold">
        Bring your projects
        <br /> to the next level
      </h1>
      <p className=" mb-32 font-sans text-xl font-normal">
        Empowering businesses through digital transformation
      </p>
      <div className="flex w-fit flex-col items-center">
        <p className=" w-96 flex-wrap font-sans text-xl">
          Allow your company to reach its full potential, from sketches all the
          way to production.
        </p>
        <button className=" font-[Spline Sans Mono] my-8 mx-auto h-16 w-48 rounded-2xl bg-[#7209b7] duration-300 ease-in-out hover:brightness-125 ">
          APPLY NOW
        </button>
      </div>
    </div>
  );
};
