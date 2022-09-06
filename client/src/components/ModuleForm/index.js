import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_MODULE_TO_COURSE } from "../../utils/mutations";
import Auth from "../../utils/auth";
import Button from "react-bootstrap/Button";
import { Form, Modal, Alert } from "react-bootstrap";
import { useLocation, useNavigate, Link } from "react-router-dom";

function ModuleForm(props) {
  const navigate = useNavigate();
  const [module, setModule] = useState({
    courseId: props.course,
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
        variables: { ...module },
      });
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }
    console.log(module);
    setModule({ name: "" });
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
                Something went wrong with your module creation!
              </Alert.Heading>
            </Alert>

            <Form.Group className='m-0'>
              <Form.Label htmlFor='name'>
                Enter a name for the module
              </Form.Label>
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

            <Form.Group className='m-0'>
              <Form.Label htmlFor='name'>
                Enter a description for the module
              </Form.Label>
              <Form.Control
                type='text'
                placeholder='description...'
                name='description'
                onChange={handleInputChange}
                value={module.description}
              />
            </Form.Group>

            <Button
              disabled={!module.name}
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
          You need to be logged in to create a module. Please{" "}
          <span>
            <Link to='/login'>login</Link> or <Link to='/signup'>signup.</Link>
          </span>
        </Modal.Body>
      )}
    </>
  );
}

export default ModuleForm;
