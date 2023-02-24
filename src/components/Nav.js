import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
const Nav = () => {
     let location = useLocation();
     console.log(location);
     function navlinkstyle({ isActive }) {
          if (isActive) {
               return (
                    {
                         color: "grey",
                         textDecoration: "none",
                         fontWeight: "500",
                         fontSize: "18px",
                    }
               )
          }
          else {
               return (
                    {
                         color: "#551A8b",
                         textDecoration: "underline",
                         fontWeight: "normal",
                         fontSize: "normal"
                    }
               )
          }
     }
     return (
          <>
               <ul className='nav'>
                    <NavLink to="/home" style={navlinkstyle}>
                         <li>HOME</li>
                    </NavLink>
                    <NavLink to="/about" style={navlinkstyle} >
                         <li>ABOUT</li>
                    </NavLink>
                    <NavLink to="/contact" style={navlinkstyle}>
                         <li>CONTACT</li>
                    </NavLink>
                    <NavLink to="/product" style={navlinkstyle} state={{ key: "abc" }}>
                         <li>Product</li>
                    </NavLink>


               </ul>
          </>

     )
}

export default Nav