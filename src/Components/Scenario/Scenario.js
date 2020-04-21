import React from 'react';
import classes from './Scenario.css'


const scenario = (props) =>{
    return(
        <div className={classes.Ruled}>
            <div className={classes.box}>
              <h1>{props.pageTitle}</h1>
                Please look at the video and select the next step for the situation.
            </div>
          </div>
          
        
    );
};


export default (scenario);