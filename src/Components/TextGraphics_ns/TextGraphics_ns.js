import React from 'react';

import Image from './Image/page1'

import classes from './TextGraphics_ns.css'

const ruled = (props) =>{
    return(
        <div className={classes.Ruled}>
            <div className={classes.box}>
                <div className={classes.Left}>
                    
                    <h1>{props.pageTitle}</h1>
                    <p>Before you proceed it is important that you review the lecture notes on the Hill-Langmuir Equation. The Hill-Langmuir equation establishes a mathematical relationship between the drug concentration [D] added to the receptor preparation and the receptor bound (&THORN;A), which can be measured and plotted on a graph.  The dissociation constant (K<sub>d</sub>) of a drug is equal to the concentration of drug when 50% of the receptors are occupied (bound) by the drug.</p>
                    </div>  
                
                <div className={classes.Right}>
                    <Image />   
                </div>
            </div>
        </div>
        
    );
};


export default (ruled);


