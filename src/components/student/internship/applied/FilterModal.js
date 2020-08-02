import React from "react";
import Filter from "./Filter";
import { Modal } from "react-bootstrap";
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
          onHide={this.props.FilterModalClosed}>
          <Modal.Header closeButton className='border-0' />
          <style>{/* close {
              outline:none;
            } */}</style>
          <Modal.Body>
            <Filter />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
