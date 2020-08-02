import React, { Component } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";

class Floatedinternship extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='col-12-'>
        <div className='card w-75 mx-auto'>
          <div className='card-body'>
            <h5 className='card-title'>WEB DEVELOPMENT</h5>
            <h6 className='card-subtitle mb-2 text-muted'>
              Internship Subtitle-description
            </h6>
            <div className='card-text'>
              <div className='row py-4'>
                <div className='col-md-3'>
                  <i className='fa fa-calendar' /> Start Date <br /> Immediately
                </div>
                <div className='col-md-3'>
                  <i className='fa fa-clock-o' /> Duration <br /> 4 Months
                </div>
                <div className='col-md-3'>
                  <i className='fa fa-money' /> Stipend <br /> NA
                </div>
                <div className='col-md-3'>
                  <i className='fa fa-hourglass-start' /> Apply By <br /> 30'Jul
                  2020
                </div>
              </div>
              <div className='float-right mr-3'>
                <Link to='/internship-details'>
                  View details <i className='fa fa-chevron-right ' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Floatedinternship;
