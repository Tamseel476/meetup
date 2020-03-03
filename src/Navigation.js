import React,{useContext} from 'react';
import AppContext from './AppContext'
import { Link } from 'react-router-dom';
import './style.css';

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
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
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
        <button className="btn btn-warning" >
                    <Link to="/user/register">Register</Link>
                </button>
            {
                globalstate.loggedIn===true &&
                <button onClick={logOut} className="btn btn-danger"><Link to ="/user/logout">Logout</Link></button>
            }
                        {
                globalstate.loggedIn===false &&
                <button onClick={logIn} className="btn btn-success"> <Link to="/user/login">Login</Link></button>
            }

    </nav> 
    )
}

export default Navigation;