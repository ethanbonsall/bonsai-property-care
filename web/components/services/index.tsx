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
      { threshold: 0.1 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return (
    <div className="flex flex-col bg-secondary text-text h-fit w-full translate-all py-[1%]">
      <div
        className={`flex flex-col h-fit transition-all duration-700 mx-[5%] mt-[2%] mb-[1%] ${
          isVisible ? "opacity-100 translate-y-0 " : "opacity-0 translate-y-4"
        }`}
        ref={ref}
      >
        <p className="text-xl md:text-2xl xl:text-3xl 2xl:text-5xl font-medium text-primary-800">
          Our Services
        </p>
        <p className="text-2xl md:text-3xl xl:text-4xl 2xl:text-[80px] font-semibold mt-[0.5%] 2xl:mt-[1%]">
          Cleanliness & Brilliance for Your Home
        </p>
        <p className="hidden md:block text-md md:text-lg xl:text-xl 2xl:text-4xl mt-[1%] 2xl:mt-[2%]">
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
        className={`flex flex-col h-fit items-center mx-8 lg:mx-0 mb-[1%] justify-items-center lg:justify-around transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0 " : "opacity-0 translate-y-8"
        }`}
        ref={ref}
      >
        <div className="flex flex-col justify-normal xl:justify-evenly gap-y-[1%] lg:gap-y-0 lg:flex-row ">
          {[
            {
              href: "/services/pressure-washing",
              label: "Power Washing",
              img: pressure.src,
            },
            {
              href: "/services/driveway-sealing",
              label: "Driveway Sealing",
              img: driveway.src,
            },
          ].map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="transition-all duration-300 hover:scale-105 max-w-full lg:max-w-[1/2] xl:w-2/5 2xl:w-1/3 mx-2 lg:mx-[5%] my-[2%] xl:my-[1%] hover:shadow-[0_0_30px_rgba(255,255,255,0.8)] rounded-[35px] bg-accent"
            >
              <div className="flex flex-col w-full rounded-[35px]">
                <img
                  src={service.img}
                  alt={service.label}
                  className="object-cover rounded-t-[35px] aspect-video"
                />
                <div className="flex items-center justify-center text-background bg-accent py-[2%] rounded-b-[35px]">
                  <p className="text-2xl md:text-3xl xl:text-4xl font-semibold text-center">
                    {service.label}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="flex flex-col justify-normal xl:justify-evenly gap-y-[1%] lg:gap-y-0 lg:flex-row">
          {[
            {
              href: "/services/landscaping",
              label: "Landscaping",
              img: landscape.src,
            },
            {
              href: "/services/general-home-care",
              label: "Home Care",
              img: general.src,
            },
          ].map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="transition-all duration-300 hover:scale-105 max-w-full lg:max-w-[1/2] xl:w-2/5 2xl:w-1/3 mx-2 lg:mx-[5%] my-[2%] xl:my-[1%] hover:shadow-[0_0_30px_rgba(255,255,255,0.8)] rounded-[35px] bg-accent"
            >
              <div className="flex flex-col w-full rounded-[35px]">
                <img
                  src={service.img}
                  alt={service.label}
                  className="object-cover rounded-t-[35px] aspect-video"
                />
                <div className="flex items-center justify-center text-background bg-accent py-[2%] rounded-b-[35px]">
                  <p className="text-2xl md:text-3xl xl:text-4xl font-semibold text-center">
                    {service.label}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Services;
