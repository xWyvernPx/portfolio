import React from 'react'
import { Project } from '../../mock/project'

type Props = {
    project : Project
}

const ProjectCard = ({project}: Props) => {
  return (
    <div className="project_card_wrapper">
    <div className="project_thumbnail-wrapper">
      <img src={project?.thumbnail} />
    </div>
    <h3 className="project_name">{project?.name}</h3>
    <p>
        {project?.desc}
    </p>
    <div className="project_button_wrapper">
      <a href={project?.demo} target="_blank">
        Demo
      </a>
      <a href={project?.source} target="_blank">
        Source
        <i className="fa-brands fa-github" />
      </a>
    </div>
  </div>
  )
}

export default ProjectCard