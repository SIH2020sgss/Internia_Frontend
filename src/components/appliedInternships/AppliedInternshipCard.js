import React, { Component } from "react";
// import { Card } from "react-bootstrap";
import "./AppliedInternshipCard.scss";
import { Link } from "react-router-dom";
export default class AppliedInternshipCard extends Component {
  render() {
    return (
      <div className='applied-internships col-xl-12  p-md-3 py-3'>
        <Link to='/internship-details'>
          <div
            class='card applied-internships-container'
            style={{ width: "auto", border: "none" }}>
            <div
              className='card-header applied-internships-container-title'
              style={{ borderBottom: "medium solid royalblue" }}>
              <b
                style={{
                  fontSize: "1.2em",
                  color: "black",
                  // color: "#454344",
                }}
                class='card-title text-justify my-auto'>
                Internship Name
              </b>
            </div>
            <div class='card-body'>
              <h6 class='card-subtitle mb-2 text-muted text-left'>Professor</h6>
              <p
                class='card-text text-muted text-left'
                style={{ fontSize: "" }}>
                <div className='mb-1'>
                  <span className='mr-2 font-weight-bold'>Reqs:</span>
                  <span className='mx-auto'>Flutter</span>
                </div>

                <div className='mb-1'>
                  <span className='mr-2 font-weight-bold'>Duration:</span>
                  <span className='mx-auto'>3 months</span>
                </div>

                <div className='mb-1'>
                  <span className='mr-2 font-weight-bold'>Domains:</span>
                  <span className='mx-auto'>Android Development</span>
                </div>
                <div>
                  <span className='mr-2 font-weight-bold'>Status</span>
                  <span className='mx-auto'> Ongoing</span>
                </div>
              </p>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}
