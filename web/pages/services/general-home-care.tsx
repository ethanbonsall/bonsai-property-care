import BottomBar from "@/components/bottom_bar";
import Display from "@/components/display";
import NavBar from "@/components/nav_bar_home";
import HomeCareComponents from "@/components/services/home_care";
import Reviews from "@/components/testimonials";
import Head from "next/head";
import Quote from "@/components/quote";

const HomeCare = () => {
  return (
    <div className="bg-accent flex flex-col items-center text-text font-roboto">
      <Head>
        <title>Home Projects</title>
      </Head>
      <NavBar />
      <HomeCareComponents />
      <Reviews />
      <Display />
      <Quote />
      <BottomBar />
    </div>
  );
};

export default HomeCare;
