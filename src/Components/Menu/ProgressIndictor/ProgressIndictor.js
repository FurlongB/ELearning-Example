import React, {useState, useEffect} from 'react';

import classes from './ProgressIndictor.css';

const ProgressIndictor = (props) =>{
    const [loadProgress, setLoadProgress] = useState(0);
    
    useEffect(() =>{
        setLoadProgress(Number(props.complete));
        loadProgressFunction();
        return () =>{
            console.log('Clean Up');
        }
    }, [loadProgress]);

    const loadProgressFunction = () =>{
        let i = 0;
        if (i === 0) {
            i = 1;
            const elem = document.getElementById(props.title);
            let width = 1;
            const id = setInterval(frame, 10);
            function frame(){
              if (width >= loadProgress) {
                clearInterval(id);
                i = 0;
              } else {
                width++;
                elem.style.width = width + "%";
              }
            }
         }
    }
    return(
        <div className={classes.ProgressIndictor}>
            <div className={classes.title}>
                {props.title}
            </div>
            <div id="myProgress" className={classes.myProgress}>
                <div id={props.title} className={classes.myBar}><div className={classes.myText}>{props.complete+"%"}</div></div>
            </div>
        </div>
    );
}

export default ProgressIndictor


