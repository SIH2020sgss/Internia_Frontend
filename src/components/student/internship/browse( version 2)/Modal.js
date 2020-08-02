import React from "react";
import Filter from "./Filter";
import { Modal, Button } from "react-bootstrap";
export default class FilterModal extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }

  render() {
    return (
      <div className='container'>
        <Modal
          size='md'
          centered
          backdrop
          show={this.props.show}
          onHide={this.props.ModalClosed}>
          <Modal.Header closeButton className='border-0' />
          <Modal.Body>
            <Filter />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
