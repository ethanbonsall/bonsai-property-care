/* eslint-disable @next/next/no-img-element */
import { ChevronRight } from "lucide-react";
import Caleb from "../public/assets/stock-about.jpg";
import Work from "../public/assets/stock-work.jpg";
import { useEffect, useState, useRef } from "react";

function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [options]);

  return { ref, isVisible };
}

const About = () => {
  const { ref, isVisible } = useInView<HTMLDivElement>({
    threshold: 0.4,
  });

  return (
    <div
      className="flex flex-col md:flex-row bg-background justify-between text-text h-fit w-full"
      ref={ref}
    >
      <div className="flex flex-row items-center justify-center md:justify-normal mt-8 mb-8 md:mb-0 md:mt-0 md:ml-8 gap-x-4 2xl:gap-x-16 ">
        <img
          src={Caleb.src}
          alt="Caleb"
          className={`object-cover h-full w-1/3 md:h-2/3 md:w-2/5 rounded-[10px] 2xl:rounded-[20px] shadow-2xl mb-0 md:mb-[12%] transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          } `}
        />
        <img
          src={Work.src}
          alt="Work"
          className={`object-cover h-full w-1/3 md:h-2/3 md:w-2/5 rounded-[10px] 2xl:rounded-[20px] shadow-2xl mb-0 md:mb-[12%] transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          } `}
        />
      </div>
      <div className="flex flex-col justify-center mx-4 md:ml-0 md:mr-8 xl:mr-16 2xl:mr-32 2xl:gap-y-8">
        <p
          className={`text-bold text-6xl xl:text-[80px] 2xl:text-[150px] transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          } `}
        >
          About Us
        </p>
        <p
          className={`text-xl xl:text-2xl 2xl:text-5xl my-4 max-w-2xl 2xl:max-w-4xl transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          } `}
        >
          At Bonsai Property Care, we are dedicated to enhancing the beauty and
          value of your property through our comprehensive range of services.
          From landscaping and siding to power washing and driveway sealing, we
          provide top-notch care tailored to your needs.
        </p>
        <div
          className={`text-xl xl:text-2xl 2xl:text-5xl mx-4 font-medium transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          } `}
        >
          <li>Experience</li>
          <li>Dedication</li>
          <li>Customer Satisfaction</li>
          <li>Quality Workmanship</li>
        </div>
        <button
          className={`flex flex-row self-end bg-secondary-800 rounded-[12px] text-text-50 mt-8 2xl:mt-24 px-6 py-3 text-xl xl:text-2xl 2xl:text-5xl font-semibold w-fit hover:bg-secondary-700 mb-8 md:mb-0 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          } `}
          onClick={() => (window.location.href = "/about")}
        >
          Learn More <ChevronRight className="h-8 xl:h-9 2xl:h-14 w-auto" />
        </button>
      </div>
    </div>
  );
};
export default About;
