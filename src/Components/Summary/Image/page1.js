import React from 'react'

import Logo from '../../../assets/summary.png'

import classes from './page1.css'

const logo = (props)=>(
    <div className={classes.FrontPage}>
        <img src={Logo} alt="Summary Screen" />
    </div>    
);

export default logo;