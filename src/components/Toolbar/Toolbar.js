import React from 'react';
import classes from './Toolbar.module.css'
import NavigationItems from '../NavigationItems/NavigationItems'
import Logo from '../Logo/Logo'

const toolbar = (props) => (
    <div className = {classes.Toolbar}>
        <div>
            <Logo />
        </div>
        <span style={{color:"white", fontSize:"130%"}}><b>Weather App</b></span>   
        <nav>
            <NavigationItems />
        </nav>
    </div>
);

export default toolbar;