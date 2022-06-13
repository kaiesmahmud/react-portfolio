import React from 'react';
import './About.css';
import me from './../../images/Nehal-hacker.png';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
    return (
        <section id='about' >
            <h5>Get to Know</h5>
            <h2>About Me</h2>

            <div className="container about-container">
                <div className="about-me">
                    <div className="about-me-img">
                        <img src={me} alt="Nehal " />
                    </div>
                </div>
                <div className="about-content">
                    <div className="about-cards">
                        <article className='about-card'>
                            <FaAward className='about-icon' />
                            <h5>Experience</h5>
                            <small>2+ Years Working</small>
                        </article>
                        <article className='about-card'>
                            <FiUsers className='about-icon'/>
                            <h5>Clients</h5>
                            <small>100+ Worldwide</small>
                        </article>
                        <article className='about-card'>
                            <VscFolderLibrary className='about-icon'/>
                            <h5>Projects</h5>
                            <small>20+</small>
                        </article>
                    </div>
                    <p>
                        Hey, I'm Kaies Mahmud Nehal. I am JavaScript Developer. I'm learning JavaScript for 2years and understanding Data Structure and Algorithm, Object Oriented Javascript, Es6 syntax, Methods, Promises, Fetching Data etc.
                         Programming is my passion. I've also learned React for frontend development and Nodejs, expressjs, Mongodb for backend .
                    </p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    );
};

export default About;