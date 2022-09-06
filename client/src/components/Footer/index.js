import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/footer.css";
const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (

    <footer className="w-100 mt-auto text-dark p-4 logFoot ">
      <div className="container text-center mb-5">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
