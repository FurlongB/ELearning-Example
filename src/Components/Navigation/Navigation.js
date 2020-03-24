import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import AuthContext from '../../Context/auth-context'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import NoSsr from '@material-ui/core/NoSsr';
import Tab from '@material-ui/core/Tab';

import TextGraphics from '../TextGraphics/TextGraphics';
import Mcq1 from '../MCQ1/MCQ1';
import Mcqx from '../MCQx/MCQx';
import Accordian from '../Accordian/Accordian';
import Video from '../VideoScreen/VideoScreen';
import AccordianFs from '../Accordian_fs/Accordian_fs';

const LinkTab = (props) => {
  return <Tab component="a" onClick={event => event.preventDefault()} {...props} />;
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#b8b8bb',
  },
});

const NavTabs =(props) => {
  const [value, setValue] = useState(0);
  const [curStatus, setCurStatus] = useState('text');
  const authStatus = useContext(AuthContext);

  useEffect(() =>{
    loadContent();
    return () =>{
      console.log('Clean Up');
    }
  }, [curStatus]);

  const loadContent = () =>{
    /*axios.get(`https://my-ups-4b5b7.firebaseio.com/${authStatus.status.area}.json`)
    .then(res =>{
      const checkData = res.data
      const loadDeliveries = [];
      let delivery = 0;
      let pickup = 0
       for (const key in checkData ){
         if(curStatus === checkData[key].status){
          loadDeliveries.push({id: key, name: checkData[key].name, address: checkData[key].address, area: checkData[key].area, status:checkData[key].itemstatus})
        } 
        if(checkData[key].status === 'delivery' && checkData[key].itemstatus === 'null'){
          delivery++;
        }else if(checkData[key].status === 'pickup' && checkData[key].itemstatus === 'null'){
         pickup++;
        }
       }

    })
    .catch(err =>{
      console.log(err)
    });*/
  }

  /*const updateData = () =>{
    console.log('You making it here')
    loadContent();
  };*/


  const handleChange = (event, value) => {
      setValue(value);
      if(value === 0){
        setCurStatus('text')
      }else if(value === 1){
        setCurStatus('accordian')
      }else if(value === 2){
        setCurStatus('mcq1')
      }else if(value === 3){
        setCurStatus('mcqx')
      }else if(value === 4){
        setCurStatus('video') 
      }else if(value === 5){
        setCurStatus('accordian_fs') 
      }else{
        setCurStatus('add')
      }
  };
 

  const { classes } = props;

   return (
      <NoSsr>
        <div className={classes.root}>
          <AppBar position="static">
            <Tabs variant="fullWidth" value={value} onChange={handleChange.bind(this)}>
              <LinkTab label="Text and Graphic" href="page1" />
              <LinkTab label="Accordian" href="page2" />
              <LinkTab label="Multiple Choice Single Answer" href="page3" />
              <LinkTab label="Multiple Choice Mulitple Answers" href="page4" />
              <LinkTab label="Video" href="page5" />
              <LinkTab label="Accordian_Fs" href="page6" />
            </Tabs>
          </AppBar>
          {value === 0 ? <TextGraphics />: null}
          {value === 1 ? <Accordian />: null}
          {value === 2 ? <Mcq1 /> : null}
          {value === 3 ? <Mcqx /> : null}
          {value === 4 ? <Video /> : null}
          {value === 5 ? <AccordianFs /> : null}
        </div>
        
      </NoSsr>
    );
}

NavTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavTabs);