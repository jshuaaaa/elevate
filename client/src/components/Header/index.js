import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import Auth from "../../utils/auth";
import { motion } from "framer-motion";

const logout = (event) => {
  event.preventDefault();
  Auth.logout();
};


class Header extends Component {
  
  constructor(props) {
    super(props)
    
this.state = {
  isLoggedIn: true
}

}

render(){
  if (this.state.isLoggedIn) {
    return (
     
      <header className='text-dark '>
      <div className='headerC d-flex'>
        <Link className='text-dark' to='/'></Link>
        <div className='welcome'>Welcome Back, User!</div>
        <div
          className='logAndSign d-flex align-self-end align-items-end
        '
        >
          {Auth.loggedIn() ? (
            <>
              <Link to='/me'>
                <motion.a
                  initial={{ x: -1400 }}
                  animate={{ x: 0 }}
                  transition={{ delay: 1.0, type: "tween" ,duration: 0.5 }}
                  className='btn btn-lg btn-primary m-2'
                >
                  View My Profile
                </motion.a>
              </Link>
              <motion.button
                initial={{ x: 1400 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.5, type: "tween", duration: 0.5 }}
                className='btn btn-lg btn-light m-2'
                onClick={logout}
              >
                Logout
              </motion.button>
            </>
          ) : (
            <>
              <Link to='/login'>
                <motion.a
                  initial={{ x: 1400 }}
                  animate={{ x: 0 }}
                  transition={{ delay: 0.1, type: "tween", duration: 0.5 }}
                  className='logAndSign align-self-end btn btn-lg btn-light m-2'
                >
                  Login
                </motion.a>
              </Link>

              <Link to='/signup'>
                <motion.a
                  initial={{ x: 1400 }}
                  animate={{ x: 0 }}
                  transition={{ delay: 0.2, type: "tween", duration: 0.5 }}
                  className='logAndSign align-self-end btn btn-lg btn-light m-2'
                >
                  Signup
                </motion.a>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
else {
    return (
      <header className='text-dark '>
      <div className='headerC d-flex'>
        <Link className='text-dark' to='/'></Link>
        <div>Welcome Guest!</div>
        <div
          className='logAndSign d-flex align-self-end align-items-end
        '
        >
          {Auth.loggedIn() ? (
            <>
              <Link to='/me'>
                <motion.a
                  initial={{ x: -1400 }}
                  animate={{ x: 0 }}
                  transition={{ delay: 1.0, type: "tween" ,duration: 0.5 }}
                  className='btn btn-lg btn-primary m-2'
                >
                  View My Profile
                </motion.a>
              </Link>
              <motion.button
                initial={{ x: 1400 }}
                animate={{ x: 0 }}
                transition={{ delay: 0.5, type: "tween", duration: 0.5 }}
                className='btn btn-lg btn-light m-2'
                onClick={logout}
              >
                Logout
              </motion.button>
            </>
          ) : (
            <>
              <Link to='/login'>
                <motion.a
                  initial={{ x: 1400 }}
                  animate={{ x: 0 }}
                  transition={{ delay: 0.1, type: "tween", duration: 0.5 }}
                  className='logAndSign align-self-end btn btn-lg btn-light m-2'
                >
                  Login
                </motion.a>
              </Link>

              <Link to='/signup'>
                <motion.a
                  initial={{ x: 1400 }}
                  animate={{ x: 0 }}
                  transition={{ delay: 0.2, type: "tween", duration: 0.5 }}
                  className='logAndSign align-self-end btn btn-lg btn-light m-2'
                >
                  Signup
                </motion.a>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
};

    
  }

    
export default Header;
