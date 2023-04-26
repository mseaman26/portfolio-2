import React from 'react'
import Project from '../components/Project'

const ProjectsPage = () => {
    const projects = [
        {
            name: 'Baseball Grapher',
            link: 'https://baseball-grapher.herokuapp.com/',
            gitHub: 'https://github.com/mseaman26/Baseball-Grapher',
            image: 'client/src/images/baseball Grapher screenShot.png',
            description: 'This app uses web-scraping to gather win/loss/day-off data from the current baseball season.  It then displays this data in a fun graph that lets you see the divisional standings over time!  A great way to see a visual representation of the baseball season!'
        }
    ]
    return (
        <div className='container page'>
            <h1>Projects</h1>
            {projects.map((project) => {
                return(
                    <Project project={project}></Project>
                )
            })}
        </div>
    )
}

export default ProjectsPage