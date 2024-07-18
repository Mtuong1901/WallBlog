"use client"
import React, { useState } from 'react';
import '../../../../public/bootstrap/css/bootstrap.min.css';

export default function Leftsidebar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  
    return (
      <div className="left-sidebar ">
        <h1 className="logo" align="center">WALLBLOG</h1>
        <div className="vertical-nav">
          <nav>
            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">EXPLORE</a>
              </li>
              <li className={`nav-item dropdown ${isDropdownOpen ? 'active' : ''}`}>
                {/* Dropdown cho mục Account */}
                <a className="nav-link" onClick={toggleDropdown} aria-expanded={isDropdownOpen ? "true" : "false"}>ACCOUNT <i className="down fa-solid fa-chevron-down "></i></a>
                <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
                  <li><a href="#">LIKE 0</a></li>
                  <li><a href="#">FOLLOW</a></li>
                  <li><a href="#">Logout</a></li>
                  <li className="divider"></li>
                  <li className='nav-item d-flex flex-column align-items-center'>
                    <img className='avt-user' src='https://i.pinimg.com/736x/08/f7/4b/08f74b917aa452add50b02a12ad7216c.jpg'></img>
                    <a href="#">Username</a>
                  </li>
                </ul>
              </li>
              <li className={`nav-item ${isDropdownOpen ? 'hidden' : ''}`}>
                <a className="nav-link" href="#">Contact</a>
              </li>
              <li className="nav-item">
                <button className='new-btn btn btn-danger w-100 m-auto mt-3'>New</button>
              </li>
            
             
            </ul>
          </nav>
        </div>
      </div>
    );
  }
