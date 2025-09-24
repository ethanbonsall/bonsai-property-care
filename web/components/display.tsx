/* eslint-disable @next/next/no-img-element */
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const mediaItems = [
  { type: "image", src: "/assets/cleaning1.jpeg", duration: 5000 },
  { type: "video", src: "/assets/cleaning2.mov" },
  { type: "image", src: "/assets/cleaning3.jpeg", duration: 5000 },
  { type: "image", src: "/assets/cleaning4.jpeg", duration: 5000 },
  { type: "image", src: "/assets/cleaning5.jpeg", duration: 5000 },
];

const Display = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const currentItem = mediaItems[currentIndex];

    if (currentItem.type === "image") {
      const timer = setTimeout(() => {
        setCurrentIndex((i) => (i + 1) % mediaItems.length);
      }, currentItem.duration || 5000);

      return () => clearTimeout(timer);
    }

    if (currentItem.type === "video" && videoRef.current) {
      const handleEnded = () => {
        setCurrentIndex((i) => (i + 1) % mediaItems.length);
      };
      const vid = videoRef.current;
      vid.addEventListener("ended", handleEnded);

      return () => vid.removeEventListener("ended", handleEnded);
    }
  }, [currentIndex]);

  const currentItem = mediaItems[currentIndex];

  return (
    <div className="relative flex items-center justify-center bg-gradient-to-br from-accent-300 to-secondary-600 min-h-screen w-full p-16 overflow-hidden">
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          className="absolute"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {currentItem.type === "image" ? (
            <img
              src={currentItem.src}
              alt="slideshow item"
              className="max-h-[80vh] max-w-[90vw] object-contain rounded-2xl shadow-lg"
            />
          ) : (
            <video
              ref={videoRef}
              src={currentItem.src}
              className="max-h-[80vh] max-w-[90vw] object-contain rounded-2xl shadow-lg"
              autoPlay
              muted
              playsInline
              controls={false}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Display;
