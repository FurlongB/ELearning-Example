import React from 'react'

import Logo from '../../../assets/animal.jpg'

import classes from './page1.css'

const logo = (props)=>(
    <div className={classes.FrontPage}>
        <img src={Logo} alt="Animal Cell" />
    </div>    
);

export default logo;