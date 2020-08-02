import React, { Component } from "react";
import "./Signup.scss";
import SignupGIF from "./Signup.gif";
import { Link } from "react-router-dom";
import app from "../../../firebase";
import $ from "jquery";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      error: "",
    };
  }

  emailValidation = () => {
    // eslint-disable-next-line
    return this.state.email.match(/^\w+([\.-]?\w+)*@somaiya\.edu$/)
      ? true
      : false;
  };

  passwordSecure = () => {
    return this.state.password.match(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,256}$/,
    )
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
        if (event.name === "email") {
          if (this.emailValidation()) {
            $("#email").removeClass("is-invalid").addClass("is-valid");
          } else {
            $("#email").addClass("is-invalid").removeClass("is-valid");
          }
        }
        if (event.name === "password") {
          if (
            this.passwordSecure() &&
            this.state.password === this.state.confirmPassword
          ) {
            $("#confirmPassword")
              .removeClass("is-invalid")
              .addClass("is-valid");
          } else {
            $("#confirmPassword")
              .addClass("is-invalid")
              .removeClass("is-valid");
          }
          if (this.passwordSecure()) {
            $("#password").removeClass("is-invalid").addClass("is-valid");
          } else {
            $("#password").addClass("is-invalid").removeClass("is-valid");
          }
        }
        if (event.name === "confirmPassword") {
          if (
            this.passwordSecure() &&
            this.state.password === this.state.confirmPassword
          ) {
            $("#confirmPassword")
              .removeClass("is-invalid")
              .addClass("is-valid");
          } else {
            $("#confirmPassword")
              .addClass("is-invalid")
              .removeClass("is-valid");
          }
        }
      },
    );
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (
      this.emailValidation() &&
      this.passwordSecure() &&
      this.state.confirmPassword === this.state.password
    )
      app
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((user_creds) => {
          app
            .firestore()
            .collection("users")
            .doc(user_creds.user.uid)
            .set({
              type: "student",
            })
            .then(() => {
              user_creds.user.sendEmailVerification().then(() => {
                app
                  .auth()
                  .signOut()
                  .finally(() => {
                    $(".alert-danger").addClass("d-none");
                    $(".alert-success").removeClass("d-none");
                  });
              });
            });
        })
        .catch((err) => {
          this.setState({ error: err.message });
          $(".alert-success").addClass("d-none");
          $(".alert-danger").removeClass("d-none");
        });
  };
  componentDidMount() {
    document.addEventListener("contextmenu", (event) => event.preventDefault());
  }
  render() {
    return (
      <div
        id='signup'
        className='min-vh-100 d-flex flex-xl-row flex-column mx-auto align-items-center noselect justify-content-center'>
        <div className='col-xl-7 col-12'>
          <img src={SignupGIF} alt='login' className='w-100' />
        </div>
        <div className='col-xl-5 col-12 d-flex flex-column justify-content-center'>
          <h1 className='text-center mb-4'> SIGN UP </h1>
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
                placeholder='Enter email'
                required
                autoFocus
                onChange={this.handleChange}
              />
              <small className='invalid-feedback form-text text-danger'>
                Sign up with somaiya email Id.
              </small>
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
            <small className='form-text text-muted mb-3'>
              At least 8 characters—the more characters, the better.
              <br /> A mixture of both uppercase and lowercase letters.
              <br /> A mixture of letters and numbers.
              <br /> Inclusion of at least one special character, e.g., ! @ # ?
              &#93;
            </small>
            <div className='form-group'>
              <label htmlFor='confirmPassword'>
                <i className='fa fa-fw fa-rocket' /> Re-enter password
              </label>
              <input
                type='password'
                className='form-control border-0'
                id='confirmPassword'
                name='confirmPassword'
                placeholder='Re-enter password'
                required
                disabled={!this.passwordSecure()}
                onChange={this.handleChange}
              />
            </div>

            <div
              class='alert alert-danger d-none mb-0 '
              role='alert'
              style={{ fontSize: "0.9em" }}>
              {this.state.error}
            </div>
            <div class='alert alert-success d-none mb-0 ' role='alert'>
              Verification mail has been sent to your mail id.
            </div>
            <div className='my-5 text-center'>
              <button
                className='btn btn-success shadow-sm px-3'
                disabled={
                  this.emailValidation() &&
                  this.passwordSecure() &&
                  this.state.confirmPassword === this.state.password
                    ? false
                    : true
                }>
                Sign Up
              </button>
            </div>
            <div className='form-group text-right'>
              <Link to='/signin' className='text-decoration-none'>
                <button className='btn btn-light text-primary'>
                  <span className='fa fa-fw mr-2 fa-chevron-left'></span>
                  Back to Sign In
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
