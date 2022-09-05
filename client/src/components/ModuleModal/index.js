import React from "react";
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
      <Modal.Header closeButton className='border-bottom-1'>
        <Modal.Title>Add a module to your course</Modal.Title>
      </Modal.Header>

      {/* Adding a module form component */}
      <ModuleForm course={props.course} />
    </Modal>
  );
}

export default ModuleModal;
