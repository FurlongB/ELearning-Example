import React from 'react';
import classes from './VideoScreen_1.css';

import Image from './Image/page1'

import Video from './Video/Video';

const videoScreen = (props) =>{
    return(
        <div className={classes.Ruled}>
          <div className={classes.box}>
            <div className={classes.Left}>
              
                <h1>{props.pageTitle}</h1>
                <p>Watch the following video which illustrates how the concentration of a drug binding to a specific receptor site in a segment of tissue can be calculated from the <b>radioligand binding assay</b>.</p>
                <Image/>
            </div>
         
            <div className={classes.Right}>
              <Video/>
            </div> 
          </div>
        </div>
        
    );
};


export default (videoScreen);