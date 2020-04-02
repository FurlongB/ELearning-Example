import React, {useState, useContext} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import SectionIndicate from './ProgressIndictor/ProgressIndictor';
import MenuHeader from './Header/MenuHeader';

import SectContext from '../../Context/sec-context';

import classed from './Menu.css';

const Menu = (props) => {
  const getSect = useContext(SectContext);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMenu = (Key) =>{
    console.log('Key', Key)
    getSect.setSect(Key);
    handleClose();
  }

  let sectionTitles = null
  sectionTitles = props.titles.map(titles =>(
      <SectionIndicate id={titles.id} key={titles.id} title={titles.title} complete={Math.round(Math.random()*100)} menuClick={handleMenu.bind(this)}/>
  ));

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Menu
      </Button>
      <Dialog open={open}>
        <div className={classed.Menu} >
          <MenuHeader click={handleClose.bind(this)}/> 
          {sectionTitles}
        </div>
      </Dialog>
    </div>
  );
}

export default Menu;