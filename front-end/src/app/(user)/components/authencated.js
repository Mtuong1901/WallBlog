"use client"; // Đánh dấu đây là Client Component

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Để sử dụng router.push()

export default function Authenticated() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const authenticated = useSelector((state) => state.auth.authenticated);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const router = useRouter(); // Khai báo router

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('token');
    router.push('/login'); 
  };

  return (
    <>
      {!authenticated && (
        <li className="nav-item">
          <Link className="nav-link" href="/login">LOGIN</Link>
        </li>
      )}
      {authenticated && (
        <li className={`nav-item dropdown ${isDropdownOpen ? 'active' : ''}`}>
          <a 
            className="nav-link" 
            onClick={toggleDropdown} 
            aria-expanded={isDropdownOpen ? "true" : "false"}
          >
            ACCOUNT <i className="down fa-solid fa-chevron-down"></i>
          </a>
          <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
            <li><a href="#">LIKE 0</a></li>
            <li><a href="#">FOLLOW</a></li>
            <li><a href="#" onClick={handleLogout}>Logout</a></li>
            <li className="divider"></li>
            <li className='nav-item d-flex flex-column align-items-center'>
              <img 
                className='user-image' 
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${user?.image}`} 
                alt="User Avatar"
              />
              <a href="#" className='username'>{user?.username}</a>
            </li>
          </ul>
        </li>
      )}
    </>
  );
}
