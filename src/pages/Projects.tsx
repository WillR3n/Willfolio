import ProjectCard from "../../src/components/projectCard";
import { projects } from "../../data/projects";


const logos = [
  "public/Html 5.png",
  "public/CSS3.png",
  "public/React.png",
  "public/JavaScript.png",
  "public/GitHub.png",
];

export default function Projects() {
  return (
    <section className="bg-black text-white py-5 px-1 md:px-10">
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
      <div className="overflow-hidden md:py-35 bg-transparent">
      <div
         className="md:flex flex gap-10 md:gap-50 md:py-10 py-10 justify-center"
      >
        {[...logos].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`logo-${index}`}
            className=" w-10 h-10 md:w-30 md:h-30 object-contain grayscale hover:grayscale-0 transition duration-300"
          />
        ))}
      </div>
    </div>
    </section>
  );
}
