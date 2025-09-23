import BottomBar from "@/components/bottom_bar";
import Display from "@/components/display";
import NavBar from "@/components/nav_bar";
import Head from "next/head";

const Siding = () => {
  return (
    <div className="bg-background flex flex-col items-center text-text font-roboto">
      <Head>
        <title>Siding</title>
      </Head>
      <NavBar />
      <Display />
      <BottomBar />
    </div>
  );
};

export default Siding;
