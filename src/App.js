import React, {useState,useContext} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AppContext from './AppContext'
import LandingPage from './LandingPage';
import Contact from './Contact';
import About from './About';
import Adventures from './Adventures';
import Navigation from './Navigation';
import Register from './Register';
import Login from './Login';
import Logout from './Logout'


const LayoutRoute =({location,path, exact,component}) =>{
    return (
        <div>
            <Navigation location={location.pathname}/>}
            <Route
            path ={path}
            exact={exact}
            component={component}
            />
          
        </div>
    )
}

const App=() =>{
    const [globalState, setGlobalState]= useState (

        {
          loggedIn: true,
        }
        )
    
    return (

        

        <AppContext.Provider value={[globalState, setGlobalState]}>
            <BrowserRouter>
            <Switch>
            <LayoutRoute path= "/" exact component={LandingPage}/>
            <LayoutRoute path ="/about" component={About}/>
            <LayoutRoute path ="/Contact" component={Contact}/>
            <LayoutRoute path ="/Adventures" component={Adventures}/>
            <LayoutRoute path ="/user/register" component={Register}/>
            <LayoutRoute path ="/user/login" component={Login}/>
            <LayoutRoute path ="/user/logout" component={Logout}/>

            </Switch>
            </BrowserRouter>
        </AppContext.Provider>
    
    )
}

export default App;