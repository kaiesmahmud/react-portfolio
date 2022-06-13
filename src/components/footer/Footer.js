import React from 'react';
import "./Footer.css";
import {FiFacebook} from 'react-icons/fi';
import {AiOutlineInstagram} from 'react-icons/ai';
import {FaTwitter} from 'react-icons/fa';


const Footer = () => {
    return (
        <footer id='footer'>
            <h3>Experience is the name Everyone gives to their mistakes ! </h3>
            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="footer-socials">
                <a href="https://facebook.com/kaiesmahmud.nehal">
                    <FiFacebook className='footer-socials-icon'/>
                </a>
                <a href="https://instagram.com/kaiesmahmud">
                    <AiOutlineInstagram className='footer-socials-icon' />
                </a>
                <a href="https://twitter.com/kaiesmahmud">
                    <FaTwitter className='footer-socials-icon' />
                </a>
            </div>
            <div className="footer-copyright">
                <small>
                    &copy; Kaies Mahmud - 2022 . All rights researved
                </small>
            </div>
        </footer>
    );
};

export default Footer;