import BottomBar from "@/components/bottom_bar";
import Display from "@/components/display";
import NavBar from "@/components/nav_bar";
import Head from "next/head";

const Services = () => {
  return (
    <div className="bg-background flex flex-col items-center text-text font-roboto">
      <Head>
        <title>Services</title>
      </Head>
      <NavBar />
      <Services />
      <Display />
      <BottomBar />
    </div>
  );
};

export default Services;
