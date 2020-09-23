import React, {useState, useEffect} from 'react';
import TextGraphics from '../TextGraphics/TextGraphics';
import Mcq1 from '../MCQ1/MCQ1';
import Mcq1a from '../MCQ1a/MCQ1a';
import Mcq1b from '../MCQ1b/MCQ1b';
import Video from '../VideoScreen/VideoScreen';
import Video1 from '../VideoScreen_1/VideoScreen_1';
import Video2 from '../VideoScreen_2/VideoScreen_2';
import TextGraphicsNs from '../TextGraphics_ns/TextGraphics_ns';
import Summary from '../Summary/Summary';


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
          {value === "video" ? <Video pageTitle={title}/> : null}
          {value === "video_1" ? <Video1 pageTitle={title}/> : null}
          {value === "mcq1" ? <Mcq1 pageTitle={title}/> : null}
          {value === "text_ns" ? <TextGraphicsNs pageTitle={title}/>: null}
          {value === "mcq1a" ? <Mcq1a pageTitle={title}/> : null}
          {value === "video_2" ? <Video2 pageTitle={title}/> : null}
          {value === "mcq1b" ? <Mcq1b pageTitle={title}/> : null}
          {value === "summary" ? <Summary pageTitle={title}/> : null}
        </div>
    );
}

export default NavTabs;