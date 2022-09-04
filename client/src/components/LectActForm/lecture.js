import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_LECTURE_TO_MODULE } from "../../utils/mutations";
import Auth from "../../utils/auth";
import Button from "react-bootstrap/Button";
import { Form, Modal, Alert } from "react-bootstrap";
import { useLocation, useNavigate, Link } from "react-router-dom";

function LectureForm(props) {
  const navigate = useNavigate();
  const [lecture, setLecture] = useState({
    moduleId: props.module,
  });

  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [addLectureToModule, { error }] = useMutation(ADD_LECTURE_TO_MODULE);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLecture({ ...lecture, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = addLectureToModule({
        variables: { ...lecture },
      });
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }
    console.log(lecture);
    setLecture({ name: "" });
    window.location.reload();
  };

  return (
    <>
      {Auth.loggedIn() ? (
        <Modal.Body {...props}>
          <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
            {/* show alert if server response is bad */}
            <Alert
              dismissible
              onClose={() => setShowAlert(false)}
              show={showAlert}
              variant='danger'
            >
              <Alert.Heading>
                Something went wrong with your lecture creation!
              </Alert.Heading>
            </Alert>

            <Form.Group className='m-0'>
              <Form.Label htmlFor='name'>
                Enter a name for the lecture
              </Form.Label>
              <Form.Control
                type='text'
                placeholder='Name'
                name='name'
                onChange={handleInputChange}
                value={lecture.name}
                required
              />
              <Form.Control.Feedback type='invalid'>
                Lecture name is required!
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className='m-0'>
              <Form.Label htmlFor='url'>URL for the lecture</Form.Label>
              <Form.Control
                type='url'
                placeholder='https://'
                name='url'
                onChange={handleInputChange}
                value={lecture.url}
                required
              />
              <Form.Control.Feedback type='invalid'>
                Lecture url is required!
              </Form.Control.Feedback>
            </Form.Group>

            <Button
              disabled={!(lecture.name && lecture.url)}
              type='submit'
              variant='warning'
              onSubmit={props.onSubmit}
            >
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
      ) : (
        <Modal.Body>
          You need to be logged in to create a lecture. Please{" "}
          <span>
            <Link to='/login'>login</Link> or <Link to='/signup'>signup.</Link>
          </span>
        </Modal.Body>
      )}
    </>
  );
}

export default LectureForm;
