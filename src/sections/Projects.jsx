import Badge from "../components/Badge";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../Data/Data";
import MotionElement from "../components/MotionElement";

function Projects() {
  return (
    <section id="projects" className="bg-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-5 sm:gap-6">
        <MotionElement axis="y" distance={30} delay={0.1} duration={0.6}>
          <Badge className="text-brandGold">OUR PROJECTS</Badge>
        </MotionElement>

        <MotionElement axis="y" distance={40} delay={0.2} duration={0.7}>
          <h2 className="section-header">Projects Built For Generations</h2>
        </MotionElement>

        <MotionElement axis="y" distance={30} delay={0.3} duration={0.6}>
          <p
            className="
              w-full
              max-w-2xl
              text-black/85
              font-medium
              text-sm
              sm:text-[15px]
              md:text-[16px]
              lg:text-[18px]
              leading-6
              sm:leading-7
              lg:leading-8
            "
          >
            Explore a selection of residential, commercial and engineering
            projects delivered with precision, quality and integrity.
          </p>
        </MotionElement>

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-5
            gap-5
            sm:gap-6
            mt-6
            sm:mt-8
          "
        >
          {projects.map((project, index) => (
            <MotionElement
              key={index}
              axis="y"
              distance={50}
              delay={0.2 + index * 0.1}
              duration={0.7}
              className={` ${project.span}`}
            >
              <ProjectCard
                {...project}
                className={`
                 
                  h-fit
                  lg:h-125
                `}
              />
            </MotionElement>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
