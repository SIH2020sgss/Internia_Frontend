import React, { Component } from "react";
import "./Signin.scss";
import SigninGIF from "./Signin.gif";
import { Link } from "react-router-dom";
import app from "../../../firebase";
import $ from "jquery";

class Signin extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      error: "",
    };
  }

  emailValidation = () => {
    return this.state.email.match(/^\w+([.]?\w+)*@somaiya\.edu$/)
      ? true
      : false;
  };

  handleChange = (event) => {
    let { target } = event;
    this.setState(
      {
        [target.name]: target.value,
      },
      () => {
        if (target.name === "email") {
          if (this.emailValidation()) {
            $("#email").removeClass("is-invalid").addClass("is-valid");
          } else {
            $("#email").addClass("is-invalid").removeClass("is-valid");
          }
        }
      },
    );
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.emailValidation())
      app
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((user_creds) => {
          if (!user_creds.user.emailVerified) {
            app
              .auth()
              .signOut()
              .then(() => {
                this.setState({
                  error: "Please verify your Email address to proceed.",
                });
                $(".alert-danger").removeClass("d-none");
                $("#resend__email__verification").show();
              });
          }
        })
        .catch((err) => {
          this.setState({ error: err.message });
          $(".alert-danger").removeClass("d-none");
        });
  };

  componentDidMount() {
    document.addEventListener("contextmenu", (event) => event.preventDefault());
  }

  render() {
    return (
      <div
        id='signin'
        className='d-flex flex-xl-row min-vh-100 flex-column align-items-center noselect justify-content-center'>
        <div className='col-xl-7 col-12'>
          <img src={SigninGIF} alt='login' className='w-100' />
        </div>
        <div className='col-xl-5 col-12 d-flex flex-column justify-content-center'>
          <h1 className='text-center mb-4'>SIGN IN</h1>
          <form autoComplete='off' onSubmit={this.handleSubmit}>
            <div className='form-group'>
              <label htmlFor='email'>
                <i className='fa fa-fw fa-envelope' /> Email
              </label>
              <input
                type='email'
                className='form-control border-0'
                id='email'
                name='email'
                required
                placeholder='Enter email'
                onChange={this.handleChange}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='password'>
                <i className='fa fa-fw fa-asterisk' /> Password
              </label>
              <input
                type='password'
                className='form-control border-0'
                id='password'
                name='password'
                placeholder='Enter password'
                required
                onChange={this.handleChange}
              />
            </div>
            <div className='d-flex justify-content-between'>
              <Link to='/forgot-password'>Forgot password</Link>
              <Link to='/signup'>Sign up</Link>
            </div>

            <div class='alert alert-danger d-none mt-2' role='alert'>
              {this.state.error}
            </div>

            <div className='text-center my-3'>
              <button type='submit' className='btn btn-success shadow-sm'>
                Sign In
              </button>
            </div>

            <div
              id='resend__email__verification'
              style={{ display: "none" }}
              onClick={() => {
                alert("resend verification.");
                app
                  .auth()
                  .signInWithEmailAndPassword(
                    this.state.email,
                    this.setState.password,
                  )
                  .then((user_creds) => {
                    user_creds.user.sendEmailVerification().finally(() => {
                      app
                        .auth()
                        .signOut()
                        .finally(() => {
                          alert("Verification link resent.");
                        });
                    });
                  });
              }}>
              Resend verification mail
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Signin;
