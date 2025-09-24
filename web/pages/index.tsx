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
      <div className="mb-2"></div>
      <About />

      <div className="mb-2"></div>
      <Services />

      <div className="mb-2"></div>
      <Method />

      <div className="mb-2"></div>
      <Testimonial />

      <div className="mb-2"></div>
      <Quote />

      <div className="mb-2"></div>
      <Contact />

      <div className="mb-2"></div>
      <BottomBar />
    </div>
  );
};

export default Portfolio;
