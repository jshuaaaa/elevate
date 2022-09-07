import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import Auth from "../../utils/auth";
import { motion } from "framer-motion";
import homeicon from "../images/homeicon.png";

Object.defineProperty(String.prototype, "capitalize", {
  value: function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
  },
  enumerable: false,
});

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className="bg-info text-dark navH">
      <div className="headerC d-flex">
        {Auth.loggedIn() ? (
          <>
            <div>
              <motion.h2
              className="headerName"
                initial={{ x: -500 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.5, type: "tween" }}
              >
                Welcome Back, {Auth.getProfile().data.name.capitalize()}!
              </motion.h2>
            </div>
            <Link to="/">
              <motion.div
                initial={{ y: -500 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.1, duration: 1.1, type: "tween" }}
                className="homeicon"
              >
                <img src={homeicon} width={70} />
              </motion.div>
            </Link>
            <div className="loginbtn">
              <Link to="/courses/add">
                <motion.a
                  initial={{ x: 1400 }}
                  animate={{ x: 0 }}
                  transition={{ delay: 0.5, type: "tween" }}
                  className="btn btn-lg btn-primary m-2"
                >
                  Create course
                </motion.a>
              </Link>
              <Link to="/me">
                <motion.a
                  initial={{ x: 1400 }}
                  animate={{ x: 0 }}
                  transition={{ delay: 0.7, type: "tween" }}
                  className="btn btn-lg btn-primary m-2"
                >
                  View My Profile
                </motion.a>
              </Link>
              <motion.button
                initial={{ x: 1400 }}
                animate={{ x: 0 }}
                transition={{ delay: 1.0, type: "tween" }}
                className="btn btn-lg btn-light m-2"
                onClick={logout}
              >
                Logout
              </motion.button>
            </div>
          </>
        ) : (
          <>
            <div className="headertext">
              <motion.h2
              className="headerName"
                initial={{ x: -500 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.5, type: "tween" }}
              >
                Welcome Guest!
              </motion.h2>
            </div>
            <Link to="/">
            <motion.div
                initial={{ y: -500 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.1, duration: 1.1, type: "tween" }} className="homeicon">
                <img src={homeicon} width={70} />
              </motion.div>
            </Link>
            <div className="loginbtn">
              <Link to="/login">
                <motion.a
                  initial={{ x: 800 }}
                  animate={{ x: 0 }}
                  transition={{ delay: 0.6, type: "tween" }}
                  className="logAndSign align-self-end btn btn-lg btn-primary m-2"
                >
                  Login
                </motion.a>
              </Link>

              <Link to="/signup">
                <motion.a
                  initial={{ x: 800 }}
                  animate={{ x: 0 }}
                  transition={{ delay: 0.7, type: "tween", duration: 0.6 }}
                  className="logAndSign align-self-end btn btn-lg btn-light m-2"
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
