import React from 'react';

import Image from './Image/page1'

import classes from './TextGraphics.css'

const ruled = (props) =>{
    return(
        <div className={classes.Ruled}>
            <div className={classes.box}>
                <div className={classes.Left}>
                    <h1>{props.pageTitle}</h1>
                    <p>Welcome to your first quantitative pharmacology workshop elearning module.  The purpose of this module is to contextualise the application of the <b>radioligand binding assay</b>.</p>
                    <p>By working through this module, you will gain skills such as the analysis of scientific data, presenting drug binding data as a graph and calculating the binding affinity of 3 experimental drugs.</p>  
                    <p>You will be provided with a formative assessment on your knowledge of the radioligand binding assay. To proceed with this module you should have completed receptor pharmacology Lecture 1 &apos; Lecture 2.</p> 
                </div>
                <div className={classes.Right}>
                    <Image />   
                </div>
            </div>  
        </div>
        
    );
};


export default (ruled);


