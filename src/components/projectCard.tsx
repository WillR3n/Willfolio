import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { Button } from "../components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
  link: string;
  aosDescription : string;
}

export default function ProjectCard({
  title,
  description,
  image,
  reverse = false,
  link,
}: ProjectCardProps) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3, // quand 30% de la section est visible
  });

  useEffect(() => {
    if (inView) {
      controls.start({ x: 0, opacity: 1 });
    } else {
      controls.start({ x: 100, opacity: 0 }); // reset quand on quitte
    }
  }, [inView, controls]);

  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 830);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 830);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return ( 
    <>
    {isDesktop ? (
       <div
      ref={ref}
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center md:items-start gap-55 sm:py-2 max-w-4xl`}
    >
      <motion.div
        className="w-80 h-90 bg-white rounded-[21px] mx-auto"
        animate={controls}
        initial={{ x: 100, opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="grid place-items-center">
          <img src={image} alt={title} className="w-80 rounded-xl shadow-lg" />
          <h3 className="mt-3 font-bold py-5 text-3xl text-black">
            {title}
          </h3>
          <a href={link}>
            <Button
              className="cursor-pointer text-bold text-xl text-black hover:text-white"
              variant="secondary"
            >
              View the project
            </Button>
          </a>
        </div>
      </motion.div>

      <div
        className="max-w-sm text-center md:text-left"
      >
        <p className="italic text-3xl w-109 py-35">{description}</p>
      </div>
    </div>

    ) : (
       <div
      ref={ref}
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center md:items-start  sm:py-2 max-w-4xl`}
    >
      <motion.div
        className="w-60 h-75 bg-white rounded-[21px] mx-auto"
        animate={controls}
        initial={{ x: 100, opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="grid place-items-center">
          <img src={image} alt={title} className="w-80 rounded-xl shadow-lg" />
          <h3 className="mt-3 font-bold py-3 text-xl text-black">
            {title}
          </h3>
          <a href={link}>
            <Button
              className="cursor-pointer text-bold text-xs text-black w-30  hover:text-white"
              variant="secondary"
            >
              View the project
            </Button>
          </a>
        </div>
      </motion.div>

      <div
        className="text-center md:text-left "
      >
        <p className="italic text-base w-95 py-5">{description}</p>
      </div>
    </div>
    )}
    </>
  );
}
