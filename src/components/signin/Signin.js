import React, { Component } from "react";
import "./Signin.scss";
import Login from "./login2.gif";
import { Link } from "react-router-dom";
import app from "../../Firebase";
import $ from "jquery";

class Signin extends Component {
  constructor() {
    super();
    this.state = JSON.parse(localStorage.getItem("signInFormData")) || {
      loginEmail: "",
      password: "",
      remember: false,
      error: "",
    };
  }

  emailValidation = () => {
    return this.state.loginEmail.match(/^\w+([\.-]?\w+)*@somaiya\.edu$/)
      ? true
      : false;
  };

  handleChange = (e) => {
    let event = e.target;
    this.setState(
      {
        [e.target.name]: e.target.value,
      },
      () => {
        if (event.name === "loginEmail") {
          if (this.emailValidation()) {
            $("#loginEmail").removeClass("is-invalid").addClass("is-valid");
          } else {
            $("#loginEmail").addClass("is-invalid").removeClass("is-valid");
          }
        }
      },
    );
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.remember) {
      localStorage.setItem("signInFormData", JSON.stringify(this.state));
    } else {
      try {
        localStorage.removeItem("signInFormData");
      } catch {}
    }
    if (this.emailValidation())
      app
        .auth()
        .signInWithEmailAndPassword(this.state.loginEmail, this.state.password)
        .then((user_creds) => {
          if (!user_creds.user.emailVerified) {
            app
              .auth()
              .signOut()
              .then(() => {
                this.setState({ error: "Verify your email first to sign in" });
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
      <div id='signin'>
        <div className='d-flex flex-xl-row flex-column mx-auto align-items-center noselect justify-content-center'>
          <div className='col-xl-7 col-12'>
            <img src={Login} alt='login' className='w-100' />
          </div>
          <div
            className='col-xl-5 col-12 pr-4 d-flex flex-column justify-content-center align-items-center'
            style={{ height: "100vh" }}>
            <h1 className='text-center d-block mb-4'>SIGN IN</h1>
            <form className='w-100' onSubmit={this.handleSubmit}>
              <div className='form-group'>
                <label htmlFor='loginEmail'>
                  <i className='fa fa-fw fa-envelope' /> Email
                </label>
                <input
                  type='email'
                  className='form-control w-100'
                  id='loginEmail'
                  name='loginEmail'
                  required
                  placeholder='Enter email'
                  autoComplete='off'
                  autoFocus
                  onChange={this.handleChange}
                  value={this.state.loginEmail}
                />
              </div>
              <div className='form-group'>
                <label htmlFor='password'>
                  <i className='fa fa-fw fa-asterisk' /> Password
                </label>
                <input
                  type='password'
                  className='form-control w-100'
                  id='password'
                  name='password'
                  placeholder='Enter password'
                  required
                  autoComplete='off'
                  onChange={this.handleChange}
                  value={this.state.password}
                />
              </div>
              <div className='form-check m-0 p-0'>
                <input
                  type='checkbox'
                  name='rememberMe'
                  id='rememberMe'
                  className='mr-2'
                  onChange={() => {
                    this.setState({
                      remember: !this.state.remember,
                    });
                  }}
                  checked={this.state.remember}
                />
                <label htmlFor='rememberMe'>Remember me</label>
              </div>
              <div className='d-xl-flex flex-row mt-4 text-xl-center justify-content-between align-items-center'>
                <Link to='/forgot-pass' className='d-block'>
                  Forgot your password
                </Link>
                <Link to='/signup' className='d-block my-xl-0 my-2'>
                  New here
                </Link>
              </div>

              <div
                class='alert alert-danger d-none mt-2'
                role='alert'
                style={{ fontSize: "0.9em" }}>
                {this.state.error}
              </div>

              <div className='text-center my-3'>
                <button
                  type='submit'
                  className='btn btn-lg shadow-sm'
                  style={{
                    background: "rgb(234,247,250)",
                  }}>
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
                      this.state.loginEmail,
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
      </div>
    );
  }
}

export default Signin;
