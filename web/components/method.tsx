import {
  Armchair,
  CalendarDays,
  ChevronRight,
  MessagesSquare,
} from "lucide-react";
import { useRef, useState, useEffect } from "react";

const Method = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);

  return (
    <div className="flex flex-col bg-background justify-evenly text-text h-fit w-full">
      <div className="flex flex-col items-center gap-y-2 my-[4%]">
        <p className="text-2xl md:text-3xl xl:text-4xl font-medium">
          How it works
        </p>
        <p className="font-semibold text-center text-3xl md:text-4xl xl:text-5xl px-4">
          Engaging Our Services Is Quick & Simple
        </p>
        <p className="font-medium text-lg md:text-2xl xl:text-2xl text-center w-full px-4 md:px-0 md:w-4/5 mb-4">
          From spotless windows and clean gutters to energy-efficient solar
          panels and stunning lighting solutions, we deliver exceptional
          services that make your home shine, inside and out.
        </p>
      </div>
      <div
        className={`w-full justify-items-center justify-center font-semibold transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0 " : "opacity-0 translate-y-8"
        }`}
        ref={ref}
      >
        <div className="flex flex-col md:flex-row w-4/5 md:w-full lg:w-2/3 text-3xl md:text-2xl lg:text-3xl gap-y-8 md:gap-y-0 gap-x-[2%] lg:gap-x-[8%] px-8 md:px-4 lg:px-0 justify-center items-center">
          <div className="flex flex-col w-[99%] lg:w-1/3 aspect-square bg-primary text-center text-background justify-center rounded-[24px] px-1 lg:px-2 mx-auto self-center">
            <MessagesSquare className="h-36 w-auto" />
            <div>
              <p>Request A Free Quote</p>
              <p className="text-xl md:text-lg lg:text-xl font-medium">
                Get a free, no-obligation quote tailored to your needs.
              </p>
            </div>
          </div>
          <div className="flex flex-col  w-[99%] lg:w-1/3 aspect-square bg-primary text-center text-background justify-center rounded-[24px] px-1 lg:px-2 self-center">
            <CalendarDays className="h-36 w-auto" />
            <div>
              <p>Set A Schedule</p>
              <p className="text-xl md:text-lg lg:text-xl font-medium">
                Choose a time that works best for you &#8212; we&apos;ll handle
                the rest.
              </p>
            </div>
          </div>
          <div className="flex flex-col w-[99%] lg:w-1/3 aspect-square bg-primary text-center text-background justify-center rounded-[24px] px-1 lg:px-2 self-center">
            <Armchair className="h-36 w-auto" />
            <div>
              <p>Sit Back And Relax</p>
              <p className="text-xl md:text-lg lg:text-xl font-medium">
                Enjoy a spotless, brighter home with zero hassle.
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <button className=" flex flex-row items-center bg-primary text-background text-2xl font-semibold rounded-[16px] px-8 py-4 mb-[5%] mt-[5%] hover:bg-secondary hover:text-background transition duration-300">
            Get A Quote <ChevronRight className="w-7 h-auto" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Method;
