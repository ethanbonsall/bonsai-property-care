import BottomBar from "@/components/bottom_bar";
import NavBar from "@/components/nav_bar";
import Head from "next/head";

const Contact = () => {
  return (
    <div className="bg-background flex flex-col items-center text-text font-roboto">
      <Head>
        <title>Contact</title>
      </Head>
      <NavBar />
      <Contact />
      <BottomBar />
    </div>
  );
};

export default Contact;
