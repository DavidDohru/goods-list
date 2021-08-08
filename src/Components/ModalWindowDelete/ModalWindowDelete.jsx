import React  from 'react';
import { Button, Modal } from 'react-bootstrap';
import { modalWondowPropTypes } from  './modalWindowPropTypes';

export const ModalWindowDelete = ({
  smShow,
  setSmShow,
  removeComments,
  removeElement,
  idForRemove,
  setIdForRemove,
  users,
}) => {
  return(
    <Modal
      size="sm"
      show={smShow}
      onHide={() => setSmShow(false)}
    >
      <Modal.Header>
      <Modal.Title id="example-modal-sizes-title-sm">
        Are you sure want to delete it ?
        (reload the page after deleting)
      </Modal.Title>
    </Modal.Header>
    <Modal.Body className="button__form-container">
      <Button
        variant="danger"
        onClick={() => {
        removeElement(idForRemove);
        setIdForRemove(0);
        removeComments(undefined,users.id); 
        setSmShow(false);
        }}
      >
        Submit
      </Button>
      <Button onClick={() => setSmShow(false)}>Cancel</Button>
    </Modal.Body>
  </Modal>
  );
};

ModalWindowDelete.propTypes = modalWondowPropTypes;