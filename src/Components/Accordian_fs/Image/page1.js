import React from 'react'

import Logo from '../../../assets/nucleus.jpg'

import classes from './page1.css'

const logo = (props)=>(
    <div className={classes.FrontPage}>
        <img src={Logo} alt="Nucleus Cell" />
    </div>    
);

export default logo;