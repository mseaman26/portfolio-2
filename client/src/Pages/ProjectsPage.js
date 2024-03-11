import React from 'react'
import Project from '../components/Project'
import baseballGrapher from '../images/baseballGrapherScreenShot.png'
import surfShopGif from '../images/surfShopOverview.gif'
import nerdleGif from '../images/nerdle_cropped.gif'
import pokeDexGif from '../images/Pokedex_Tracker.gif'
import casaSusana from '../images/CasaSusana1-ezgif.com-optimize.gif'
import polukoshko from '../images/Polukoshko_still.png'
import { useEffect } from 'react'

const ProjectsPage = () => {
    const projects = [
        {
            name: 'Casa Susana',
            link: 'https://mex-restaurant.vercel.app/#/',
            gitHub: 'https://github.com/mseaman26/mex-restaurant',
            image: casaSusana,
            description: `This app primarily demonstrates my front-end skills.  With React and raw CSS, I created a website for a Mexican restaurant that looks and feels great.  Attention to detail, both with the CSS and with the React logic, was key to making this project look good.  This project is clean, scalable, and fundamentally sound! `,
            techs: ['React', 'useContext', 'useEffect', 'useState', 'useRef', 'CSS']
        },
        {
            name: 'Surf Shop',
            link: 'https://surfshop.herokuapp.com/',
            gitHub: 'https://github.com/mseaman26/Surf-Shop-E-Commerce',
            image: surfShopGif,
            description: 'This is an E-commerce app for all things surf! Order transactions are simulated, but could easily be uptated to be real.  It features a database of items that are organized by category, a search bar, a shopping cart, a checkout form, admin functionality and more! Please keep in mind that this project is deployed to Heroku on "Hobby Tier" and may take a few seconds to load',
            techs: ['React', 'useContext', 'useEffect', 'MaterialUI', 'GraphQL', 'Appollo Client', 'Mongoose']
        },
        {
            name: 'Dr Polukoshko: Optometrist',
            link: 'https://drpolukoshko.com',
            gitHub: '',
            image: polukoshko,
            description: 'A professional website built with a friend/collaborator for an optometrist based in Reno.  We used Next.js and focused heavily on server-side rendering and SEO. At this time, the appointment booking features are not live yet, but will be soon.  We will be incorporating a third party service that handles medical appointments.',
            techs: ['Next.js', 'Javascript', 'CSS', 'Framer Motion', 'Email.js API', 'Google Maps API']
        },
        {
            name: 'Baseball Grapher',
            link: 'https://baseball-grapher.herokuapp.com/',
            gitHub: 'https://github.com/mseaman26/Baseball-Grapher',
            image: baseballGrapher,
            description: 'This app uses web-scraping to gather win/loss/day-off data from the current baseball season.  It then displays this data in a fun graph that lets you see the divisional standings over time!  A great way to see a visual representation of the baseball season! Please keep in mind that this project is deployed to Heroku on "Hobby Tier" and may take a few seconds to load',
            techs:['Cheerio', 'React', 'Chart.js', 'GraphQL', 'Appolo Client']
        },
        {
            name: 'Mike\'s Nerdle!',
            link: 'https://mseaman26.github.io/Mike-s-Nerdle',
            gitHub: 'https://github.com/mseaman26/Mike-s-Nerdle',
            image: nerdleGif,
            description: `Recreating the famous Nerdle game was a wonderful challenge.  While the game logic might seem simple at first, this challenge grew as I tried to hone in the details.  The most notable challenge was allowing the user to win with different permutations of the same equation. For example, "6*3-5=13" and “3*6-5=13" could both be winning guesses. The equation automatically updates at midnight daily.  Feel free to play!
            `,
            techs:['React','MathJS, CSS']
        },
        {
            name: 'Pokedex Tracker',
            link: 'https://pokemon-app.herokuapp.com/',
            gitHub: 'https://github.com/mseaman26/Pokemon-Trading-Center',
            image: pokeDexGif,
            description: 'This is an app for keeping track of all of your Pokemon accross all 9 generations.  With a fun GUI, the user logs in, and starts logging wich Pokemon they\'ve caught and earns badges as they catch more and more! Please keep in mind that this project is deployed to Heroku on "Hobby Tier" and may take a few seconds to load',
            techs:[ 'React', 'GraphQL', 'Appolo Client', 'Mongoose', 'Cheerio']
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