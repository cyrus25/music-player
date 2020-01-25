import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route, IndexRoute, hashHistory } from 'react-router-dom';
//import createBrowserHistory from 'history/createBrowserHistory';
import './index.css';
import history from './history';


import App from './components/App';
import SignIn from './components/SignIn';
import Profile from './components/Profile';
import SignUp from './components/SignUp';



//const history= createBrowserHistory;

ReactDOM.render(
    
    <Router history={history}>
   
   
        <Switch>
            <Route exact={true} path='/' component={App} />
            <Route  path='/signin' component={SignIn} />
            <Route  path='/signup' component={SignUp} />
            <Route path='/users' component={Profile} />
            <Route path='/users' component={Profile} />
           
           

            
        </Switch>
       
    </Router>,
   document.getElementById('root'));





