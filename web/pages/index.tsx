import Hero from "@/components/hero";
import NavBar from "@/components/nav_bar";
import Head from "next/head";
import BottomBar from "@/components/bottom_bar";
import About from "@/components/about_us";
import Services from "@/components/services";
import Method from "@/components/method";
import Testimonial from "@/components/testimonials";
import Quote from "@/components/quote";
import Contact from "@/components/contact";

const Portfolio = () => {
  return (
    <div className="bg-background flex flex-col items-center text-text font-roboto gap-y-2">
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
      <Method />
      <Testimonial />
      <Quote />
      <Contact />
      <BottomBar />
    </div>
  );
};

export default Portfolio;
