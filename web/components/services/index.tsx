/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import driveway from "../../public/assets/driveway-sealing.jpg";
import landscape from "../../public/assets/landscape.jpg";
import pressure from "../../public/assets/power-washing.jpg";
import general from "../../public/assets/home-care.jpg";
import { useEffect, useState, useRef } from "react";

const Services = () => {
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
      { threshold: 0.2 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return (
    <div className="flex flex-col bg-secondary text-text min-h-screen lg:h-screen w-full translate-all ">
      <div
        className={`flex flex-col md:h-fit transition-all duration-700 mx-[5%] mt-[2%] ${
          isVisible ? "opacity-100 translate-y-0 " : "opacity-0 translate-y-4"
        }`}
        ref={ref}
      >
        <p className="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl font-medium text-primary-800">
          Our Services
        </p>
        <p className="text-2xl md:text-3xl xl:text-4xl 2xl:text-6xl font-semibold mt-[0.5%]">
          Cleanliness & Brilliance for Your Home
        </p>
        <p className="hidden md:block text-md md:text-lg xl:text-xl 2xl:text-2xl mt-[1%]">
          From expert pressure washing that restores brilliance to your home’s
          exterior, to premium driveway sealing that protects and enhances curb
          appeal, to lush landscaping designs that bring elegance to every
          corner of your property, and attentive general home care that ensures
          lasting beauty and comfort, we provide a full suite of services
          crafted to elevate your home into a space of lasting luxury and
          refinement.
        </p>
      </div>
      <div
        className={`grid grid-cols-1 grid-rows-4  mb-24 lg:mb-0 lg:grid-rows-2 lg:grid-cols-2 min-h-0 max-h-none max-w-full lg:h-2/3 mt-[4%] lg:mt-[2%] items-center mx-4 lg:mx-0 gap-y-24 md:gap-8 justify-items-center justify-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0 " : "opacity-0 translate-y-8"
        }`}
        ref={ref}
      >
        <Link
          href="/services/pressure-washing"
          className="h-full aspect-video transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.8)] "
        >
          <div className="flex flex-col md:flex-row justify-center w-full">
            <img
              src={pressure.src}
              alt="Pressure washing"
              className="w-full object-cover rounded-t-[35px] md:rounded-l-[35px] md:rounded-tr-none aspect-video"
            />
            <div className="flex items-center bg-accent text-background  md:px-[7%] rounded-b-[35px] md:rounded-r-[35px] md:rounded-bl-none ">
              <p className="bg-accent text-3xl rounded-b-[35px]">
                Power Washing
              </p>
            </div>
          </div>
        </Link>
        <Link
          href="/services/driveway-sealing"
          className="h-full aspect-video transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.8)]"
        >
          <div className="flex flex-col md:flex-row justify-center ">
            <img
              src={driveway.src}
              alt="Driveway sealing"
              className="w-full object-cover rounded-t-[35px] md:rounded-l-[35px] md:rounded-tr-none aspect-video"
            />
            <div className="flex items-center md:px-4 bg-accent text-background rounded-b-[35px] md:rounded-r-[35px] md:rounded-bl-none">
              <p className="bg-accent text-3xl rounded-b-[35px]">
                Driveway Sealing
              </p>
            </div>
          </div>
        </Link>
        <Link
          href="/services/landscaping"
          className="h-full aspect-video transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.8)]"
        >
          <div className="flex flex-col md:flex-row justify-center w-fit ">
            <img
              src={landscape.src}
              alt="Landscape"
              className="w-full object-cover rounded-t-[35px] md:rounded-l-[35px] md:rounded-tr-none aspect-video"
            />
            <div className="flex items-center md:px-4 bg-accent text-background  rounded-b-[35px] md:rounded-r-[35px] md:rounded-bl-none">
              <p className="bg-accent text-3xl  rounded-b-[35px]">
                Landscaping
              </p>
            </div>
          </div>
        </Link>
        <Link
          href="/services/general-home-care"
          className="h-full aspect-video transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.8)]"
        >
          <div className="flex flex-col md:flex-row justify-center  ">
            <img
              src={general.src}
              alt="Home Care"
              className="w-full object-cover rounded-t-[35px] md:rounded-l-[35px] md:rounded-tr-none aspect-video"
            />
            <div className="flex items-center bg-accent text-background md:px-[6%] rounded-b-[35px] md:rounded-r-[35px] md:rounded-bl-none">
              <p className="bg-accent  text-3xl  rounded-b-[35px]">Home Care</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Services;
