import React, { Component } from "react";
import Rating from "react-rating";

/* 
Performance scale 1 to 5
Timely Reporting
*/

class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
    };
  }

  handleChange = (event) => {
    let { target } = event;
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className='container'>
        <h3 classname='py-3 text-center text-secondary'>FEEDBACK </h3>
        <div className='d-flex flex-column bg-'>
          <div className='my-2'>
            <div className='card shadow-sm border-0'>
              <div className='card-header border-0'>
                <span>Student</span>
              </div>
              <div className='card-body'>
                <form autoComplete={"off"} onSubmit={this.handleSubmit}>
                  <div className='form-group'>
                    <label htmlFor='performance'>Performance</label>
                    <input type='range' name='performance' id='performance' />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='timely_submission'>Timely submission</label>
                    <input
                      type='range'
                      name='timely_submission'
                      id='timely_submission'
                    />
                    <Rating
                      emptySymbol='fa fa-star-o fa-2x'
                      fullSymbol='fa fa-star fa-2x'
                      initialRating={this.state.rating}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className='my-2'>
            <div className='card shadow-sm border-0'>
              <div className='card-header border-0'>
                <span>Student</span>
              </div>
              <form autoComplete={"off"} onSubmit={this.handleSubmit}>
                <div className='form-group'>
                  <label htmlFor='performance'>Performance</label>
                  <input type='range' name='performance' id='performance' />
                </div>
                <div className='form-group'>
                  <label htmlFor='timely_submission'>Timely submission</label>
                  <input
                    type='range'
                    name='timely_submission'
                    id='timely_submission'
                  />
                </div>
              </form>
            </div>
          </div>
          <div className='my-2'>
            <div className='card shadow-sm border-0'>
              <div className='card-header border-0'>
                <span>Student</span>
              </div>
              <form autoComplete={"off"} onSubmit={this.handleSubmit}>
                <div className='form-group'>
                  <label htmlFor='performance'>Performance</label>
                  <input type='range' name='performance' id='performance' />
                </div>
                <div className='form-group'>
                  <label htmlFor='timely_submission'>Timely submission</label>
                  <input
                    type='range'
                    name='timely_submission'
                    id='timely_submission'
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Feedback;
