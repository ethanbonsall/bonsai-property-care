import BottomBar from "@/components/bottom_bar";
import Display from "@/components/display";
import NavBar from "@/components/nav_bar_home";
import ServicesComponent from "@/components/services/index";
import Testimonial from "@/components/testimonials";
import Head from "next/head";

const Services = () => {
  return (
    <div className="bg-secondary-200 flex flex-col items-center text-text font-roboto">
      <Head>
        <title>Services</title>
      </Head>
      <NavBar />
      <ServicesComponent />
      <Testimonial />
      <Display />
      <BottomBar />
    </div>
  );
};

export default Services;
