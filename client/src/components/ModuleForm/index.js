import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_MODULE_TO_COURSE } from "../../utils/mutations";
import Auth from "../../utils/auth";
import Button from "react-bootstrap/Button";
import { Form, Modal, Alert, Col, InputGroup } from "react-bootstrap";

function ModuleForm(props) {
  const [module, setModule] = useState({
    courseId: "",
    name: "",
  });

  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [addModuleToCourse, { error }] = useMutation(ADD_MODULE_TO_COURSE);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setModule({ ...module, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = addModuleToCourse({
        variables: { module },
      });
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }
    console.log(module);

    setModule({ courseId: "", name: "" });
  };

  return (
    <Modal.Body {...props}>
      {Auth.loggedIn() ? (
        <Form
          className='form-control form-input '
          noValidate
          validated={validated}
          onSubmit={handleFormSubmit}
        >
          {/* show alert if server response is bad */}
          <Alert
            dismissible
            onClose={() => setShowAlert(false)}
            show={showAlert}
            variant='danger'
          >
            <Alert.Heading>
              Something went wrong with your module creation!
            </Alert.Heading>
          </Alert>

          <Form.Group>
            <Form.Label htmlFor='courseId'>Course ID:</Form.Label>
            <Form.Control
              type='text'
              placeholder={props.course}
              name='courseId'
              onChange={handleInputChange}
              value={props.course}
              required
            />
            <Form.Control.Feedback type='invalid'>
              Course name is required!
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor='name'>Module Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Name'
              name='name'
              onChange={handleInputChange}
              value={module.name}
              required
            />
            <Form.Control.Feedback type='invalid'>
              Course name is required!
            </Form.Control.Feedback>
          </Form.Group>
          <br />
          <Button
            className='btn btn-warning'
            disabled={!(module.name && module.courseId)}
            type='submit'
            variant='success'
          >
            Submit
          </Button>
        </Form>
      ) : (
        <p>
          You need to be logged in to create a module. Please{" "}
          <Link to='/login'>login</Link> or <Link to='/signup'>signup.</Link>
        </p>
      )}
    </Modal.Body>
  );
}

export default ModuleForm;
