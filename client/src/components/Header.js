import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu';



 

const Header = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
          setWindowWidth(window.innerWidth);
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

      const showMenu = windowWidth < 768;

    return(
        <div className='container'>
            <div className='row'>
                <div className='custom_header d-flex align-items-center col-6'>
                    <a href='https://github.com/mseaman26' className='icon_link'>
                        <FontAwesomeIcon icon={faGithub} />
                    </a> 
                    <a href='https://github.com/mseaman26' className='icon_link'>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a> 
                </div>
                {showMenu ? (
                    <Menu className='col-6' right>
                    <a className="menu-item" href="/">
                      Home
                    </a>
                    <a className="menu-item" href="/salads">
                      Salads
                    </a>
                    <a className="menu-item" href="/pizzas">
                      Pizzas
                    </a>
                    <a className="menu-item" href="/desserts">
                      Desserts
                    </a>
                  </Menu>
                   
                ) : (
                    <div className='col-6 d-flex align-items-center justify-content-end'>
                    <Link className='icon_link'>
                        Projects
                    </Link>
                    <Link className='icon_link'>
                        About
                    </Link>
                    <Link className='icon_link'>
                        Contact
                    </Link>
                </div>
                )}
                
            </div>
        </div>
    )
}

export default Header