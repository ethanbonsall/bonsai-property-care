import BottomBar from "@/components/bottom_bar";
import NavBar from "@/components/nav_bar";
import Head from "next/head";

const About = () => {
  return (
    <div className="bg-background flex flex-col items-center text-text font-roboto">
      <Head>
        <title>About</title>
      </Head>
      <NavBar />
      <div className="max-w-4xl p-8">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-6">
          Welcome to Bonsai Property Care! We are dedicated to providing
          top-notch property care services, from landscaping and power washing
          to driveway sealing and siding installation. Our team is committed to
          excellence and customer satisfaction.
        </p>
        <p className="text-lg mb-6">
          With years of experience in the industry, we pride ourselves on our
          attention to detail and quality workmanship. Whether you need a simple
          lawn care service or a complete home exterior makeover, we have the
          expertise to get the job done right.
        </p>
        <p className="text-lg">
          Thank you for considering Bonsai Property Care for your property
          maintenance needs. We look forward to serving you!
        </p>
      </div>
      <BottomBar />
    </div>
  );
};

export default About;
