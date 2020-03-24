import React, {useState, useEffect} from 'react';
import Navigation from '../Navigation/Navigation';
import Header from '../Header/Header';

import  {jsonResponse}  from '../../utility/Json';

import classes from './HomeScreen.css'

const homeScreen = (props) => {
    const [title, setTitle] = useState('');
    const [pages, setPages] = useState([])
    useEffect(() =>{
        setTitle(jsonResponse.courseTitle[0].title);
            console.log('title', title)
            const coursePages = jsonResponse.pages;
            console.log('coursePages', coursePages)
            const loadPages = [];
            for (const key in coursePages ){
                loadPages.push({id: key, name: coursePages[key].name, pageSrc: coursePages[key].pageSrc, type: coursePages[key].type})
            }
            setPages(setPages);
            console.log('pages', pages)
         //})
        //.catch(err =>{
            //console.log(err)
            //setError(err.message)
       // });
        return () =>{
            console.log('Clean Up');
        }
    }, []);
   return (
       <div> 
           <Header coursetitle={title}/>
           <div className={classes.HomeScreen}>
            <Navigation pages={pages}/>
       </div>
      
       </div>
      
    )
};

export default homeScreen;