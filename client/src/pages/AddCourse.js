import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { Form, Button, Alert, Col } from "react-bootstrap";
import { ADD_COURSE } from "../utils/mutations";
import { QUERY_COURSES, QUERY_ME } from "../utils/queries";
import Auth from "../utils/auth";

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
  const [course, setCourseFormData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
  });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const [addCourse, { error }] = useMutation(
    ADD_COURSE
    // {
    // update(cache, { data: { addCourse } }) {
    //   try {
    //     const { courses } = cache.readQuery({ query: QUERY_COURSES });

    //     cache.writeQuery({
    //       query: QUERY_COURSES,
    //       data: { courses: [addCourse, ...courses] },
    //     });
    //   } catch (e) {
    //     console.error(e);
    //   }

    //   // update me object's cache
    //   const { me } = cache.readQuery({ query: QUERY_ME });
    //   cache.writeQuery({
    //     query: QUERY_ME,
    //     data: { me: { ...me, courses: [...me.courses, addCourse] } },
    //   });
    // },
    // }
  );

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCourseFormData({ ...course, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await addCourse({
        variables: { ...course },
      });

      // const { token, user } = await response.json();
      // Auth.login(data.createUser.token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setCourseFormData({
      name: "",
      description: "",
      category: "",
      price: "",
    });

    // try {
    //   const { data } = await addCourse({
    //     variables: { course },
    //   });
    //   console.log(data);

    //   setCourse("");
    // } catch (err) {
    //   console.error(err);
    // }
  };

  return (
    <div className='p-5'>
      <h1>Add a new course below</h1>

      {Auth.loggedIn() ? (
        <Form
          className='flex-row justify-center justify-space-between-md align-center'
          noValidate
          validated={validated}
          onSubmit={handleFormSubmit}
        >
          <Alert
            dismissible
            onClose={() => setShowAlert(false)}
            show={showAlert}
            variant='danger'
          >
            Something went wrong with your course creation!
          </Alert>

          <Form.Group>
            <Form.Label htmlFor='name'>Course Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Name'
              name='name'
              onChange={handleInputChange}
              value={course.name}
              required
            />
            <Form.Control.Feedback type='invalid'>
              Course name is required!
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor='description'>Description</Form.Label>
            <Form.Control
              type='text'
              componentClass='textarea'
              placeholder='Description for your course'
              name='description'
              as='textarea'
              onChange={handleInputChange}
              value={course.description}
              required
            />
            <Form.Control.Feedback type='invalid'>
              A description is required!
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor='Price'>Price</Form.Label>
            <Form.Control
              type='text'
              placeholder='Set a price'
              name='price'
              onChange={handleInputChange}
              value={course.price}
              required
            />
            <Form.Control.Feedback type='invalid'>
              Price can be 0. A price is required!
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor='Select'>Select</Form.Label>
            <Form.Control
              name='category'
              as='select'
              onChange={handleInputChange}
              defaultValue={course.category}
              // value={course.category}
              // requiredcomponentClass='select'
              placeholder='Category'
            >
              <option value='other'>...</option>
              <option value='Music'>Music</option>
              <option value='Business'>Business</option>
            </Form.Control>
          </Form.Group>

          <Button
            className='btn btn-info btn-block py-1'
            disabled={
              !(
                course.name &&
                course.description &&
                course.price &&
                course.category
              )
            }
            type='submit'
            variant='success'
          >
            Submit
          </Button>
        </Form>
      ) : (
        <p>
          You need to be logged in to create a course. Please{" "}
          <Link to='/login'>login</Link> or <Link to='/signup'>signup.</Link>
        </p>
      )}
    </div>
  );
};

export default CourseForm;

{
  /* <select
              onChange={(e) => setCategory(e.target.value)}
              value={category}
            >
              <option>Choose major...</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select> */
}
