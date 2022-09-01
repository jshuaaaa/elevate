import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";

import { ADD_COURSE } from "../../utils/mutations";

import Auth from "../../utils/auth";

const categories = [
  {
    name: "Marketing",
  },
  {
    name: "Science",
  },
  {
    name: "Design",
  },
  {
    name: "Business",
  },
  {
    name: "Music",
  },
  {
    name: "Art",
  },
  {
    name: "Software",
  },
  {
    name: "Other",
  },
];
const CourseForm = ({ profileId }) => {
  const [course, setCourse] = useState("");

  const [addCourse, { error }] = useMutation(ADD_COURSE);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = await addCourse({
        variables: { profileId, course },
      });

      setCourse("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Add a new course below</h1>

      {Auth.loggedIn() ? (
        <form
          className='flex-row justify-center justify-space-between-md align-center'
          onSubmit={handleFormSubmit}
        >
          <div className='col-12 col-lg-9'>
            <input
              placeholder='New course name...'
              type='text'
              value={course}
              className='form-input w-100'
              onChange={(event) => setCourse(event.target.value)}
            />
            <select
              onChange={(e) => setNewStudentMajor(e.target.value)}
              value={newStudentMajor}
            >
              <option>Choose major...</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <input
              placeholder='$'
              type='number'
              value={course}
              className='form-input w-100'
              onChange={(event) => setCourse(event.target.value)}
            />
          </div>

          <div className='col-12 col-lg-3'>
            <button className='btn btn-info btn-block py-3' type='submit'>
              Endorse Course
            </button>
          </div>
          {error && (
            <div className='col-12 my-3 bg-danger text-white p-3'>
              {error.message}
            </div>
          )}
        </form>
      ) : (
        <p>
          You need to be logged in to endorse courses. Please{" "}
          <Link to='/login'>login</Link> or <Link to='/signup'>signup.</Link>
        </p>
      )}
    </div>
  );
};

export default CourseForm;
