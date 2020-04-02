import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import SectionIndicate from './ProgressIndictor/ProgressIndictor';
import MenuHeader from './Header/MenuHeader';

import classed from './Menu.css';

const Menu = (props) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event) => {
    event.preventDefault();
    setOpen(false);
  };

  let sectionTitles = null
  sectionTitles = props.titles.map(titles =>(
      <SectionIndicate key={titles.id} title={titles.title} complete={Math.round(Math.random()*100)}/>
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