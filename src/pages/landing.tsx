import type { NextPage } from "next";
import { CustomMenubar } from "./components/CustomMenubar";
import Scene from "./components/scene";
import Head from "next/head";

const Landing: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700&family=Open+Sans:wght@400;600&family=Syncopate&display=swap"
          rel="stylesheet"
        />
        <script
          src="//code.tidio.co/lvi3v0q215pzc0dcpn7z3yhx319o5uzv.js"
          async
        ></script>
      </Head>
      <div className="min-w-screen relative min-h-screen w-full bg-[#0E1129]">
        <CustomMenubar />

        <Scene />
      </div>
    </>
  );
};
{
}

export default Landing;
