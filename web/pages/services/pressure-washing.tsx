import NavBar from "@/components/nav_bar";
import Head from "next/head";

const Washing = () => {
  return (
    <div className="bg-background flex flex-col items-center text-text font-roboto">
      <Head>
        <title>Pressure Washing</title>
      </Head>
      <NavBar />
    </div>
  );
};

export default Washing;
