import React from "react";
import Modal from "react-bootstrap/Modal";
import LectureForm from "../LectActForm/lecture";

function LectureModal(props) {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Create new Lecture</Modal.Title>
      </Modal.Header>

      {/* Adding a lecture form component */}
      <LectureForm module={props.module} />
    </Modal>
  );
}

export default LectureModal;
