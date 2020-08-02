import React from "react";
import "./Filter.scss";
import $ from "jquery";
//?
// import Multiselect from "react-bootstrap-multiselect";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// datePicker :  https://www.npmjs.com/package/react-datepicker
// multiselect: http://davidstutz.de/bootstrap-multiselect/

const domains = [
  { value: "Web Development" },
  { value: "Android Development" },
  { value: "Machine Learning" },
  { value: "AR/VR" },
  { value: "Game Development" },
  { value: "Image Processing" },
];

const status = [
  { value: "On going" },
  { value: "Completed" },
  { value: "Applied" },
  { value: "Rejected" },
];

export default class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
    };
  }

  resetFilter = (e) => {
    console.log("been here");
    this.setState({
      startDate: new Date(),
    });
  };

  handleChange = (date) => {
    this.setState({
      startDate: date,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    alert("Filters applied");
  };

  componentDidMount() {
    $(".filterDropdown").click(function (e) {
      e.stopPropagation();
    });
  }

  render() {
    return (
      <div
        id='Filter'
        className='d-flex flex-column align-content-center justify-content-start text-center p-1'
        style={{ height: "100%" }}>
        <p className='h2 text-center font-weight-bold p-2'>Filters</p>

        <hr style={{ marginTop: "0.8em", marginBottom: "0.8em" }} />
        <form
          onSubmit={this.handleSubmit}
          onReset={this.resetFilter}
          className='p-0 text-left'>
          <div className='form-group d-flex flex-column'>
            <label
              htmlFor='domain-selection'
              className='d-block font-weight-bold'>
              <i className='fa fa-fw mr-2 fa-cubes' />
              Internship Domains
            </label>
            <div className='dropdown noselect'>
              <button
                type='button'
                className='btn w-100 bg-white dropdown-toggle border shadow-sm'
                data-toggle='dropdown'
                id='domain-selection'>
                Domains
              </button>
              <div className='dropdown-menu filterDropdown'>
                {domains.map((element) => (
                  <label
                    className='dropdown-item domain w-100'
                    htmlFor={element.value}>
                    <input
                      type='checkbox'
                      name={element.value}
                      id={element.value}
                      className='mr-2'
                    />
                    <span>{element.value}</span>
                  </label>
                ))}
              </div>
            </div>
            {/* <select multiple className="form-control" id="domain-selection">
              {domains.map(element => (
                <option>{element.value}</option>
              ))}
            </select> */}
            {/* <Multiselect
              id="domain-selection"
              name="domain-selection"
              data={domains}
              multiple
            /> */}
          </div>
          <hr style={{ marginTop: "0.8em", marginBottom: "0.8em" }} />
          <div className='form-group d-flex flex-column'>
            <label htmlFor='date-pick' className='font-weight-bold'>
              <i className='fa fa-calendar-o fa-fw mr-2' />
              Select Start Date
            </label>
            <DatePicker
              id='date-pick'
              name='date-pick'
              className='form-control shadow-sm w-100'
              selected={this.state.startDate}
              onChange={this.handleChange}
            />
          </div>

          <hr style={{ marginTop: "0.8em", marginBottom: "0.8em" }} />

          <div className='form-group'>
            <label htmlFor='duration' className='font-weight-bold'>
              <i className='fa fa-clock-o fa-fw mr-2' />
              Duration
            </label>
            <select
              className='form-control shadow-sm'
              id='duration'
              name='duration'>
              <option>&gt;= 1 month</option>
              <option>&gt;= 2 months</option>
              <option>&gt;= 3 months</option>
              <option>&gt;= 4 months</option>
              <option>&gt;= 5 months</option>
              <option>&gt;= 6 months</option>
            </select>
          </div>

          <hr style={{ marginTop: "0.8em", marginBottom: "0.8em" }} />

          <div className='form-group'>
            <label htmlFor='type' className='font-weight-bold'>
              <i className='fa fa-fw fa-pagelines mr-2' />
              Type
            </label>
            <select className='form-control shadow-sm' name='type' id='type'>
              <option>Internal</option>
              <option>External</option>
            </select>
          </div>

          <hr style={{ marginTop: "0.8em", marginBottom: "0.8em" }} />

          <div className='form-group'>
            <label htmlFor='status' className='d-block font-weight-bold'>
              <i className='fa fa-fw fa-info mr-2' />
              Status
            </label>
            <div className='dropdown noselect'>
              <button
                type='button'
                className='btn w-100 bg-white dropdown-toggle border shadow-sm'
                data-toggle='dropdown'
                id='status'>
                Status
              </button>
              <div className='dropdown-menu filterDropdown'>
                {status.map((element) => (
                  <label
                    className='dropdown-item domain w-100'
                    htmlFor={element.value}>
                    <input
                      type='checkbox'
                      name={element.value}
                      id={element.value}
                      className='mr-2'
                    />
                    <span>{element.value}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* <Multiselect id="status" name="status" data={status} multiple /> */}
          </div>
          <div className='form-group d-flex flex-column'>
            <button type='reset' className='btn shadow-sm btn-danger my-3'>
              Reset Filters
            </button>
            <button type='submit' className='btn shadow-sm btn-success'>
              Apply Filters
            </button>
          </div>
        </form>
      </div>
    );
  }
}
