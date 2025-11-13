import ProjectCard from "../../src/components/projectCard";
import { projects } from "../../data/projects";


const logos = [
  "/Html 5.png",
  "/CSS3.png",
  "/React.png",
  "/JavaScript.png",
  "/GitHub.png",
];

export default function Projects() {
  return (
    <section className="bg-black text-white md:py-10 px-1 md:px-10">
      <h2 className="text-center text-2xl md:text-4xl italic underline mb-12">
        Projects
      </h2>

      <div className="flex flex-col items-center ">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            {...project}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>

      {/* Technologies icons */}
      <div className="overflow-hidden py-8 md:py-20 bg-transparent">
      <div
         className="md:flex flex gap-7 md:gap-50 md:py-10 py-2 justify-center"
      >
        {[...logos].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`logo-${index}`}
            className=" w-15 h-15 md:w-30 md:h-30 object-contain grayscale hover:grayscale-0 transition duration-300"
          />
        ))}
      </div>
    </div>
    </section>
  );
}
