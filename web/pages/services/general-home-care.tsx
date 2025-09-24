import BottomBar from "@/components/bottom_bar";
import Display from "@/components/display";
import NavBar from "@/components/nav_bar_home";
import HomeCareComponents from "@/components/services/home_care";
import Head from "next/head";

const HomeCare = () => {
  return (
    <div className="bg-accent flex flex-col items-center text-text font-roboto">
      <Head>
        <title>Home Projects</title>
      </Head>
      <NavBar />
      <HomeCareComponents />
      <Display />
      <BottomBar />
    </div>
  );
};

export default HomeCare;
