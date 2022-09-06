import React from "react";
import "../styles/elevateinfo.css";
const ElevateInfo = () => {
  return (
    <section>

      <div className='logodiv'>
        <h1>ELEVATE</h1>
        <p>
          Here at Elevate we provide users with the opportunity to create a
          variety of courses and interact / join other courses created by
          users{" "}
        </p>


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
    </section>
  );
};

export default ElevateInfo;
