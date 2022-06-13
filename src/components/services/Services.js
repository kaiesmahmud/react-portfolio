import React from 'react';
import './Services.css';
import {BsCheck2Circle}from 'react-icons/bs';


const servicesData = [
    {
        name:"Css Design & Framework",
        services:['Raw Css','Sass','Bootstrap5','Tailwind Css','Material UI','Ant Design']
    },
    {
        name:'JavaScript',
        services:['Javascript DOM','Jquery','ES6','Arrow Function','Object Oriented JS','JS Methods','Nodejs and Express js','Ajax','Fetch API']
    },
    {
        name:'React',
        services:['React Dom','React Hooks','Functional Components','Context','React-Router','React-Redux','Axios','Styled Components','React Bootstrap','React Icons']
    }
];

const Services = () => {
    return (
        <section id='services'>
            <h5>What I Offer</h5>
            <h2>Services</h2>
            <div className="container services-container">
                {
                    servicesData.map(({name,services})=>(
                        <article className='service'>
                            <div className="service-head">
                                <h3>{name}</h3>
                            </div>
                            <ul className="service-list" >
                                {services.map((str)=>(
                                    <li>
                                        <BsCheck2Circle className='service-list-icon' />
                                        <p>{str}</p>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))
                }
            </div>
        </section>
    );
};

export default Services;