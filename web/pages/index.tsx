import Hero from "@/components/hero";
import NavBar from "@/components/nav_bar";
import Head from "next/head";

const Portfolio = () => {
  return (
    <div className="bg-background flex flex-col items-center text-text font-roboto">
      <Head>
        <title>Bonsai property Care</title>
        <meta
          name="description"
          content="Property care from landscaping to siding to power washing to driveway sealing"
        />
      </Head>
      <NavBar />
      <Hero />
    </div>
  );
};

export default Portfolio;
