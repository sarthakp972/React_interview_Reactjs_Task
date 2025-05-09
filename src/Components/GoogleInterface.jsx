// import React, { useState } from 'react'

import { Link } from "react-router-dom";
import  google  from "../assets/Google_icon.png"
import  search_icon  from "../assets/Search_icon.png"
import "../Css/Google_interface.css"
import { FaSearch } from 'react-icons/fa';
import { MdApps } from 'react-icons/md';
// import "../Css/Google_interface.css"

function GoogleInterface() {
   
  return (
    <div className='Google_interface'>
            <nav className='navbar'>
                    <ul className='links'>
                        <li ><Link to={"/helo"}>Home</Link> </li>
                        <li>images</li>
                        <li> <MdApps size={20} style={{ color:"gray", cursor: 'pointer' }} /></li>
                        <li>Profile</li>
                    </ul>
            </nav>
                <div  className='img_input'>
        <div>
   <img src={ google } alt=""  />
   </div>
     <div className='inputbox'>
 <input type="text" />
 <FaSearch style={{color:"gray"}} className='search' />
     </div>
   </div>
    
    </div>
  )
}

export default GoogleInterface