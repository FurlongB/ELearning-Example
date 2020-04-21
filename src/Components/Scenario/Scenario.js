import React, {useState} from 'react';
import classes from './Scenario.css'


const scenario = (props) =>{
    const [nextQ, setNextQ] = useState(null)
    return(
        <div className={classes.ScenarioPanel}>
            <div className={classes.box}>
              <h1>{props.pageTitle}</h1>
                Please look at the video and select the next step for the situation.
            </div>
        </div>
          
        
    );
};


export default (scenario);