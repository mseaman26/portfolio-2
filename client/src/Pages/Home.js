import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return (
        <div className='home_page page'>
            <h1 className='main_header'>
                Michael Seaman
            </h1>
            <h2>
                ____
            </h2>
            <h2 className='seconday_header'>
                Full-Stack Developer
            </h2>
            <h2>
                ____
            </h2>
            <p>
            React | JavaScript | Python | Django | Typescript | MERN Stack | GraphQL | ES6 | Express | Node | MongoDB | MySQL | CSS | HTML 5 | REST | GitHub | UX/UI | MVC | Relational Databases | Strong Communication | Problem-Solving | Responsive Web Design | Developer Tools | Insomnia | Creating Server-Side API | Third-Party API | Fetch | AJAX | Wireframe Creation | Git | GitHub | TDD | Jest | and more…
            </p>
        </div>
        
    )
}

export default Home