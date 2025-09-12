import NavBar from "@/components/nav_bar";
import Head from "next/head";

const About = () => {
  return (
    <div className="bg-background flex flex-col items-center text-text font-roboto">
      <Head>
        <title>About</title>
      </Head>
      <NavBar />
    </div>
  );
};

export default About;
