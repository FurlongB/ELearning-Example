import React from 'react';
import classes from './VideoScreen.css';

import Image from './Image/page1'

import Video from './Video/Video';

const videoScreen = (props) =>{
    return(
        <div className={classes.Ruled}>
          <div className={classes.Left}>
            <div className={classes.box}>
              <h1>{props.pageTitle}</h1>
              <p>Watch this video of how to set up an organ bath experiment. The muscle tissue contracts because Ach (acetylcholine) binds to the acetylcholine receptors in the tissue.  The magnitude of the contraction is recorded on the transducer. In a <b>radioligand binding assay</b>, radioactive Ach would be incubated with the tissue. The amount of radioactivity absorbed by the tissue can be measured. The concentration of radioactive Ach can be determined in the tissue and from this, the binding affinity of Ach for the acetylcholine receptor can be calculated.</p>
              <p>Q: Do you know which acetylcholine receptor is responsible for smooth muscle contraction?</p>
              <Image/>
            </div>
          </div>
          <div className={classes.Right}>
            <Video/>
          </div> 
        </div>
        
    );
};


export default (videoScreen);