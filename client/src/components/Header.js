import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu';



 

const Header = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const[menuOpen, setMenuOpen] = useState(false)
    const closeMenu = () => {
      setMenuOpen(false)
    }

    useEffect(() => {
        function handleResize() {
          setWindowWidth(window.innerWidth);
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

      const showMenu = windowWidth < 768;

    return(
        <div className='header_container position-fixed'>
            <div className='row'>
                <div className='custom_header d-flex align-items-center col-6'>
                    <a href='https://github.com/mseaman26' className='icon_link icon_link_icon'>
                        <FontAwesomeIcon icon={faGithub} />
                    </a> 
                    <a href='https://github.com/mseaman26' className='icon_link icon_link_icon'>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a> 
                </div>
                {showMenu ? (
                  <Menu className='col-6' right isOpen={menuOpen} onStateChange={(state) => setMenuOpen(state.isOpen)}>
                    <a className="menu-item" href="/" onClick={closeMenu}>
                      Home
                    </a>
                    <a className="menu-item" href="/#/projects" onClick={closeMenu}>
                      Projects
                    </a>
                    <a className="menu-item" href="/#/resume" onClick={closeMenu}>
                      Resume
                    </a>
                    <a className="menu-item" href="/#/contact" onClick={closeMenu}>
                      Contact
                    </a>
                  </Menu>
                   
                ) : (
                  <div className='col-6 d-flex align-items-center justify-content-end'>
                    <Link className='icon_link' to='/'>
                      Home
                    </Link>
                    <Link className='icon_link' to='/projects'>
                        Projects
                    </Link>
                    <Link className='icon_link' to='/resume'>
                        Resume
                    </Link>
                    <Link className='icon_link' to='/contact'>
                        Contact
                    </Link>
                </div>
                )}
                
            </div>
        </div>
    )
}

export default Header