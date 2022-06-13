import React, { useState } from 'react';
import './Nav.css';
import {AiOutlineHome, AiOutlineUser,AiOutlineFundProjectionScreen}from 'react-icons/ai';
import {TbHeartHandshake}from 'react-icons/tb';
import {RiContactsLine}from 'react-icons/ri';

const Nav = () => {
    const [activeNav,setActiveNav]= useState('#');
    return (
        <nav>
            <a href='#' onClick={()=>setActiveNav('#')} className={activeNav === '#' ? 'active':''}><AiOutlineHome/></a>
            <a href='#about' onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active':''}><AiOutlineUser/></a>
            <a href='#experience' onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience' ? 'active':''}><TbHeartHandshake/></a>
            <a href='#portfolio' onClick={()=>setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active':''}><AiOutlineFundProjectionScreen/></a>
            <a href='#contact' onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active':''}><RiContactsLine/></a>
        </nav>
    );
};

export default Nav;