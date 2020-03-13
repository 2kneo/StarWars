import React from "react";
import { Modal, Button } from "react-bootstrap";

const Error = props => {
  return (
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>Error</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>{props.value}</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary">Close</Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
};

export default Error;
