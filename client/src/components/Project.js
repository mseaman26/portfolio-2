import React from "react";

const Project = (props) => {
    return(
        <div className="project_div container justify-content-center">
            <div className="project_link">
                <h3>{props.project.name}</h3>
                <img src={props.project.image} className="project_image"/>
            </div>
            
            <p>{props.project.description}</p>
        </div>
    )
}

export default Project