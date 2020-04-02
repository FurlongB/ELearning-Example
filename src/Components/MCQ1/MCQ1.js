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
    },
});

const ErrorRadios = (props) => {
  const { classes } = props;
  const [answer, SetAnswer] = useState('Foot Pain')
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);
  const [helperText, setHelperText] = useState('');

  const handleRadioChange = event => {
    setValue(event.target.value);
    setHelperText('');
    setError(null);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (value === answer) {
      setTitle('Well Done!!!!')
      setHelperText('Congratulations you have chosen the correct option, foot pain is not a sympton of Covid-19.');
    } else {
      setTitle('Incorrect')
      setHelperText('Incorrect you have chosen an incorrect option, foot pain is not a sympton of Covid-19 while all other options are.');
      
    }
    setError(true);
    setValue('');
  };

  return (
    <div className={classed.Ruled}>
        <div>
            {error ? <Feedback title={title} feedback={helperText}/> : null}
        </div>
        <div className={classed.Left}>
            <div className={classed.box}>
                <form onSubmit={handleSubmit}>
                <h1>{props.pageTitle}</h1>
                <div className={classed.questText}>Which one of the below symptoms is not related to Covid-19?</div>
                <div className={classed.promptText}>Please select one option, then click <b>Submit</b>.</div>
                    <FormControl component="fieldset" error={error} className={classes.formControl}>
                        <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange} >
                        <FormControlLabel value="Cough" control={<Radio />} label="Cough" />
                        <FormControlLabel value="Fever" control={<Radio />} label="Fever" />
                        <FormControlLabel value="Foot Pain" control={<Radio />} label="Foot Pain - Correct" />
                        <FormControlLabel value="Tiredness" control={<Radio />} label="Tiredness" />
                        </RadioGroup>
                        <br/>
                        <Button type="submit" variant="contained" color="secondary" className={classes.button} disabled={value === '' ? true : false}>
                            SUBMIT
                        </Button>
                    </FormControl>
                </form>
            </div>
        </div>
        <div className={classed.Right}>
            <Image />   
        </div>
    </div>
  );
}

ErrorRadios.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(ErrorRadios);