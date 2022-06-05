import React, { useState } from 'react';
import './Nav.css';
import {AiOutlineHome,AiOutlineMessage, AiOutlineUser,AiOutlineFundProjectionScreen}from 'react-icons/ai';
import {GiOfficeChair}from 'react-icons/gi';

const Nav = () => {
    const [activeNav,setActiveNav]= useState('#');
    return (
        <nav>
            <a href='#' onClick={()=>setActiveNav('#')} className={activeNav === '#' ? 'active':''}><AiOutlineHome/></a>
            <a href='#about' onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active':''}><AiOutlineUser/></a>
            <a href='#experience' onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience' ? 'active':''}><AiOutlineFundProjectionScreen/></a>
            <a href='#services' onClick={()=>setActiveNav('#services')} className={activeNav === '#services' ? 'active':''}><GiOfficeChair/></a>
            <a href='#contact' onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active':''}><AiOutlineMessage/></a>
        </nav>
    );
};

export default Nav;