import Header from "../components/ui/Header";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import photo from "../../public/Profil.png";

export default function About() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 830);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 830);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main>
      {isDesktop ? (
        <section className="flex flex-col bg-black text-white min-h-screen md:flex-row md:justify-between md:items-center px-1 md:px-20">
          {/* Partie gauche (texte) */}
          <div className="py-8 md:py-0 md:w-1/2">
            <Header />

            <motion.p
              initial={{ x: -200, opacity: 0 }} // Position de départ : hors écran à gauche
              animate={{ x: 0, opacity: 1 }} // Arrive à sa place, visible
              transition={{ duration: 0.8, ease: "easeOut" }} // Durée et fluidité
              className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl leading-snug mt-6"
            >
              I'm <span className="text-[#868484]">FOGOU TEFOUE WILLIAM,</span>{" "}
              <br />a{" "}
              <span className="text-[#868484]">
                Front-end Developer Junior.
              </span>
              <br />
              Welcome to{" "}
              <span className="font-bold">
                My<span className="text-[#868484]">Folio</span>.
              </span>
            </motion.p>

            <p className="text-lg sm:text-3xl md:text-4xl py-6">
              Hobbies <span className="text-5xl">|</span>{" "}
              <span className="text-[#868484] sm:text-2xl md:text-3xl">
                Music, Video games
              </span>
            </p>

            <p className="font-semibold text-lg sm:text-3xl md:text-4xl py-4 animate-bounce">
              Curiosity, Imagination, Creativity
            </p>
          </div>

          {/* Partie droite (photo profil) */}
          <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center md:justify-end">
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              src={photo}
              alt="MyProfile"
              className="w-250 h-250 rounded-full object-cover md:w-[620px] md:h-[620px] md:rounded-none"
            />
          </div>
        </section>
      ) : (
        <section>
          <div className="relative justify-between">
            <Header></Header>
            <img className="w-full h-auto py-2" src={photo} alt="MyProfile" />
            <div className="mx-auto py-8">
              <motion.p initial={{ x: -200, opacity: 0 }} // Position de départ : hors écran à gauche
              animate={{ x: 0, opacity: 1 }} // Arrive à sa place, visible
              transition={{ duration: 0.8, ease: "easeOut" }} className="text-white text-2xl leading-10 items-center text-center ">
                I'm{" "}
                <span className="text-[#868484]">FOGOU TEFOUE WILLIAM,</span>{" "}
                <br /> a{" "}
                <span className="text-[#868484]">
                  Front-end Developer Junior.
                </span>
                <br />
                Welcome to{" "}
                <span className="font-bold">
                  My<span className="text-[#868484]">Folio</span>.
                </span>
              </motion.p>
              <p className="text-white text-2xl py-1 text-center ">
                Hobbies <span className="text-4xl text-[#868484]">|</span>{" "}
                <span className="text-xl">Music, Video games</span>
              </p>
              <motion.p className="text-white font-extrabold py-3 text-xl text-center">
                Curiosity, Imagination, Creativity
              </motion.p>
            </div>

            
          </div>
        </section>
      )}
    </main>
  );
}
