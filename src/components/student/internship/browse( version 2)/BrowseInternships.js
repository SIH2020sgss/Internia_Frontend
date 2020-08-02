import React, { Component } from "react";
import Filter from "./Filter";
import Modal from "./Modal";
import Cards from "./Cards";
import "./BrowseInternships.scss";

class BrowseInternships extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModalOnPhone: false,
    };
  }

  ModalClosed = () => this.setState({ showModalOnPhone: false });
  render() {
    return (
      <div>
        <div className='col-9 p-1 m-auto  d-sm-block d-md-none py-3'>
          <Modal
            show={this.state.showModalOnPhone}
            ModalClosed={this.ModalClosed}
          />

          <button
            type='button'
            className='btn btn-light btn-block btn-outline-primary'
            onClick={() => this.setState({ showModalOnPhone: true })}>
            <span className='m-auto'>Filters</span>
          </button>
        </div>
        <div id='search-internships' className='col-11 row mx-auto bg'>
          <div
            className='col-3 d-none d-xl-flex flex-column align-items-center rounded shadow bg-light'
            style={{
              border: "none",
              height: "80vh",
              marginTop: "1em",
              position: "sticky",
              top: "3em",
            }}>
            <div id='filter-box' style={{ width: "90%" }}>
              <Filter />
            </div>
          </div>
          <div className='col-12 col-xl-8 offset-xl-1'>
            <p className='text-center totint'> 7 Total Internships </p>
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
            <Cards />
          </div>
        </div>
      </div>
    );
  }
}

export default BrowseInternships;
