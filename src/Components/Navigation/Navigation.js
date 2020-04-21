import React, {useState, useEffect} from 'react';
import TextGraphics from '../TextGraphics/TextGraphics';
import Mcq1 from '../MCQ1/MCQ1';
import Mcqx from '../MCQx/MCQx';
import Accordian from '../Accordian/Accordian';
import Video from '../VideoScreen/VideoScreen';
import AccordianFs from '../Accordian_fs/Accordian_fs';

const NavTabs =(props) => {
  const [value, setValue] = useState('');
  const [title, setTitle] = useState('');
  useEffect(() =>{
    setValue(props.page.pageSrc);
    setTitle(props.page.name);
    console.log('props.page.pageSrc: ', props.page.pageSrc)
    return () =>{
      console.log('Clean Up');
    }
  }, [props]);

    return (
        <div>
          {value === "text" ? <TextGraphics pageTitle={title}/>: null}
          {value === "accordian" ? <Accordian pageTitle={title}/>: null}
          {value === "mcq1" ? <Mcq1 pageTitle={title}/> : null}
          {value === "mcqx" ? <Mcqx pageTitle={title}/> : null}
          {value === "video" ? <Video pageTitle={title}/> : null}
          {value === "accordian_fs" ? <AccordianFs pageTitle={title}/> : null}
          {value === "scenario" ? <AccordianFs pageTitle={title}/> : null}
        </div>
    );
}

export default NavTabs;