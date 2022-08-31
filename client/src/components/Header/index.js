import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css'
import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-info text-dark mb-4 py-3  ">
      <div className="headerC d-flex">
        <Link className="text-dark" to="/">
          <h1 className="m-0" style={{ fontSize: '3rem' }}>
            Elevate

        
          </h1>
          <p className="m-0" style={{ fontSize: '1.75rem', fontWeight: '700' }}>
          Reacher new heights!
        </p>
        </Link>
        
        <div className='logAndSign d-flex align-self-end align-items-end
        flex-column'>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-primary m-2" to="/me">
                View My Profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="logAndSign align-self-end btn btn-lg btn-primary m-2" to="/login">
                Login
              </Link>
              <Link className="logAndSign align-self-end btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
