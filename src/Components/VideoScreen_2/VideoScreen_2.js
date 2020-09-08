import React from 'react';
import classes from './VideoScreen_2.css';

import Image from './Image/page1'

import Video from './Video/Video';

const videoScreen = (props) =>{
    return(
        <div className={classes.Ruled}>
          <div className={classes.box}>
            <div className={classes.Left}>
              
                <h1>{props.pageTitle}</h1>
                <p>Watch the following video which illustrates how the data from a radioligand binding assay can be applied to the Scatchard Plot and how this data is used to estimate the K<sub>d</sub> of a drug receptor interaction.</p>
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