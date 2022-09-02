import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import Auth from "../../utils/auth";
import { motion } from "framer-motion";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className='bg-info text-dark mb-4 py-3  '>
      <div className='headerC d-flex'>
        <div
          className='logAndSign d-flex align-self-end align-items-end
        '
        >
          {Auth.loggedIn() ? (
            <>
              <div>
                <h2>Welcome back, {Auth.getProfile().data.name}!</h2>
              </div>
              <div>
                <Link to='/courses/add'>
                  <motion.a
                    initial={{ x: -1400 }}
                    animate={{ x: 0 }}
                    transition={{ delay: 1.0, type: "tween" }}
                    className='btn btn-lg btn-primary m-2'
                  >
                    Create course
                  </motion.a>
                </Link>
                <Link to='/me'>
                  <motion.a
                    initial={{ x: -1400 }}
                    animate={{ x: 0 }}
                    transition={{ delay: 1.0, type: "tween" }}
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
              <div>
                <h2>Welcome Guest!</h2>
              </div>
              <div>
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
      </div>
    </header>
  );
};

export default Header;
