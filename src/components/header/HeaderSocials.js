import React from 'react';
import './Header.css'
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {AiFillInstagram} from 'react-icons/ai';


const HeaderSocials = () => {
    return (
        <div className='header-socials'>
             <a href="#" target="_blank"><BsLinkedin/></a>
             <a href="#" target="_blank"><FaGithub/></a>
             <a href="#" target="_blank"><AiFillInstagram/></a>
        </div>
    );
};

export default HeaderSocials;