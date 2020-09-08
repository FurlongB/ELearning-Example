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

import classed from './MCQ1a.css';

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
  const [answer, SetAnswer] = useState('1000')
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
      setHelperText('Congratulations you have chosen the correct option.');
    } else {
      setTitle('Incorrect')
      setHelperText('That is not the correct option, the correct option is 1000.');
      
    }
    setError(true);
    setValue('');
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
                <div className={classed.questText}>Look at the graph provided of the &THORN;A (%receptor occupancy) of a drug [D]. What is the K<sub>d</sub> of the drug from this graph?</div>
                <div className={classed.promptText}>Please select one option, then click <b>Submit</b>.</div>
                    <FormControl component="fieldset" error={error} className={classes.formControl}>
                        <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange} >
                          <FormControlLabel value="10" control={<Radio />} label="10" />
                          <FormControlLabel value="100" control={<Radio />} label="100" />
                          <FormControlLabel value="1000" control={<Radio />} label="1000" />
                          <FormControlLabel value="10000" control={<Radio />} label="10000" />
                          <FormControlLabel value="100000" control={<Radio />} label="100000" />
                        </RadioGroup>
                        <br/>
                        <Button type="submit" variant="contained" color="secondary" className={classes.button} disabled={value === '' ? true : false}>
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