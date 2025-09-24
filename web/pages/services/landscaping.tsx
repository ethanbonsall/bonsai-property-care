import BottomBar from "@/components/bottom_bar";
import Display from "@/components/display";
import NavBar from "@/components/nav_bar_home";
import Reviews from "@/components/testimonials";
import Landscaping_Component from "@/components/services/landscaping";
import Head from "next/head";
import Quote from "@/components/quote";

const Landscaping = () => {
  return (
    <div className="bg-background flex flex-col items-center text-text font-roboto">
      <Head>
        <title>Landscaping</title>
      </Head>
      <NavBar />
      <Landscaping_Component />
      <Reviews />
      <Display />
      <Quote />
      <BottomBar />
    </div>
  );
};

export default Landscaping;
