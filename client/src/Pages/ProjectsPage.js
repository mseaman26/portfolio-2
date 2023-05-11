import React from 'react'
import Project from '../components/Project'
import baseballGrapher from '../images/baseballGrapherScreenShot.png'
import surfShopGif from '../images/surfShopOverview.gif'
import wordleGif from '../images/MikesWordle.gif'
import pokeDexGif from '../images/Pokedex_Tracker.gif'
import { useEffect } from 'react'

const ProjectsPage = () => {
    const projects = [
        {
            name: 'Surf Shop',
            link: 'https://surfshop.herokuapp.com/',
            gitHub: 'https://github.com/mseaman26/Surf-Shop-E-Commerce',
            image: surfShopGif,
            description: 'This is an E-commerce app for all things surf! Order transactions are simulated, but could easily be uptated to be real.  It features a database of items that are organized by category, a search bar, a shopping cart, a checkout form, admin functionality and more!',
            techs: ['React', 'useContext', 'useEffect', 'MaterialUI', 'GraphQL', 'Appollo Client', 'Mongoose']
        },
        {
            name: 'Baseball Grapher',
            link: 'https://baseball-grapher.herokuapp.com/',
            gitHub: 'https://github.com/mseaman26/Baseball-Grapher',
            image: baseballGrapher,
            description: 'This app uses web-scraping to gather win/loss/day-off data from the current baseball season.  It then displays this data in a fun graph that lets you see the divisional standings over time!  A great way to see a visual representation of the baseball season!',
            techs:['Cheerio', 'React', 'Chart.js', 'GraphQL', 'Appolo Client']
        },
        {
            name: 'Mike\'s Wordle!',
            link: 'https://mseaman26.github.io/Mike-s-Wordle/',
            gitHub: 'https://github.com/mseaman26/Mike-s-Wordle',
            image: wordleGif,
            description: 'This is a project I made early on as a student at UC Berkeley Coding Bootcamp.  It\'s an old project, but I\'m  still proud of its logic.  It is a remake of the famous NYT Wordle game.  I enjoyed the challenge of coding the logic of the game and I still enjoy updating the daily word and having my friends and family use the "share" button to show me their results in the form of color-coded tile emojis!',
            techs:['Javascript', 'HTML', 'CSS']
        },
        {
            name: 'Pokedex Tracker',
            link: 'https://pokemon-app.herokuapp.com/',
            gitHub: 'https://github.com/mseaman26/Pokemon-Trading-Center',
            image: pokeDexGif,
            description: 'This is an app for keeping track of all of your Pokemon accross all 9 generations.  With a fun GUI, the user logs in, and starts logging wich Pokemon they\'ve caught and earns badges as they catch more and more!',
            techs:[ 'React', 'Chart.js', 'GraphQL', 'Appolo Client', 'Cheerio']
        }
    ]

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className='container page'>
            <h1 className='seconday_header'>Projects</h1>
            {projects.map((project, index) => {
                return(
                    <Project project={project} key={index}></Project>
                )
            })}
        </div>
    )
}

export default ProjectsPage 