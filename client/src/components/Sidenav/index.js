import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import '../styles/sidenav.css'
import '../styles/header.css'

import { AnimatePresence, motion, useCycle } from "framer-motion";


const links = [
    { name: "Course 1", to: "#", id: 1 },
    { name: "Course 2", to: "#", id: 2 },
    { name: "Course 3", to: "#", id: 3 },
    { name: "Course 4", to: "#", id: 4 }
  ];
  
  const itemVariants = {
    closed: {
      opacity: 0
    },
    open: { opacity: 1 }
  };
  
  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1
      }
    },
    open: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1
      }
    }
  };

const SideNav = () => {
    const logout = (event) => {
      event.preventDefault();
      Auth.logout();
    };
    const [open, cycleOpen] = useCycle(false, true);
    return (

<main className='sideNavCont'>
<AnimatePresence>
{open && (
  <motion.aside
    initial={{ width: 10 }}
    animate={{
      width: 300
    }}
    exit={{
      width: 0,
      transition: { delay: 0.7, duration: 0.3 }
    }}
  >
    <motion.div
      className="container navList"
      initial="closed"
      animate="open"
      exit="closed"
      variants={sideVariants}
    >
      {links.map(({ name, to, id }) => (
        <motion.a
          key={id}
          href={to}
          whileHover={{ scale: 1.1 }}
          variants={itemVariants}
         
        >
          {name}
        </motion.a>
      ))}
    </motion.div>
  </motion.aside>
)}
</AnimatePresence>
<div className="btn-container">
<button onClick={cycleOpen}>{open ? "Close" : "Open"}</button>
</div>
</main>
    );
      }

  

      export default SideNav;