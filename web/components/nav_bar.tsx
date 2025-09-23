/* eslint-disable @next/next/no-img-element */
"use client";
import Logo from "@/public/favicon.ico";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "@/context/themecontext";

const services = ["Pressure Washing", "Driveway Sealing", "Landscaping"];

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [radius, setRadius] = useState(0);
  const [padding, setPadding] = useState(0);
  const toggleTheme = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = 100;
      const scrollY = window.scrollY;
      const newRadius = Math.min((scrollY / maxScroll) * 36, 36);
      const newPadding = Math.min((scrollY / maxScroll) * 16, 16);
      setPadding(newPadding);
      setRadius(newRadius);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="fixed w-full h-fit text-text-700 z-40 flex bg-background md:hidden p-2 items-center justify-between ">
        <img
          src={Logo.src}
          alt="Logo"
          className=" w-12 h-12 rounded-full"
          onClick={() => toggleTheme.toggleTheme()}
        />
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center gap-2 text-text"
        >
          <Menu className="w-12 h-12" />
        </button>
      </div>
      <div
        className={`fixed top-0 right-0 h-full w-full justify-center bg-secondary text-text transform overflow-hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out z-50 p-8 flex flex-col gap-8`}
      >
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="absolute top-6 right-8 z-50 "
        >
          <X className="w-8 h-8 2xl:w-10 2xl:h-10" />
        </button>
        <div className="self-center justify-center">
          <nav className="flex flex-col gap-6 justify-center text-5xl md:text-4xl 2xl:text-6xl font-bold min-h-screen">
            <hr className="border-primary border-t-2" />
            <Link href="/" onClick={() => setMenuOpen(!menuOpen)}>
              Home
            </Link>
            <Link href="/about" onClick={() => setMenuOpen(!menuOpen)}>
              About
            </Link>
            <Link href="/contact" onClick={() => setMenuOpen(!menuOpen)}>
              Contact
            </Link>
            <a
              className="flex flex-row items-center cursor-pointer"
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services
              <ChevronDown
                className={`w-6 h-6 ml-2 transition-transform duration-300 ${
                  servicesOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </a>

            <div
              className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out ${
                servicesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              {services.map((service) => (
                <Link
                  key={service}
                  className="block text-xl p-1"
                  href={`/services/${service.toLowerCase().replace(/ /g, "-")}`}
                >
                  {service}
                </Link>
              ))}
            </div>

            <hr className="border-primary border-t-2" />
          </nav>
        </div>
      </div>
      <nav
        style={{
          borderRadius: `${radius}px`,
          marginTop: `${padding}px`,
          marginLeft: `${padding}px`,
          marginRight: `${padding}px`,
          width: `calc(100% - ${padding * 2}px)`,
        }}
        className={`hidden md:flex flex-row fixed top-0 z-50 shadow 
        bg-primary text-text-50 px-6 py-2 justify-between items-center
        transition-[max-height,padding,transform]`}
      >
        <img
          src={Logo.src}
          alt="Logo"
          className=" w-14 md:w-20 xl:w-24 2xl:w-30 h-auto rounded-full"
          onClick={() => toggleTheme.toggleTheme()}
        />
        <div className="flex gap-12 text-3xl 2xl:text-6xl font-semibold">
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
              <Link className="cursor-pointer rounded" href="/services">
                Services
              </Link>
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-accent"></span>
            </div>
            <div
              className="absolute top-full left-1/2 transform -translate-x-1/2 w-max
               bg-primary rounded text-text-50 
               transition-[max-height,padding,transform] duration-1000 ease-in-out
               overflow-hidden max-h-0 py-2
               group-hover:max-h-[500px] text-2xl"
            >
              <div className="flex flex-col">
                {services.map((service, i) => (
                  <Link
                    key={service}
                    className={` 
            p-2 transition-[max-height,padding,transform] duration-1000
            ease-[cubic-bezier(.73,.32,.34,1.5)]
            group-hover:opacity-100 group-hover:py-2
            delay-[${i * 100}ms]
             relative after:bg-accent after:absolute after:h-[2px] after:w-0 after:bottom-1 after:left-0 
             hover:after:w-full mx-4 after:transition-all after:duration-300 cursor-pointer
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
