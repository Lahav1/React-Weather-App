import React from 'react';
import classes from './Layout.module.css';
import Toolbar from '../Toolbar/Toolbar';

const layout = (props) => (
    <div>
        <Toolbar />
        <div className = {classes.Content}>
            {props.children}
        </div>
    </div>
);

export default layout;