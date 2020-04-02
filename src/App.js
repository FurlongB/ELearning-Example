import React, {useState} from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Auth from './Components/Auth/Auth';
import HomeScreen from './Components/HomeScreen/HomeScreen';
import AuthContext from './Context/auth-context';
import SectContext from './Context/sec-context';

const App = () =>{
    const [authStatus, setStatus] = useState(null);
    const [curSect, setCurSect] = useState({section: "1", page: "1"});

    const setAuth = (stat) =>{
      console.log('stat', stat)
      let area = '';
      if(stat === 'GOIP3etEbrUMJJ9N7OVldwEpkD23'){
        area = 'Enniscorthy'
      }
      setStatus({ID: stat, area: area});
    }

    const setSection = (stat)=> {
      console.log('Setting Section: ',stat);
      setCurSect({section: stat, page: null})
    }

    let routes = (
      <Switch>
        <Route path="/" exact component={Auth} />
        <Route path="/home" component={HomeScreen}/>
        <Redirect to="/" /> 
      </Switch>
    );
    return (
      <div className="App">
        <AuthContext.Provider value={{status: authStatus, login: setAuth}}>
        <SectContext.Provider value={{status: curSect, setSect: setSection}}>
          {routes}
        </SectContext.Provider>
        </AuthContext.Provider>
      </div>
    );
}

export default withRouter(App);
