import React, { useContext } from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export const Navbar = () => {
   const auth = useContext(AuthContext)
   const history = useHistory()

    const logoutHandler = (event) => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }

    return (
      <nav>
        <div className="nav-wrapper blue darken-1" style={{padding: '0 2rem'}}>
          <a href="#" className="brand-logo">
            SLCR
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <NavLink to="/create">Add Link</NavLink>
            </li>

            <li>
              <NavLink to="/links">My Links</NavLink>
            </li>

            <li>
              <a href="/links" onClick={logoutHandler}>Log out</a>
            </li>


            
          </ul>
        </div>
      </nav>
    );
}