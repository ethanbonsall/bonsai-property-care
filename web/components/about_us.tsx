/* eslint-disable @next/next/no-img-element */
import { ChevronRight } from "lucide-react";
import Caleb from "../public/assets/stock-about.jpg";
import Work from "../public/assets/stock-work.jpg";

const About = () => {
  return (
    <div className="flex flex-row bg-background text-background min-h-screen w-full">
      <div className="flex flex-col md:flex-row bg-primary w-full md:m-8 2xl:m-16 md:rounded-[24px] min-h-screen md:h-screen">
        <div className="flex flex-row items-center justify-center md:justify-normal mt-8 mb-8 md:mb-0 md:mt-0 md:ml-8 gap-x-4 2xl:gap-x-16 ">
          <img
            src={Caleb.src}
            alt="Caleb"
            className="object-cover h-full w-1/3 md:h-2/3 md:w-2/5 rounded-[10px] 2xl:rounded-[20px] shadow-2xl mb-0 md:mb-[12%] "
          />
          <img
            src={Work.src}
            alt="Work"
            className="object-cover h-full w-1/3 md:h-2/3 md:w-2/5 rounded-[10px] 2xl:rounded-[20px] shadow-2xl mb-0 md:mb-[12%]"
          />
        </div>
        <div className="flex flex-col justify-center mx-4 md:ml-0 md:mr-8 xl:mr-16 2xl:mr-32 2xl:gap-y-8">
          <p className="text-bold text-6xl xl:text-[80px] 2xl:text-[150px]">
            About Us
          </p>
          <p className="text-xl xl:text-2xl 2xl:text-5xl my-4 max-w-2xl 2xl:max-w-4xl">
            At Bonsai Property Care, we are dedicated to enhancing the beauty
            and value of your property through our comprehensive range of
            services. From landscaping and siding to power washing and driveway
            sealing, we provide top-notch care tailored to your needs.
          </p>
          <div className="text-xl xl:text-2xl 2xl:text-5xl font-medium">
            <li>Experience</li>
            <li>Dedication</li>
            <li>Customer Satisfaction</li>
            <li>Quality Workmanship</li>
          </div>
          <button
            className="flex flex-row self-end bg-secondary-800 rounded-[12px] text-text-50 mt-8 2xl:mt-24 px-6 py-3 text-xl xl:text-2xl 2xl:text-5xl font-semibold w-fit hover:bg-secondary-700 transition mb-8 md:mb-0"
            onClick={() => (window.location.href = "/about")}
          >
            Learn More <ChevronRight className="h-8 xl:h-9 2xl:h-14 w-auto" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default About;
