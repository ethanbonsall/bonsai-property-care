import BottomBar from "@/components/bottom_bar";
import NavBar from "@/components/nav_bar_home";
import Head from "next/head";
import { CheckCircle } from "lucide-react";

const About = () => {
  return (
    <div className="bg-gradient-to-bl from-accent to-primary flex flex-col text-background font-roboto min-h-screen">
      <Head>
        <title>About Us | Bonsai Property Care</title>
      </Head>

      <NavBar />

      <main className="flex flex-col items-center flex-grow px-8 py-16 lg:px-16">
        {/* Hero Section */}
        <div className="max-w-5xl mb-16">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-[80px] font-bold mb-6">
            About Bonsai Property Care
          </h1>
          <p className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl mb-6 leading-relaxed">
            At <span className="font-semibold">Bonsai Property Care</span>, we
            help homeowners protect and enhance their property with
            professional, reliable services. From landscaping and lawn care to
            power washing, driveway sealing, and siding installation, we bring
            out the best in every home.
          </p>
          <p className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl mb-6 leading-relaxed">
            Our team brings years of experience and a passion for craftsmanship
            to every project. We pride ourselves on attention to detail,
            reliable service, and treating your property as if it were our own.
            Whether you’re looking for a quick refresh or a complete exterior
            makeover, we have the expertise to make it happen.
          </p>

          <p className="text-lg lg:text-xl xl:text-2xl 2xl:text-3xl leading-relaxed">
            <span className="font-semibold">Customer satisfaction</span> is at
            the heart of everything we do. We’re honored to be trusted with your
            home and look forward to helping you create a property you’re proud
            of.
          </p>
        </div>

        {/* Our Services Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mb-20 w-full">
          {[
            {
              title: "Landscaping",
              desc: "Beautiful, well-kept lawns and gardens.",
            },
            {
              title: "Power Washing",
              desc: "Restore shine to your siding, decks, and patios.",
            },
            {
              title: "Driveway Sealing",
              desc: "Protect your driveway and boost curb appeal.",
            },
            {
              title: "Siding Installation",
              desc: "Durable and stylish solutions for your home.",
            },
            {
              title: "Lawn Care",
              desc: "Weekly, monthly, or seasonal maintenance plans.",
            },
            {
              title: "Custom Projects",
              desc: "Tailored property solutions to meet your needs.",
            },
          ].map((service, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg text-center hover:scale-105 transition-transform"
            >
              <h2 className="text-2xl font-semibold mb-3">{service.title}</h2>
              <p className="text-base lg:text-lg">{service.desc}</p>
            </div>
          ))}
        </section>

        {/* Why Choose Us Section */}
        <section className="max-w-5xl text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {[
              "Years of experience in property care and maintenance.",
              "Trusted by local homeowners for reliability and quality.",
              "Attention to detail with every project we take on.",
              "Customer-first approach — your satisfaction is our priority.",
            ].map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle className="text-green-400 w-6 h-6 flex-shrink-0" />
                <p className="text-lg lg:text-xl leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <BottomBar />
    </div>
  );
};

export default About;
