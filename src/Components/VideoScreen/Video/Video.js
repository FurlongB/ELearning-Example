import React from 'react'

import Video from '../../../assets/bailey.mp4'

const video = (props)=>(
  <div>
    <video controls="controls">
      <source src={Video} type="video/mp4"/>
      Your browser does not support the HTML5 Video element.
  </video>
  </div>    
);

export default video;