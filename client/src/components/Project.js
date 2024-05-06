
import React, { useState } from "react";

const Project = (props) => {

    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
        console.log('done loading')
        setImageLoaded(true);
    };

    const handleImageError = () => {
        // Handle image load error if needed
        setImageLoaded(true); // Set to true to hide the loading icon even on error
      };


    return(
        <div className="project_div justify-content-center">
            <div className="project_link row">
                <div className="col-lg-6 col-sm-12 project_clickable">
                    <div className="glow">
                        <h3 >{` ${props.project.name} `}</h3>
                    </div>
                    <div className="project_image_container">
                        {!imageLoaded && (
                            <div className="loading_icon">
                                {/* Add your loading icon or spinner here */}
                                Loading...
                            </div>
                        )}
                        <a href={props.project.link} target="_blank" rel="noreferrer" onLoad={handleImageLoad}><img className="project_image" src={props.project.image} alt={props.project.name}  onError={handleImageError}/></a>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12 tech_div">
                    <h3 className="tech_header">Technologies Used</h3>
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
                <div className="container project_button_div">
                    <a href={props.project.link} target="_blank" rel="noreferrer"><button className="btn btn-success project_button">Visit live Site</button></a>
                    {props.project.gitHub && !props.project.gitHub2 &&
                        <a href={props.project.gitHub} target="_blank" rel="noreferrer"><button className="btn btn-success project_button">Visit Repo</button></a>
                    }
                    {props.project.gitHub && props.project.gitHub2 &&
                        <>
                        <a href={props.project.gitHub} target="_blank" rel="noreferrer"><button className="btn btn-success project_button">{`Visit Repo (front end)`} </button></a>
                        <a href={props.project.gitHub2} target="_blank" rel="noreferrer"><button className="btn btn-success project_button">{`Visit Repo (server)`} </button></a>
                        </>
                    }
                    
                </div>
            </div>
            
            <p>{props.project.description}</p>
        </div>
    )
}

export default Project