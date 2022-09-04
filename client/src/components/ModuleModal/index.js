import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_MODULE_TO_COURSE } from "../../utils/mutations";
import Auth from "../../utils/auth";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ModuleForm from "../ModuleForm";

function ModuleModal(props) {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Add a module to your course</Modal.Title>
      </Modal.Header>

      {/* Adding a module form component */}
      <ModuleForm course={props.course} />

      {/* <Modal.Footer>
        <Button variant='primary' onClick={props.onHide}>
          Save Changes
        </Button>
      </Modal.Footer> */}
    </Modal>
  );
}

export default ModuleModal;
