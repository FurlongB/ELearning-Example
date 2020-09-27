import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import classes from './CloseButton.css'

const closeButton = () =>{
    const handleClose = (cmd) =>{
        let location = window.location.href
        if (cmd==='quit')
        {
            window.open(location, '_self').close();
        }   
        ////console.log('Closing the screen')
    }
    return(
        <div className={classes.CloseButton}>
            <IconButton edge="start" color="inherit" onClick={handleClose.bind(this, "quit")} aria-label="close">
              <CloseIcon />
            </IconButton>
        </div>
    );
}

export default closeButton;