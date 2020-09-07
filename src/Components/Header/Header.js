import React from 'react';

import Logo from '../Logo/Logo';
import Close from './CloseButton/CloseButton'

import classes from './header.css'


const header = props => {
    return (
    <header className={classes.Toolbar}>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <div >
            <h1 className={classes.DesktopOnly}>Workshop 1 - Determination of drug K<sub>d</sub> using Scatchard plot
</h1>
        </div>
        <div>
            <Close />
        </div>

    </header> 
    )
};

export default header;