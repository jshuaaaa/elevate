import React from "react";
import Modal from "react-bootstrap/Modal";
import ActivityForm from "../LectActForm/activity";

function ActivityModal(props) {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Create new Activity</Modal.Title>
      </Modal.Header>

      {/* Adding a module form component */}
      <ActivityForm module={props.module} />
    </Modal>
  );
}

export default ActivityModal;
