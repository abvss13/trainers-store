import React from 'react'
import '../App.css'
import {NavLink} from 'react-router-dom'
const Header =()=>{
    return(
            <div className="header-main">
                <ul className='head-con'>

                <li className="header-list" ><NavLink  className="lnk" activeclassname="active" exact to="/">Home</NavLink></li>
                <li className="header-list" ><NavLink  className="lnk" activeclassname="active" to="/Men">Men</NavLink></li>
                <li className="header-list" ><NavLink  className="lnk" activeclassname="active" to="/Women">Women</NavLink></li>
                <li className="header-list" ><NavLink  className="lnk" activeclassname="active" to="/Slippers">Slippers</NavLink></li>
                {/* <li className="header-list" ><NavLink  className="lnk" activeclassname="active" to="/Login">Login</NavLink></li> */}
                <li className="header-list" ><NavLink  className="lnk" activeclassname="active" to="/Register">Register</NavLink></li>
                </ul>
            </div>
    )
}

export default Header