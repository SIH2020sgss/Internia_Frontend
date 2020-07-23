import React from "react";
import app from "../../Firebase";
import { Link } from "react-router-dom";
import firebase from "firebase";
import $ from "jquery";
// import "./Forgotpass.scss";
export default class Forgotpass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
  }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    window.rcv = new firebase.auth.RecaptchaVerifier("captcha", {
      callback: res => {
        app
          .auth()
          .sendPasswordResetEmail(this.state.email)
          .then(() => {
            $(".alert-success").removeClass("d-none");
          });
      }
    });
    window.rcv.render();
  };
  render() {
    return (
      <div className="Forgotpass text-center d-flex min-vh-100 p-2">
        <div
          className="container m-auto border rounded px-0 "
          style={{ width: "450px", borderColor: "#b9b9bd" }}
        >
          <form onSubmit={this.handleSubmit}>
            <div
              className="font-weight-bold lead bg-light p-1 container-fluid"
              style={{ fontSize: "1.3em", color: "#7aadcc" }}
            >
              <span>Forgot Password</span>
            </div>

            <div className="form-group m-3">
              <label className="text-muted" htmlFor="email">
                Enter your Email
              </label>
              <br />
              <input
                type="email"
                name="email"
                id="email"
                className="form-control w-75 mx-auto border border-light shadow-sm"
                onChange={this.handleChange}
                style={{ outline: "0", boxShadow: "none" }}
              />
            </div>
            <div id="captcha" className="d-flex justify-content-center p-2">
              {""}
            </div>
            <div className="form-group">
              <button
                type="submit"
                className="btn btn-info border-0 shadow m-2 mb-0"
              >
                Send link
              </button>
            </div>
            <div
              class="alert alert-success d-none m-2 w-75 mx-auto"
              role="alert"
              style={{ fontSize: "0.9em" }}
            >
              Link to reset password has been sent to your mail id
            </div>
            <div className="form-group text-center">
              <Link to="/signin" className="text-decoration-none ">
                <button className="btn btn-light">Back to Sign in</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
