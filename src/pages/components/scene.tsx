import Spline from "@splinetool/react-spline";

export default function Scene() {
  return (
    <div className="font-[Spline Sans] relative my-0 mx-auto text-base text-cyan-50">
      <div className="absolute top-0 right-0 m-0">
        <Spline
          className=""
          scene="https://prod.spline.design/sKN9fAeS5WuOA3Rz/scene.splinecode"
        />
      </div>
      <Header />
    </div>
  );
}

const Header = () => {
  return (
    <div className="font-[Spline Sans Mono] absolute top-0 left-0 ml-40 max-w-2xl text-4xl font-bold">
      <h1>Bring your projects to life</h1>
      <p>
        With Sketchify you can customize your designs and captivate your
        clients.
      </p>
    </div>
  );
};
