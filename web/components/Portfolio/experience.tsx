import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Code, MonitorSmartphone } from "lucide-react";

const Experience = () => {
  const [durations, setDurations] = useState({
    sheetz: "",
    cs: "",
    mhp: "",
  });

  const getDuration = (startDate: Date, endDate: Date = new Date()) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();

    if (months < 0) {
      years--;
      months += 12;
    }

    const yearStr = years > 0 ? `${years} yr${years > 1 ? "s" : ""}` : "";
    const monthStr = months > 0 ? `${months} mo${months > 1 ? "s" : ""}` : "";

    return [yearStr, monthStr].filter(Boolean).join(" ");
  };

  useEffect(() => {
    setDurations({
      sheetz: getDuration(new Date("2025-04-01")),
      cs: getDuration(new Date("2024-09-01")),
      mhp: getDuration(new Date("2023-07-01")),
    });
  }, []);

  return (
    <section
      className="bg-gradient-to-b from-secondary via-secondary/90 to-background text-text p-5 mt-6 w-full mb-2 scroll-mt-24"
      id="experience"
    >
      <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold mb-4">Experience</h1>
      <hr className="border-accent mb-6" />

      <div className="relative border-l-4 border-accent pl-6 ml-2 space-y-10">
        {/* Sheetz */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative bg-white/5 backdrop-blur-lg rounded-xl p-4 md:p-5 lg:p-6 border border-black"
        >
          <div className="absolute w-4 h-4 bg-accent rounded-full -left-[1.4rem] top-4" />
          <div className="flex items-center gap-2 mb-2">
            <Briefcase className="text-accent w-5 h-5 md:w-6 md:h-6" />
            <h2 className="text-2xl md:text-3xl lg:text-3xl font-semibold">Sheetz</h2>
          </div>
          <p className="text-lg md:text-xl italic font-medium">Associate Programmer Intern</p>
          <div className="flex items-center gap-2 text-sm md:text-base mt-2">
            <span>Apr 2025 – Present</span>
            <span className="bg-accent text-background px-2 py-0.5 rounded-full text-xs md:text-sm font-bold">
              {durations.sheetz}
            </span>
          </div>
          <p className="text-sm md:text-base text-muted mt-2">Internship</p>
        </motion.div>

        {/* UNC CS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="relative bg-white/5 backdrop-blur-lg rounded-xl p-4 md:p-5 lg:p-6 border border-black"
        >
          <div className="absolute w-4 h-4 bg-accent rounded-full -left-[1.4rem] top-4" />
          <div className="flex items-center gap-2 mb-2">
            <MonitorSmartphone className="text-accent w-5 h-5 md:w-6 md:h-6" />
            <h2 className="text-2xl md:text-3xl lg:text-3xl font-semibold">UNC CS + Social Good</h2>
          </div>
          <p className="text-lg md:text-xl italic font-medium">Frontend Developer</p>
          <div className="flex items-center gap-2 text-sm md:text-base mt-2">
            <span>Sep 2024 – Present</span>
            <span className="bg-accent text-background px-2 py-0.5 rounded-full text-xs md:text-sm font-bold">
              {durations.cs}
            </span>
          </div>
          <p className="text-sm md:text-base text-muted mt-2">Internship</p>
          <ul className="list-disc pl-5 mt-3 text-md md:text-lg">
            <li>Developed websites using Supabase, NW.js, and React</li>
            <li>
              Built Tinder-like platform to help an animal sanctuary find homes
              for animals
            </li>
          </ul>
        </motion.div>

        {/* Magic Hour Portraits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative bg-white/5 backdrop-blur-lg rounded-xl p-4 md:p-5 lg:p-6 border border-black"
        >
          <div className="absolute w-4 h-4 bg-accent rounded-full -left-[1.4rem] top-4" />
          <div className="flex items-center gap-2 mb-2">
            <Code className="text-accent w-5 h-5 md:w-6 md:h-6" />
            <h2 className="text-2xl md:text-3xl lg:text-3xl font-semibold">Magic Hour Portraits</h2>
          </div>
          <p className="text-lg md:text-xl italic font-medium">Web Developer</p>
          <div className="flex items-center gap-2 text-sm md:text-base mt-2">
            <span>Jul 2023 – Present</span>
            <span className="bg-accent text-background px-2 py-0.5 rounded-full text-xs md:text-sm font-bold">
              {durations.mhp}
            </span>
          </div>
          <p className="text-sm md:text-base text-muted mt-2">
            Contract · Remote · Camp Hill, Pennsylvania
          </p>
          <ul className="list-disc pl-5 mt-3 text-md md:text-lg">
            <li>
              Built and maintained website using React, Tailwind CSS, and NextJS
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};


export default Experience;
