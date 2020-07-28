import React from "react";
import app from "../Firebase";
import { Link } from "react-router-dom";

const Header = () => {
  const signout = () => app.auth().signOut();
  return (
    <div className='Header_F'>
      <header>
        <div className='navbar'>
          <div className='navbar-brand'>
            <h3>
              <Link to='/'>Internia</Link>
            </h3>
          </div>
          <div className='dropdown'>
            <img
              src='/assets/images/user.jpeg'
              className='dropdown-toggle rounded-circle shadow-sm border-0'
              alt='user__avatar'
              data-toggle='dropdown'
              aria-expanded='false'
              style={{ width: "3em", height: "3em" }}
            />
            <ul className='dropdown-menu dropdown-menu-right shadow-sm border-0 py-1'>
              <li className='dropdown-item'>
                <Link to='/create-internship' className='text-decoration-none'>
                  Create Internship
                </Link>
              </li>
              <li className='dropdown-item'>
                <Link to='/feedback' className='text-decoration-none'>
                  Feedback
                </Link>
              </li>
              <li className='dropdown-item'>Profile</li>
              <li className='dropdown-item' onClick={signout}>
                Sign out
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
