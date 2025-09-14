/* eslint-disable @next/next/no-img-element */
import Logo from "@/public/favicon.ico";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const BottomBar = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row bg-background text-text w-full px-4  lg:px-16 py-8 md:gap-0 gap-y-6 justify-between">
      <div className="flex flex-col md:justify-between">
        <div className="flex flex-row-reverse md:flex-col justify-around md:justify-between items-center md:items-start">
          <img
            src={Logo.src}
            alt="Logo"
            className="h-16 md:h-28 2xl:h-40 w-auto 2xl:w-40 md:w-28 ml-4 md:mx-0 my-4"
          />
          <div>
            <p className="text-2xl 2xl:text-4xl font-bold ">
              Bonsai Property Care
            </p>
            <p className="text-lg 2xl:text-2xl my-2">
              © 2025 Bonsai Property Care
            </p>
          </div>
        </div>
        <div className="text-lg 2xl:text-2xl my-2 block md:hidden">
          Made by ethan @&nbsp;
          <Link className="text-blue-700" href="https://www.ethanbonsall.com">
            ethanbonsall.com :&#41;
          </Link>
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-5xl 2xl:text-[80px] font-bold">Menu</p>

        <Link
          className="text-2xl 2xl:text-5xl my-2 w-fit relative after:bg-accent after:absolute after:h-[2px] after:w-0 after:bottom-1 after:left-0 
             hover:after:w-full after:transition-all after:duration-300"
          href="/"
        >
          Home
        </Link>
        <Link
          className="text-2xl 2xl:text-5xl my-2 w-fit relative after:bg-accent after:absolute after:h-[2px] after:w-0 after:bottom-1 after:left-0 
             hover:after:w-full after:transition-all after:duration-300"
          href="/about"
        >
          About
        </Link>
        <Link
          className="text-2xl 2xl:text-5xl my-2 w-fit relative after:bg-accent after:absolute after:h-[2px] after:w-0 after:bottom-1 after:left-0 
             hover:after:w-full after:transition-all after:duration-300"
          href="/contact"
        >
          Contact
        </Link>
        <Link
          className="text-2xl 2xl:text-5xl my-2 w-fit relative after:bg-accent after:absolute after:h-[2px] after:w-0 after:bottom-1 after:left-0 
             hover:after:w-full after:transition-all after:duration-300"
          href="/services"
        >
          Services
        </Link>
        <Link
          className="text-lg 2xl:text-3xl mx-2 my-1 w-fit relative after:bg-accent after:absolute after:h-[2px] after:w-0 after:bottom-1 after:left-0 
             hover:after:w-full after:transition-all after:duration-300"
          href="/services/pressure-washing"
        >
          Pressure Washing
        </Link>
        <Link
          className="text-lg 2xl:text-3xl mx-2 my-1 w-fit relative after:bg-accent after:absolute after:h-[2px] after:w-0 after:bottom-1 after:left-0 
             hover:after:w-full after:transition-all after:duration-300"
          href="/services/driveway-sealing"
        >
          Driveway Sealing
        </Link>
        <Link
          className="text-lg 2xl:text-3xl mx-2 my-1 w-fit relative after:bg-accent after:absolute after:h-[2px] after:w-0 after:bottom-1 after:left-0 
             hover:after:w-full after:transition-all after:duration-300"
          href="/services/landscaping"
        >
          Landscaping
        </Link>
      </div>
      <div className="flex flex-col text-xl 2xl:text-4xl justify-between">
        <div>
          <p className="text-5xl font-bold">Contact</p>
          <div className="flex flex-row my-3">
            <Phone className="h-8 w-auto" />
            <Link
              className="mx-1 w-fit relative after:bg-accent after:absolute after:h-[2px] after:w-0 after:bottom-1 after:left-0 
             hover:after:w-full after:transition-all after:duration-300"
              href="tel:+17175659426"
            >
              &#40;+1&#41; 717-565-9425
            </Link>
          </div>
          <div className="flex flex-row my-2">
            <Mail className="h-8 w-auto" />
            <Link
              className="ml-2 w-fit relative after:bg-accent after:absolute after:h-[2px] after:w-0 after:bottom-1 after:left-0 
             hover:after:w-full after:transition-all after:duration-300"
              href="mailto:bonsallc7.caleb@gmail.com"
            >
              bonsallc7.caleb@gmail.com
            </Link>
          </div>
          <div className="flex flex-row my-2">
            <MapPin className="h-8 w-auto" />
            <p className="ml-2">Harrisburg, PA and surrounding areas</p>
          </div>
        </div>
        <div className="text-lg 2xl:text-4xl my-2 hidden md:block">
          Made by ethan @&nbsp;
          <Link className="text-blue-700" href="https://www.ethanbonsall.com">
            ethanbonsall.com :&#41;
          </Link>
        </div>
      </div>
    </div>
  );
};
export default BottomBar;
