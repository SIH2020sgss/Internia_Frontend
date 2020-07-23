import React from "react";
import "./Profile.scss";
import { Modal, Button, Row, Col } from "react-bootstrap";
class ProfileModal extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Modal
          show={this.props.profileState}
          onHide={this.props.profileStateToggler}
          className="pmodal"
          backdrop
          centered
        >
          <Modal.Header className="pheader">
            <Modal.Title className="ptitle">Profile</Modal.Title>
            <img
              src="/assets/images/user.jpeg"
              alt="UserAvatar"
              data-toggle="dropdown"
              id="dropdownMenuButton"
              className="rounded-circle bg-white"
              width={60}
              height={60}
              style={{ cursor: "pointer", border: "none" }}
            />
          </Modal.Header>
          <Modal.Body className="pbody">
            <Row>
              <Col xs={10}>Name: FN LN</Col>
              <Col />
            </Row>
            <Row>
              <Col xs={10}>Email: student@somaiya.edu</Col>
              <Col />
            </Row>
            <Row>
              <Col xs={4}>Branch: IT</Col>
              <Col />
              <Col xs={4}>Div: A</Col>
              <Col />
            </Row>
            <Row>
              <Col xs={5}>Year: Third</Col>
              <Col />
              <Col xs={6}>Credits: 500/500</Col>
              <Col />
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.props.profileStateToggler}>
              Change Password
            </Button>
            <Button variant="primary" onClick={this.props.profileStateToggler}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ProfileModal;
