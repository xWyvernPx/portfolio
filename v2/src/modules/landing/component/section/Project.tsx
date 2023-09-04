import React from "react";
import ProjectCard from "./ProjectCard";
import { Project } from "../../mock/project";

type Props = {
  projects: Project[];
};

const Project = ({ projects }: Props) => {
  return (
    <section className="section" id="project">
      <span className="section_title">Project</span>
      <div className="project_list">
        {projects?.map((project, i) => {
          return (
           <ProjectCard project={project} key={i}/>
          );
        })}
      </div>
    </section>
  );
};

export default Project;
