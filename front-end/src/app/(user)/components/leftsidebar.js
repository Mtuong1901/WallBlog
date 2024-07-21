"use client"
import React, { useState } from 'react';
import '../../../../public/bootstrap/css/bootstrap.min.css';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import Authenticated from './authencated';

export default function Leftsidebar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const authenticated = useSelector((state) => state.auth.authenticated);
    const user = useSelector((state) => state.auth.user);
    const dispatch = useDispatch();
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const handleLogout = () => {
        dispatch(logout());
        // Redirect hoặc thêm logic khác khi logout
      };
    return (
        <div className="left-sidebar">
            <h1 className="logo" align="center">WALLBLOG</h1>
            <div className="vertical-nav">
                <nav>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/explore">EXPLORE</Link>
                        </li>
                        <Authenticated/>
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
