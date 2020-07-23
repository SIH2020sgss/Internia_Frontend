import React, { Component } from "react";
import "./AppliedInternships.scss";
import AppliedInternshipCard from "./AppliedInternshipCard";
import Filter from "./Filter";
import FilterModal from "./FilterModal";
//import $ from "jquery";

class AppliedInternships extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModalOnPhone: false
    };
  }

  FilterModalClosed = () => this.setState({ showModalOnPhone: false });

  render() {
    return (
      <div>
        <div className="col-9 p-1 m-auto  d-sm-block d-md-none py-3">
          <FilterModal
            show={this.state.showModalOnPhone}
            FilterModalClosed={this.FilterModalClosed}
          />

          <button
            type="button"
            className="btn btn-light btn-block btn-outline-primary"
            onClick={() => this.setState({ showModalOnPhone: true })}
          >
            <span className="m-auto">Filters</span>
          </button>
        </div>
        <div id="applied-internships" className="col-11 row mx-auto bg">
          <div
            className="col-3 d-none d-xl-flex flex-column align-items-center rounded shadow bg-light"
            style={{
              border: "none",
              height: "80vh",
              marginTop: "1em",
              position: "sticky",
              top: "3em"
            }}
          >
            <div id="filter-box" style={{ width: "90%" }}>
              <Filter />
            </div>
          </div>
          <div className="col-12 col-xl-8 offset-xl-1">
            <AppliedInternshipCard />
            <AppliedInternshipCard />
            <AppliedInternshipCard />
            <AppliedInternshipCard />
            <AppliedInternshipCard />
            <AppliedInternshipCard />
            <AppliedInternshipCard />
            <AppliedInternshipCard />
            <AppliedInternshipCard />
            <AppliedInternshipCard />
            <AppliedInternshipCard />
            <AppliedInternshipCard />
            <AppliedInternshipCard />
            <AppliedInternshipCard />
            <AppliedInternshipCard />
            <AppliedInternshipCard />
          </div>
        </div>
      </div>
    );
  }
}

export default AppliedInternships;
