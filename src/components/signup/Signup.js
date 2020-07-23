import React, { Component } from "react";
import "./Signup.scss";
import Login from "./login1.gif";
import { Link } from "react-router-dom";
import app from "../../Firebase";
import $ from "jquery";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      error: ""
    };
  }

  emailValidation = () => {
    return this.state.email.match(/^\w+([\.-]?\w+)*@somaiya\.edu$/)
      ? true
      : false;
  };

  passwordSecure = () => {
    return this.state.password.match(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,256}$/
    )
      ? true
      : false;
  };

  handleChange = e => {
    let event = e.target;
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => {
        if (event.name === "email") {
          if (this.emailValidation()) {
            $("#email")
              .removeClass("is-invalid")
              .addClass("is-valid");
          } else {
            $("#email")
              .addClass("is-invalid")
              .removeClass("is-valid");
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
            $("#password")
              .removeClass("is-invalid")
              .addClass("is-valid");
          } else {
            $("#password")
              .addClass("is-invalid")
              .removeClass("is-valid");
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
      }
    );
  };

  handleSubmit = e => {
    e.preventDefault();

    if (
      this.emailValidation() &&
      this.passwordSecure() &&
      this.state.confirmPassword === this.state.password
    )
      app
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(user_creds => {
          app
            .firestore()
            .collection("users")
            .doc(user_creds.user.uid)
            .set({
              type: "student"
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
        .catch(err => {
          this.setState({ error: err.message });
          $(".alert-success").addClass("d-none");
          $(".alert-danger").removeClass("d-none");
        });
  };
  componentDidMount() {
    document.addEventListener("contextmenu", event => event.preventDefault());
  }
  render() {
    return (
      <div
        id="signup"
        className="d-flex flex-xl-row flex-column mx-auto align-items-center noselect justify-content-center"
      >
        <div className="col-xl-7 col-12">
          <img src={Login} alt="login" className="w-100" />
        </div>
        <div
          className="col-xl-5 col-12 pr-4 d-flex flex-column justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <h1 className="text-center d-block mb-4"> SIGN UP </h1>
          <form className="w-100" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">
                <i className="fa fa-fw fa-envelope" /> Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter email"
                required
                autoFocus
                autoComplete="off"
                onChange={this.handleChange}
              />
              <small className="invalid-feedback form-text text-danger">
                Sign up with somaiya email Id.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="password">
                <i className="fa fa-fw fa-asterisk" /> Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Enter password"
                required
                autoComplete="off"
                onChange={this.handleChange}
              />
            </div>
            <small className="form-text text-muted mb-3">
              At least 8 characters—the more characters, the better.
              <br /> A mixture of both uppercase and lowercase letters.
              <br /> A mixture of letters and numbers.
              <br /> Inclusion of at least one special character, e.g., ! @ # ?
              &#93;
            </small>
            <div className="form-group">
              <label htmlFor="confirmPassword">
                <i className="fa fa-fw fa-rocket" /> Re-enter password
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Re-enter password"
                required
                autoComplete="off"
                onChange={this.handleChange}
              />
            </div>

            <div
              class="alert alert-danger d-none mb-0 "
              role="alert"
              style={{ fontSize: "0.9em" }}
            >
              {this.state.error}
            </div>
            <div
              class="alert alert-success d-none mb-0 "
              role="alert"
              style={{ fontSize: "0.9em" }}
            >
              Verification mail has been sent to your mail id.
            </div>
            <div className="my-5 text-center">
              <button
                className="btn btn-lg btn-light shadow-sm px-3"
                disabled={
                  this.emailValidation() &&
                  this.passwordSecure() &&
                  this.state.confirmPassword === this.state.password
                    ? false
                    : true
                }
              >
                Sign Up
              </button>
            </div>
            <div className="form-group text-right">
              <Link to="/signin" className="text-decoration-none">
                Back to Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
