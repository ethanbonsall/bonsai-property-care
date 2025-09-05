/* eslint-disable @next/next/no-img-element */
"use client";
import Logo from "@/public/favicon.ico";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const services = ["Pressure Washing", "Driveway Sealing", "Landscaping"];

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 right-0 w-full text-text-700 z-40 shadow flex p-2 items-center justify-end">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center gap-2 text-text"
        >
          <span className="text-base font-semibold">Menu</span>
          <Menu className="w-6 h-6" />
        </button>
      </div>
      <div
        className={`fixed top-0 right-0 h-full w-full justify-center bg-secondary text-text transform overflow-hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out z-50 p-8 flex flex-col gap-8`}
      >
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="absolute top-6 right-6 z-50"
        >
          <X className="w-8 h-8 2xl:w-10 2xl:h-10" />
        </button>
        <div className="self-center justify-center">
          <nav className="flex flex-col gap-6 text-5xl md:text-4xl 2xl:text-6xl font-bold">
            <hr className="border-secondary border-t-2" />
            <Link href="/" onClick={() => setMenuOpen(!menuOpen)}>
              Home
            </Link>
            <Link href="/about" onClick={() => setMenuOpen(!menuOpen)}>
              About
            </Link>
            <Link href="/experience" onClick={() => setMenuOpen(!menuOpen)}>
              Experience
            </Link>
            <Link href="/portfolio" onClick={() => setMenuOpen(!menuOpen)}>
              Portfolio
            </Link>
            <Link href="/blog" onClick={() => setMenuOpen(!menuOpen)}>
              Blog
            </Link>
            <Link href="/contact" onClick={() => setMenuOpen(!menuOpen)}>
              Contact
            </Link>
            <hr className="border-secondary border-t-2" />
          </nav>
        </div>
      </div>
      <nav className="hidden md:flex flex-row sticky top-0 z-50 shadow w-full bg-primary text-text-50 px-6 py-4 justify-between items-center">
        <img
          src={Logo.src}
          alt="Logo"
          className=" w-14 md:w-24 h-auto rounded-full"
        />
        <div className="flex gap-12 text-2xl font-semibold">
          <Link
            className="group text-text-50 transition duration-300"
            href={"/"}
          >
            Home
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-accent"></span>
          </Link>
          <Link
            className="group text-text-50 transition duration-300"
            href={"/about"}
          >
            About
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-accent"></span>
          </Link>
          <div className="group relative inline-block ">
            <div className="group text-text-50 transition duration-300">
              <p className="cursor-pointer rounded">Services</p>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-accent"></span>
            </div>
            <div
              className="absolute top-full left-1/2 transform -translate-x-1/2 w-max
               bg-primary rounded text-text-50 
               transition-all duration-500 ease-in-out
               overflow-hidden max-h-0 py-2
               group-hover:max-h-[500px]"
            >
              <div className="flex flex-col">
                {services.map((service, i) => (
                  <Link
                    key={service}
                    className={` 
            p-2  transition-all duration-500
            ease-[cubic-bezier(.73,.32,.34,1.5)]
            group-hover:opacity-100 group-hover:py-2
            opacity-0 
            delay-[${i * 100}ms]
             relative after:bg-accent after:absolute after:h-[2px] after:w-0 after:bottom-1 after:left-0 hover:after:w-full mx-4 after:transition-all after:duration-300 cursor-pointer
          `}
                    href={`/services/${service
                      .toLowerCase()
                      .replace(/ /g, "-")}`}
                  >
                    {service}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            className="group text-text-50 transition duration-300"
            href={"/contact"}
          >
            Contact
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-accent"></span>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
