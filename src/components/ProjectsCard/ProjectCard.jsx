import React from 'react'

const ProjectCard = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p1>{props.text}</p1><br/>
      <button>{props.button}</button>
    </div>
  )
}

export default ProjectCard

