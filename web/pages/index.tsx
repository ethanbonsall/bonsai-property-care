import Hero from "@/components/hero";
import NavBar from "@/components/nav_bar";
import Head from "next/head";
import BottomBar from "@/components/bottom_bar";
import About from "@/components/about_us";
import Services from "@/components/services";

const Portfolio = () => {
  return (
    <div className="bg-background flex flex-col items-center text-text font-roboto">
      <Head>
        <title>Bonsai Property Care</title>
        <meta
          name="description"
          content="Property care from landscaping to siding to power washing to driveway sealing"
        />
      </Head>
      <NavBar />
      <Hero />
      <About />
      <Services />
      <BottomBar />
    </div>
  );
};

export default Portfolio;
