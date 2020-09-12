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

import classed from './MCQ1b.css';

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
  const [answer, SetAnswer] = useState('Bspecific')
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
      setHelperText('Congratulations you have chosen the correct option. The values of the X axis on a Scatchard plot are derived from calculating Bspecific.');
    } else {
      setTitle('Incorrect')
      setHelperText('That is not the correct option. The values of the X axis on a Scatchard plot are derived from calculating Bspecific.');
      
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
                <div className={classed.questText}>The values of the X axis on a Scatchard plot are derived from calculating?</div>
                <div className={classed.promptText}>Please select one option, then click <b>Submit</b>.</div>
                    <FormControl component="fieldset" error={error} className={classes.formControl}>
                        <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange} >
                          <FormControlLabel value="Btot" control={<Radio />} label={<span>B<sub>tot</sub></span>} />
                          <FormControlLabel value="Bspecific" control={<Radio />} label={<span>B<sub>specific</sub></span>} />
  <FormControlLabel value="Bmax" control={<Radio />} label={<span>B<sub>max</sub></span>} />
                          <FormControlLabel value="B* of the above" control={<Radio />} label="B* of the above" />
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