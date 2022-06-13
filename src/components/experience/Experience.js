import React from 'react';
import "./Experience.css";
import {BsShieldFillCheck}from 'react-icons/bs';


const frontend = [
    {
        name:'Html',
        experience:'Experienced'
    },
    {
        name:'CSS',
        experience:'Experienced'
    },
    {
        name:'Bootstrap',
        experience:'Experienced'
    },
    {
        name:'Javascript',
        experience:'Experienced'
    },
    {
        name:'REACT',
        experience:'Experienced'
    },
    {
        name:'Tailwind CSS',
        experience:'Intermediate'
    },
    {
        name:'React-Redux',
        experience:'Intermediate'
    },
    {
        name:'React-Router',
        experience:'Intermediate'
    }
];
const backend = [
    {
        name:'JavaScript',
        experience:'Experienced'
    },
    {
        name:'Node js',
        experience:'Experienced'
    },
    {
        name:'Express js',
        experience:'Experienced'
    },
    {
        name:'MongoDB',
        experience:'Experienced'
    },
    {
        name:'RESTful API',
        experience:'Experienced'
    },
    {
        name:'Analytics',
        experience:'Experienced'
    },
    {
        name:'Firebase',
        experience:'Experienced'
    },
    {
        name:'MySQL',
        experience:'Basic'
    }
        
]
const Experience = () => {
    
    return (
        <section id='experience'>
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>
            <div className="container experience-container">
                <div className="experience-frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience-content">
                        {
                            frontend.map((skill)=>(
                                <article className='experience-details'>
                                    <BsShieldFillCheck className='experience-details-icon'/>
                                    <div>
                                    <h4>{skill.name}</h4>
                                    <small className='text-light'>{skill.experience}</small>
                                    </div>
                                </article>
                            ))
                        }
                    </div>
                    
                </div>
                <div className="experience-backend">
                <h3>Backend Development</h3>
                    <div className="experience-content">
                        {
                            backend.map((skill)=>(
                                <article className='experience-details'>
                                    <BsShieldFillCheck className='experience-details-icon'/>
                                    <div>
                                    <h4>{skill.name}</h4>
                                    <small className='text-light'>{skill.experience}</small>
                                    </div>
                                </article>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};



export default Experience;