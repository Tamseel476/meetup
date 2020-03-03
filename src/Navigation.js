import React,{useContext} from 'react';
import AppContext from './AppContext'
import { Link } from 'react-router-dom';

const Navigation = () => {

    const [globalstate,setGlobalState]= useContext(
        AppContext
    )  
    const logOut=() =>(
        setGlobalState(
            {
                ...globalstate,
                loggedIn: false
            }
        )
    )
    const logIn=() =>(
        setGlobalState(
            {
                ...globalstate,
                loggedIn: true
            }
        )
    )

    return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">

            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Adventures">Adventures</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/Contact">Contact</Link>
                </li>
            </ul>
        </div>
            {
                globalstate.loggedIn===false &&
                <button onClick={logIn} className="btn btn-primary">Login</button>
            }
                        {
                globalstate.loggedIn===true &&
                <button onClick={logOut} className="btn btn-primary">Log out</button>
            }
    </nav> 
    )
}

export default Navigation;