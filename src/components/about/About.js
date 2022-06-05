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
                            <FaAward/>
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium blanditiis provident at eum nesciunt esse nam harum, ad tenetur facilis et exercitationem quos assumenda sit quo ullam ratione veniam, minima officia enim? Optio eaque ut, vero ipsum deleniti iure repudiandae amet veniam porro. Sed iure fugiat modi consequatur id commodi?
                    </p>
                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
                </div>
            </div>
        </section>
    );
};

export default About;