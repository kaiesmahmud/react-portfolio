import React from 'react';
import './Portfolio.css';

const img = [
    {
        img:'./img/portfolio1.jpg',
        id: 1,
        title:"Javascript Simple Calculator",
        github:"https://github.com/kaiesmahmud",
        demo:"https://kaiesmahmud.github.io/calculator-using-simple-js/"
    },
    {
        img:'./img/portfolio2.jpg',
        id: 2,
        title:"Tic Tac Toe Game",
        github:"https://github.com/kaiesmahmud",
        demo:"https://kaiesmahmud.github.io/tic-tac-toe-game-js/"

    },
    {
        img:'./img/portfolio3.jpg',
        id: 3,
        title:"Blog App",
        github:"https://github.com/kaiesmahmud",
        demo:"https://kaiesmahmud.github.io/tic-tac-toe-game-js/"

    },
    {
        img:'./img/portfolio4.jpg',
        id: 4,
        title:"NCrypto App",
        github:"https://github.com/kaiesmahmud",
        demo:"https://kaiesmahmud.github.io/tic-tac-toe-game-js/"

    },
    {
        img:'./img/portfolio5.png',
        id: 5,
        title:"Real Estate App",
        github:"https://github.com/kaiesmahmud",
        demo:"https://kaiesmahmud.github.io/tic-tac-toe-game-js/"

    },
    {
        img:'./img/portfolio6.jpg',
        id: 6,
        title:"E-commerce App",
        github:"https://github.com/kaiesmahmud",
        demo:"https://kaiesmahmud.github.io/tic-tac-toe-game-js/"
    },
   
]
const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Projects</h2>
            <div className="container portfolio-container">
            {
                img.map((obj)=>(
                    <article className='portfolio-item' key={obj.id}>
                        <div className="portfolio-item-img">
                            <img src={obj.img} alt="img one" />
                        </div>
                        <h3>{obj.title}</h3>
                        <div className="link">
                            <a href={obj.github} className='btn' target='_blank'>Github</a>
                            <a href={obj.demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                        </div>
                    </article>
                ))
            }
            </div>
        </section>
    );
};

export default Portfolio;