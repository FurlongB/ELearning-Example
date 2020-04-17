import React, {useState, useContext, useEffect} from 'react';
import axios from 'axios';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

import SectionIndicate from './ProgressIndictor/ProgressIndictor';
import MenuHeader from './Header/MenuHeader';

import SectContext from '../../Context/sec-context';

import classed from './Menu.css';

import Spinner from '../UI/Spinner/Spinner'

const Menu = (props) => {
  const getSect = useContext(SectContext);
  const [open, setOpen] = useState(false);
  const [sectionComplete, setSectionComplete] = useState(null);

 /* useEffect(() =>{
    console.log('props.titles', props.titles)
    const loadCompletion = [];
    for (const key in props.titles){
       axios.get(`https://adaptscenario.firebaseio.com/${props.titles[key].id}.json`)
        .then(res => {
          loadCompletion.push({id: props.titles[key].id, title: props.titles[key].title,completed: res.data.complete});          
        })
        .catch(err =>{
            console.log(err)
      });
    }
    console.log('props.titles after', loadCompletion);
    setSectionComplete(loadCompletion);  
    return () =>{
        console.log('Clean Up');
    }
  }, [sectionComplete !== null]);
  */
  
  const loadProgress = () =>{
    const loadCompletion = [];
    for (const key in props.titles){
       axios.get(`https://adaptscenario.firebaseio.com/${props.titles[key].id}.json`)
        .then(res => {
          console.log("resData: ", res.data.complete)
          loadCompletion.push({id: props.titles[key].id, title: props.titles[key].title,completed: res.data.complete});          
          if(Object.keys(loadCompletion).length === Object.keys(props.titles).length){
            setSectionComplete(loadCompletion);
            setOpen(true);
          }
        })
        .catch(err =>{
            console.log(err)
      });
    }
  }; 
  
  const setUpMenu = (loadComplete) =>{
    let sectionTitles = <Spinner />;

    sectionTitles = loadComplete.map(titles =>(
        <SectionIndicate id={titles.id} key={titles.id} title={titles.title} complete={titles.completed} menuClick={handleMenu.bind(this)}/>
      ));
    return sectionTitles;
  }

  const handleClickOpen = () => {
    loadProgress();
  };

  const handleClose = () => {
    setOpen(false);
    setSectionComplete(null);
  };

  const handleMenu = (Key) =>{
    console.log('Key', Key)
    getSect.setSect(Key);
    handleClose();
    props.handleReformat(Key);
  }

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Menu
      </Button>
      <Dialog open={open}>
        <div className={classed.Menu} >
          <MenuHeader click={handleClose.bind(this)}/> 
          {sectionComplete !== null ? setUpMenu(sectionComplete) : null}
        </div>
      </Dialog>
    </div>
  );
}

export default Menu;