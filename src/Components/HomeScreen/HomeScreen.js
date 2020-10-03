import React, {useState, useEffect, useContext} from 'react';
import {SCORM} from 'pipwerks-scorm-api-wrapper';

import Page from '../Navigation/Navigation';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import  {jsonResponse}  from '../../utility/Json';

import SectContext from '../../Context/sec-context'

import classes from './HomeScreen.css'

import Spinner from '../UI/Spinner/Spinner'

const homeScreen = (props) => {
    const getSection = useContext(SectContext);
    const [title, setTitle] = useState('');
    const [sectTitle, setSectTitle] = useState('')
    const [pages, setPages] = useState(null);
    const [curPage, setCurPage] = useState(0);
    const [curSection, setCurSection] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    //const [totalSections, setTotalSections] = useState(0);
    const [pgToLoad, setPgToLoad] = useState(null);
    let setSectProgress = [];
    let setPgProgress = [];
    let setCompletion = 0;
    SCORM.init();
    useEffect(() =>{
        setTitle(jsonResponse.title);
        setPgToLoad(null);
        const courseStatus = SCORM.get('cmi.core.entry');
        //console.log('courseStatus: ', courseStatus);
        const courseSections = jsonResponse.sections;
        let curPg = 0
        if(courseStatus === 'ab-initio'){
            SCORM.set('cmi.core.lesson_status', 'incomplete');
            for(let i = 0; i < Object.keys(courseSections).length; i++){
                if(i === Number(curSection-1)){
                    setSectProgress.push(1);
                }else{
                    setSectProgress.push(0);
                }
                //let curSectPages = [];
                   
                for (let j = 0; j < Object.keys(courseSections["Section_"+Number(i+1)].pages).length; j++){
                    if(i === Number(curSection-1) && j === 0){
                        setPgProgress.push(1);
                    }else{
                        setPgProgress.push(0);
                    }
                
  
                }
                //setPgProgress.push(curSectPages);
            }
            setCompletion = 0;
            curPg = 1;
        }else{
            const status = SCORM.get('cmi.suspend_data');
            let overAllStatus = [];
            overAllStatus = status.split("*");
            //console.log('overAllStatus: ',overAllStatus);
            setSectProgress = overAllStatus[0].split(",");
            setPgProgress = overAllStatus[1].split(",");
            setCompletion = Number(overAllStatus[2]);
            curPg = Number(overAllStatus[3]);
            //console.log('setPgProgress: ',setPgProgress)
        }
            const setData = {
                section: setSectProgress,
                page: setPgProgress,
                completion: setCompletion
            } 
            const setAllData = setSectProgress+"*"+setPgProgress+"*"+setCompletion+"*"+curPg;
            //console.log('setAllData: ',setAllData);
            //getSection.setTrack(setData)
            setCurPage(curPg);
            SCORM.set('cmi.suspend_data', setAllData);
            SCORM.save();
            loadcourseData(curPg);
        //})
       // .catch(err =>{
           //console.log(err)

       // });
       
        return () =>{
            //console.log('Clean Up');
        }
    }, [curSection]);

    const loadcourseData = (curPg) =>{
        const courseSections = jsonResponse.sections;
        const coursePages = courseSections["Section_"+curSection].pages;
        const loadPages = [];
        for (const key in coursePages){
            loadPages.push({id: key, name: coursePages[key].name, pageSrc: coursePages[key].pageSrc, type: coursePages[key].type})
                
        }
        setTotalPages(Object.keys(coursePages).length)
        setSectTitle(courseSections["Section_"+curSection].title);
        setPages(loadPages);
        setPgToLoad(loadPages[curPg-1]);
    }

    const loadContent = (crPage)=>{
        setPgToLoad(pages[crPage-1]);
    }

    const updateProgressHandler = (curPg, totalPg) =>{
        setPgToLoad(null);
        let ptypeSectProgress = setSectProgress;
        let ptypePgProgress = [];
        let ptypeCompletion = setCompletion;
        let complete = 0;
        for(let i = 0; i < Object.keys(jsonResponse.sections).length; i++){
            if(Number(i+1) === Number(curSection)){
                complete = Math.round(Number(curPg/totalPg) * 100);
                if(complete > ptypeCompletion){
                    ptypeCompletion = complete;
                }
                if(complete === 100){
                    ptypeSectProgress[i] = 2;
                    SCORM.set('cmi.core.lesson_status', 'completed');
                    SCORM.save();
                }else{
                    ptypeSectProgress[i] = 1;
                }
            }
            for (let j = 0; j < Object.keys(jsonResponse.sections["Section_"+curSection].pages).length; j++){
                if(Number(i+1) === Number(curSection) && curPg === Number(j+1)){
                    ptypePgProgress[j] = 1;
                }else{
                    if(setPgProgress[j] === 1){
                        ptypePgProgress[j] = 1;
                    }else{
                        ptypePgProgress[j] = 0;
                    }
                }
            }
        } 
        const setData = {
            section: ptypeSectProgress,
            page: ptypePgProgress,
            completion: ptypeCompletion
        } 
        getSection.setSect(setData);
        //setCurPage(curPg);
        const setAllData = ptypeSectProgress+"*"+ptypePgProgress+"*"+ptypeCompletion+"*"+curPg;
        //console.log("setAllData: ", setAllData)
        SCORM.set('cmi.suspend_data', setAllData);
        SCORM.save();
        loadContent(curPg);
    };

    const handlePrev = (event) =>{
        event.preventDefault();
        let crPage = 0
        if(curPage > 1){
            crPage = curPage - 1
            setCurPage(crPage);
            loadContent(crPage);
        }
    }

    const handleNext = (event) =>{
        event.preventDefault();
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
            {pgToLoad !== null  ? <Page page={pgToLoad}/> : <Spinner />}
        </div>
        {curPage !== 0 ? <Footer courseTitle={jsonResponse.title} sections={jsonResponse.sections} curPage={curPage} totalPages={totalPages} prevPage={handlePrev.bind(this)} nextPage={handleNext.bind(this)} updateCurSect={handleCurSect.bind(this)}/> : null}
    </div>
      
    )
};

export default homeScreen;