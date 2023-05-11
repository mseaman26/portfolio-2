import React from "react";

const Project = (props) => {
    return(
        <div className="project_div justify-content-center">
            <div className="project_link row">
                <div className="col-lg-6 col-sm-12 project_clickable">
                    <h3>{props.project.name}</h3>
                    <img className="project_image" src={props.project.image} alt={props.project.name}/>
                </div>
                <div className="col-lg-6 col-sm-12">
                    {/* <h3 className="tech_header">Technologies Used</h3> */}
                    <br/>
                    <ul className="tech_list">
                        {props.project.techs ? 
                        props.project.techs.map((tech, index) => {
                            return(
                                <li key={index}>
                                    {tech}
                                </li>
                            )
                        }) : <></>}
                    </ul>
                </div>
            </div>
            
            <p>{props.project.description}</p>
        </div>
    )
}

export default Project