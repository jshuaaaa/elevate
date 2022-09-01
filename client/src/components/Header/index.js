import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css'
import Auth from '../../utils/auth';
import { motion } from 'framer-motion';


const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="text-dark ">
      <div className="headerC d-flex">
        <Link className="text-dark" to="/">
     
        </Link>
       
        <div className='logAndSign d-flex align-self-end align-items-end
        '>
          {Auth.loggedIn() ? (
            <>
               <motion.a
              initial={{ x: -1400}}
              animate={{x: 0}}
              transition={{ delay: 1.0 , type: 'tween'}} className="btn btn-lg btn-primary m-2" to="/me">
                View My Profile
              </motion.a>
              <motion.button
              initial={{ x: 1400}}
              animate={{x: 0}}
              transition={{ delay: 1.0 , type: 'tween'}}
              className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </motion.button>
            </>
          ) : (
            <>
              <Link to="/login">
              <motion.a
              initial={{ x: 1400}}
              animate={{x: 0}}
              transition={{ delay: 0.9 , type: 'tween'}}
               className="logAndSign align-self-end btn btn-lg btn-light m-2">
                Login
              </motion.a>
              </Link>

              <Link to="/signup">
              <motion.a
              initial={{ x: 1400}}
              animate={{x: 0}}
              transition={{ delay: 1.0 , type: 'tween'}}
                className="logAndSign align-self-end btn btn-lg btn-light m-2">
                Signup
              </motion.a>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
