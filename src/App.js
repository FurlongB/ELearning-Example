import React, {useState} from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Auth from './Components/Auth/Auth';
import HomeScreen from './Components/HomeScreen/HomeScreen';
import AuthContext from './Context/auth-context';
import SectContext from './Context/sec-context';

const App = () =>{
    const [authStatus, setStatus] = useState(null);
    const [curSect, setCurSect] = useState({});

    const setAuth = (stat) =>{
      setStatus({ID: stat});
    }

    const setSection = (stat)=> {
      setCurSect({section: stat.section, page: stat.page, completion: stat.completion})
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
