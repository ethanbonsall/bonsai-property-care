import BottomBar from "@/components/bottom_bar";
import Display from "@/components/display";
import NavBar from "@/components/nav_bar_home";
import Reviews from "@/components/testimonials";
import Driveway from "@/components/services/sealing";
import Head from "next/head";
import Quote from "@/components/quote";

const Washing = () => {
  return (
    <div className="bg-accent flex flex-col items-center text-text font-roboto">
      <Head>
        <title>Driveway Sealing</title>
      </Head>
      <NavBar />
      <Driveway />
      <Reviews />
      <Display />
      <Quote />
      <BottomBar />
    </div>
  );
};

export default Washing;
