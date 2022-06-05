import React from 'react';
import Typewriter from 'typewriter-effect';
import "./Header.css";
import LinkButtons from './LinkButtons';
import me from './../../images/nehal logo.png';
import HeaderSocials from './HeaderSocials';

const Header = () => {
    return (
        <header>
            <div className="container header-container">
                <h5>Hello I'm</h5>
                <h1>Nehal </h1>
                <h3 className='text-light'style={{border:"none"}} >
                    <Typewriter
                          options={{
                              strings: ['<span style="color:yellow">JavaScript Developer</span>', '<span style="color:#4db5ff">React Developer </span>'],
                              autoStart: true,
                              loop: true,
                            }}
                            />
                </h3>
                <LinkButtons />
                <div className='me'>
                    <img src={me} alt="logo Kaies Mahmud Nehal" />
                </div>
                <a href='#contact' className='scroll-down'>Scroll Down </a>
                <HeaderSocials/>
            </div>
        </header>
    );
};

export default Header;