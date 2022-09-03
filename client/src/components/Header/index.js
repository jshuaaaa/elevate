import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import Auth from "../../utils/auth";
import { motion } from "framer-motion";
import homeicon from "../images/homeicon.png";

Object.defineProperty(String.prototype, 'capitalize', {
  value: function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
  },
  enumerable: false
});

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className='bg-info text-dark  '>
      <div className='headerC d-flex'>
       
          {Auth.loggedIn() ? (
            <>
              <div>
                <h2>Welcome Back, {Auth.getProfile().data.name.capitalize()}!</h2>
              </div>
              <Link to="/" >
                <div className="homeicon"><img src={homeicon} width={70} />
                </div>
                </Link>
                <div className="loginbtn">
                <Link to='/courses/add'>
                  <motion.a
                    initial={{ x: 1400 }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0.5, type: "tween" }}
                    className='btn btn-lg btn-primary m-2'
                  >
                    Create course
                  </motion.a>
                </Link>
                <Link to='/me'>
                  <motion.a
                    initial={{ x: 1400 }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0.7, type: "tween" }}
                    className='btn btn-lg btn-primary m-2'
                  >
                    View My Profile
                  </motion.a>
                </Link>
                <motion.button
                   initial={{ x: 1400 }}
                   animate={{ x: 0 }}
                   transition={{ delay: 1.0, type: "tween" }}
                  className='btn btn-lg btn-light m-2'
                  onClick={logout}
                >
                  Logout
                </motion.button>
              </div>
            </>
           
          ) : (
            <>
              <div className="headertext">
                <h2>Welcome Guest!</h2>
                
              </div>
              <Link to="/" >
                <div className="homeicon"><img src={homeicon} width={70} />
                </div>
                </Link>
              <div className="loginbtn">
                <Link to='/login'>
                  <motion.a
                    initial={{ x: 1400 }}
                    animate={{ x: 0 }}
                    transition={{ delay: 0.9, type: "tween" }}
                    className='logAndSign align-self-end btn btn-lg btn-primary m-2'
                  >
                    Login
                  </motion.a>
                </Link>

                <Link to='/signup'>
                  <motion.a
                    initial={{ x: 1400 }}
                    animate={{ x: 0 }}
                    transition={{ delay: 1.0, type: "tween" }}
                    className='logAndSign align-self-end btn btn-lg btn-light m-2'
                  >
                    Signup
                  </motion.a>
                </Link>
              </div>
            </>
          )}
        </div>
      
    </header>
  );
};

export default Header;
