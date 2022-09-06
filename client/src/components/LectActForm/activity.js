import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_ACTIVITY_TO_MODULE } from "../../utils/mutations";
import Auth from "../../utils/auth";
import Button from "react-bootstrap/Button";
import { Form, Modal, Alert } from "react-bootstrap";
import { useLocation, useNavigate, Link } from "react-router-dom";

function ActivityForm(props) {
  const navigate = useNavigate();
  const [activity, setActivity] = useState({
    moduleId: props.module,
  });

  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const [addActivityToModule, { error }] = useMutation(ADD_ACTIVITY_TO_MODULE);

  if (error) return `Error: ${error}`;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = addActivityToModule({
        variables: { ...activity },
      });
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }
    console.log(activity);
    setActivity({ name: "" });
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
                Something went wrong with your activity creation!
              </Alert.Heading>
            </Alert>

            <Form.Group className='m-0'>
              <Form.Label htmlFor='name'>
                Enter a name for the activity
              </Form.Label>
              <Form.Control
                type='text'
                placeholder='Name'
                name='name'
                onChange={handleInputChange}
                value={activity.name}
                required
              />
              <Form.Control.Feedback type='invalid'>
                Activity name is required!
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className='m-0'>
              <Form.Label htmlFor='description'>
                Enter a description for the activity
              </Form.Label>
              <Form.Control
                type='text'
                placeholder='Description'
                name='description'
                onChange={handleInputChange}
                value={activity.description}
              />
            </Form.Group>

            <Button
              disabled={!activity.name}
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
          You need to be logged in to create an activity. Please{" "}
          <span>
            <Link to='/login'>login</Link> or <Link to='/signup'>signup.</Link>
          </span>
        </Modal.Body>
      )}
    </>
  );
}

export default ActivityForm;
