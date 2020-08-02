import React, { Component } from "react";
import WelcomeGIF from "./Welcome.gif";
import Typical from "react-typical";
import { Link } from "react-router-dom";

const steps = ["Your Internship Hub.", 1500];

class Welcome extends Component {
  componentDidMount() {
    document.addEventListener("contextmenu", (event) => event.preventDefault());
  }
  render() {
    return (
      <div
        id='welcome'
        className='vh-100 d-flex flex-xl-row flex-column mx-auto noselect align-items-center justify-content-center'>
        <div className='col-12 col-md-8 d-flex flex-row align-items-center justify-content-center'>
          <img src={WelcomeGIF} alt='logo' className='w-100' />
        </div>
        <div
          className='col-12 col-md-4 py-xl-0 py-5 d-flex
        text-left flex-column justify-content-center text-center'>
          <h1 className='pt-6 font-weight-bold'>Internia</h1>
          <div className='h3'>
            <Typical wrapper='span' steps={steps} loop={1} className={"head"} />
          </div>
          <Link
            className='text-left text-decoration-none text-muted p-0 m-0 mt-3 text-center'
            to='/signin'>
            Let's get Started
          </Link>
        </div>
      </div>
    );
  }
}

export default Welcome;
