import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/footer.css";
const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (

    <footer className="w-100 mt-auto text-dark p-4 logFoot ">
      <div className="container footCons">
        {location.pathname !== '/' && (
          <button
            className="btn "
            onClick={() => navigate(-1)}
          >

            &larr; Go Back
          </button>
        )}
        <div className="pwalogo">
        <img src={require('../images/pwa.png')} />
        <div className='git-icons'>
          <a href='https://github.com/rheangocle' target='_blank'>
            <img
              src='https://cdn-icons-png.flaticon.com/512/25/25231.png'
              width={50}
            />
          </a>

          <a href='https://github.com/alxsaunders' target='_blank'>
            <img
              src='https://cdn-icons-png.flaticon.com/512/25/25231.png'
              width={50}
            />
          </a>
          <a href='https://github.com/jshuaaaa' target='_blank'>
            <img
              src='https://cdn-icons-png.flaticon.com/512/25/25231.png'
              width={50}
            />
          </a>
          <a href='https://github.com/KRivera2394' target='_blank'>
            <img
              src='https://cdn-icons-png.flaticon.com/512/25/25231.png'
              width={50}
            />
          </a>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
