import React from 'react';
import classes from './VideoScreen.css'

import Video from './Video/Video';

const videoScreen = (props) =>{
    return(
        <div className={classes.Ruled}>
          <div className={classes.box}>
            <h1>Page Title</h1>
            People may be sick with the virus for 1 to 14 days before developing symptoms. The most common symptoms of coronavirus disease (COVID-19) are fever, tiredness, and dry cough. Most people (about 80%) recover from the disease without needing special treatment.<br/><br/>More rarely, the disease can be serious and even fatal. Older people, and people with other medical conditions (such as asthma, diabetes, or heart disease), may be more vulnerable to becoming severely ill.<br/><br/>Click the video to learn more about the disease.
            <div className={classes.VideoPanel}>
              <Video/>
            </div> 
          </div> 
        </div>
        
    );
};


export default (videoScreen);