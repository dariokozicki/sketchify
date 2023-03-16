import type { NextPage } from "next";
import { CustomMenubar } from "./components/customMenubar";
import Scene from "./components/scene";

const Landing: NextPage = () => {
  return (
    <div className=" h-screen w-screen bg-[#0E1129]">
      <CustomMenubar />
      <Scene />;
    </div>
  );
};

export default Landing;
