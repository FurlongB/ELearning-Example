import React from 'react'

import Logo from '../../../assets/membrane.jpg'

import classes from './page1.css'

const logo = (props)=>(
    <div className={classes.FrontPage}>
        <img src={Logo} alt="Membrane Cell" />
    </div>    
);

export default logo;