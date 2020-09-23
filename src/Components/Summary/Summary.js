import React from 'react';

import Image from './Image/page1'

import classes from './Summary.css'

const ruled = (props) =>{
    return(
        <div className={classes.Ruled}>
            <div className={classes.box}>
                <div className={classes.Left}>
                    <h1>{props.pageTitle}</h1>
                    <p>
                    In this lesson you have learned how the radioligand binding assay is performed in the laboratory and how to analyse the data from a radioligand binding assay as follows:
                        <ul>
                            <li>To plot an occupancy curve of Bspec</li>
                            <li>To plot a Scatchard plot for Bspec</li>
                            <li>To determine the K<sub>d</sub> of a drug using these plots</li>
                        </ul>
                    </p>
                    <p>Now you will have the opportunity to apply this knowledge in the following task. Please exit the eLearning module to access the task module.</p>
                </div>  
                <div className={classes.Right}>
                    <Image />   
                </div>
            </div>
        </div>
        
    );
};


export default (ruled);


