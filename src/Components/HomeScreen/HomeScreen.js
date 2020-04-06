import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';

import Page from '../Navigation/Navigation';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import  {jsonResponse}  from '../../utility/Json';

import SectContext from '../../Context/sec-context'

import classes from './HomeScreen.css'

const homeScreen = (props) => {
    const getSection = useContext(SectContext);
    const sectData = getSection.status;
    const [title, setTitle] = useState('');
    const [sectTitle, setSectTitle] = useState('')
    const [pages, setPages] = useState([])
    const [curPage, setCurPage] = useState(1);
    const [curSection, setCurSection] = useState(sectData.section);
    const [totalPages, setTotalPages] = useState(0);
    const [totalSections, setTotalSections] = useState(0);
    const [pgToLoad, setPgToLoad] = useState(null);
    
    useEffect(() =>{
        setTitle(jsonResponse.title);
        const courseSections = jsonResponse.sections;
        console.log("courseSections", Object.keys(courseSections).length)
        const coursePages = courseSections["Section_"+curSection].pages;
        setSectTitle(courseSections["Section_"+curSection].title);
        const loadPages = [];
        for (const key in coursePages){
            loadPages.push({id: key, name: coursePages[key].name, pageSrc: coursePages[key].pageSrc, type: coursePages[key].type})
                
        }
        setTotalPages(Object.keys(coursePages).length)
        setTotalSections(Object.keys(courseSections).length)
        setPages(loadPages);
        setPgToLoad(loadPages[curPage-1]);
        updateProgressHandler(curPage, Object.keys(coursePages).length);
        return () =>{
            //console.log('Clean Up');
        }
    }, [curSection]);

    const loadContent = (curPg) =>{
        setPgToLoad(pages[curPg-1]);
    }

    const updateProgressHandler = (curPg, totalPg) =>{
        const authData = {
          curPage: curPg,
          complete: Math.round(Number(curPg/totalPg)*100)
        } 
        let url = `https://adaptscenario.firebaseio.com/${"Section_"+curSection}.json`
        axios.put(url, authData)
        .then(res => {
            console.log(res)
            if(pgToLoad !== null){
                loadContent(curPg);
            }
        })
        .catch(err =>{
            console.log(err)

        });
    };

    const handlePrev = () =>{
        let crPage = 0
        if(curPage > 1){
            crPage = curPage - 1
            setCurPage(crPage);
            loadContent(crPage)
        }
    }

    const handleNext = () =>{
        let crPage = 0
        if(curPage< totalPages){
            crPage = curPage + 1
            setCurPage(crPage);
            updateProgressHandler(crPage, totalPages);
        }
    }

    const handleCurSect = (curSect) =>{
        setCurPage(1);
        setCurSection(curSect);
    }

   return (
    <div> 
        <Header coursetitle={title +" - "+sectTitle}/>
        <div className={classes.HomeScreen}>
            {pgToLoad !== null  ? <Page page={pgToLoad}/> : null}
        </div>
        <Footer courseTitle={jsonResponse.title} sections={jsonResponse.sections} curPage={curPage} totalPages={totalPages} prevPage={handlePrev.bind(this)} nextPage={handleNext.bind(this)} updateCurSect={handleCurSect.bind(this)}/>
    </div>
      
    )
};

export default homeScreen;