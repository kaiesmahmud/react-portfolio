import React from 'react';
import cv from './../../images/cv.pdf';

const LinkButtons = () => {
    return (
        <div className='cta'>
            <a href={cv} download className='btn'>Download CV</a>
            <a href="#contact" className='btn btn-primary'>Let's Connect</a>
        </div>
    );
};

export default LinkButtons;