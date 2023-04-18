import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

 

const Header = () => {
    return(
        <div className='custom_header'>
            <ul>
            <FontAwesomeIcon icon={faGithub} />

            </ul>
        </div>
     
    )
}

export default Header