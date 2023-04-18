import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'

 

const Header = () => {
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
            </div>
        </div>
    )
}

export default Header