/* eslint-disable @next/next/no-img-element */
import { ChevronRight } from "lucide-react";
import Caleb from "@/public/assets/stock-about.jpg";
import Work from "@/public/assets/stock-work.jpg";
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

const HomeCare = () => {
  const { ref, isVisible } = useInView<HTMLDivElement>({
    threshold: 0.4,
  });

  return (
    <div
      className="flex flex-col lg:flex-row bg-gradient-to-b md:bg-gradient-to-r from-accent to-background justify-evenly lg:justify-between text-text min-h-screen w-full"
      ref={ref}
    >
      <div className="flex flex-row items-center justify-center w-full lg:w-2/5 py-[4%] gap-x-4 2xl:gap-x-16">
        <img
          src={Caleb.src}
          alt="Home improvement project"
          className={`object-cover w-1/3 lg:w-5/12 rounded-l-[50px] 2xl:rounded-[20px] shadow-2xl transition-all duration-700 ease-out aspect-[9/16] ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          } `}
        />
        <img
          src={Work.src}
          alt="Special home project"
          className={`object-cover w-1/3 lg:w-5/12 rounded-r-[50px] 2xl:rounded-[20px] shadow-2xl transition-all duration-700 ease-out aspect-[9/16] lg:mt-6 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          } `}
        />
      </div>

      <div className="flex flex-col justify-center mx-[2%] mt-[4%] lg:mt-0 2xl:gap-y-8">
        <p
          className={`font-bold text-6xl xl:text-[80px] 2xl:text-[150px] transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          } `}
        >
          Home Care & Special Projects
        </p>
        <p
          className={`text-xl xl:text-2xl 2xl:text-4xl my-4 max-w-2xl 2xl:max-w-4xl transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          } `}
        >
          Bonsai Property Care provides comprehensive home care and special
          projects services designed to improve, maintain, and enhance your
          property. From landscaping and power washing to driveway sealing,
          siding, and custom projects, our team delivers high-quality solutions
          tailored to your needs.
        </p>
        <div
          className={`text-xl xl:text-2xl 2xl:text-5xl mx-4 font-medium transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          } `}
        >
          <li>Comprehensive Services</li>
          <li>Custom Projects</li>
          <li>Reliable & Professional</li>
          <li>Exceptional Results</li>
        </div>
        <button
          className={`flex flex-row self-end bg-secondary-800 rounded-[12px] text-text-50 mt-8 2xl:mt-24 px-6 py-3 text-xl xl:text-2xl 2xl:text-5xl font-semibold w-fit hover:bg-secondary-700 mb-8 lg:mb-0 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          } `}
          onClick={() => (window.location.href = "/contact")}
        >
          Get A Quote <ChevronRight className="h-8 xl:h-9 2xl:h-14 w-auto" />
        </button>
      </div>
    </div>
  );
};
export default HomeCare;
