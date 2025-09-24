import BottomBar from "@/components/bottom_bar";
import NavBar from "@/components/nav_bar_home";
import Contact_Section from "@/components/contact";
import Head from "next/head";
import Quote from "@/components/quote";

const Contact = () => {
  return (
    <div className="bg-accent-400 flex flex-col items-center text-text font-roboto">
      <Head>
        <title>Contact</title>
      </Head>
      <NavBar />
      <Quote />
      <div className="py-2 px-[50dvw] bg-background" />
      <Contact_Section />
      <BottomBar />
    </div>
  );
};

export default Contact;
