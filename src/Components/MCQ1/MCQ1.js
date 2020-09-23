import React, {useState} from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

import Image from './Image/page1';
import Feedback from '../FeedbackBox/FeedBackBox'

import classed from './MCQ1.css';

const styles = theme => ({
    formControl: {
        margin: theme.spacing.unit,
        fontSize: 30,
    },
    RadioGroup: {
      fontSize: 30,
    },  
});

const ErrorRadios = (props) => {
  const { classes } = props;
  const [answer, SetAnswer] = useState('The concentration of radioactive drug');
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);
  const [helperText, setHelperText] = useState('');
  const [questDone, setQuestDone] = useState(false);

  const handleRadioChange = event => {
    setValue(event.target.value);
    setHelperText('');
    setError(null);
    setQuestDone(true);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (value === answer) {
      setTitle('Well Done!!!!')
      setHelperText('Congratulations you have chosen the correct option, the symbol D* stands for the concentration of radioactive drug.');
    } else {
      setTitle('Incorrect')
      setHelperText('Incorrect you have chosen an incorrect option, the symbol D* stands for the concentration of radioactive drug.');
      
    }
    setError(true);
    setQuestDone(false);
  };

  return (
    <div className={classed.Ruled}>
       
      <div className={classed.box}>
        <div>
            {error ? <Feedback title={title} feedback={helperText}/> : null}
        </div>
            <div className={classed.Left}>
            
                <form onSubmit={handleSubmit} id="formSubmited">
                <h1>{props.pageTitle}</h1>
                <div className={classed.questText}>What does the symbol D* stand for?</div>
                <div className={classed.promptText}>Please select one option, then click <b>Submit</b>.</div>
                    <FormControl component="fieldset" error={error} className={classes.formControl}>
                        <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange} >
                          <FormControlLabel value="The concentration of cold drug" control={<Radio />} label="The concentration of cold drug" />
                          <FormControlLabel value="The concentration of drug-receptor complexes" control={<Radio />} label="The concentration of drug-receptor
  complexes" />
                          <FormControlLabel value="The concentration of radioactive drug" control={<Radio />} label="The concentration of radioactive drug" />
                          <FormControlLabel value="The concentration of buffer" control={<Radio />} label="The concentration of buffer" />
                        </RadioGroup>
                        <br/>
                        <Button type="submit" variant="contained" color="secondary" className={classes.button} disabled={questDone === false ? true : false}>
                            SUBMIT
                        </Button>
                    </FormControl>
                </form>
            </div>
        
          <div className={classed.Right}>
              <Image />   
          </div>
      </div>
    </div>
  );
}

ErrorRadios.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(ErrorRadios);