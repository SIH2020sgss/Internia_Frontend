import React, { Component } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
// import $ from "jquery";
// import ProfileModal from "../../components/profile/Profile.js";
import app from "../../Firebase";

class Header extends Component {
  constructor() {
    super();
    this.state = { /* profileState: false  */};
  }
  // profileStateToggler = () =>
  //   this.setState({ profileState: !this.state.profileState });
  render() {
    return (
      <div id="header" className=" navbar bg-white shadow-sm p-1">
        {/* <ProfileModal
          profileState={this.state.profileState}
          profileStateToggler={this.profileStateToggler}
        /> */}
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src="/assets/images/internia.png" alt="Homepage" width={100} />
          </a>
          <div className="dropdown">
            <img
              src="/assets/images/user.jpeg"
              alt="UserAvatar"
              data-toggle="dropdown"
              id="dropdownMenuButton"
              className="rounded-circle bg-white"
              width={60}
              height={60}
              style={{ cursor: "pointer", border: "none" }}
            />
            <div
              id="dropdownMenu"
              className="dropdown-menu dropdown-menu-right shadow-sm border-0"
            >
              {/* <Link class="dropdown-item" to="/notifications">
                <i className="fa fa-fw mr-2 fa-bell fa-sm" />
                Notifications
              </Link> */}
              {/* <Route path="/applied"> */}
              <Link className="dropdown-item" to="/search">
                <i className="fa fa-fw mr-2 fa-coffee fa-sm" />
                Search Internships
              </Link>
              {/* </Route> */}
              {/* <Route path="/search"> */}
              <Link className="dropdown-item" to="/applied">
                <i className="fa fa-fw mr-2 fa-clipboard fa-sm" />
                Applied Internships
              </Link>
              {/* </Route>hand */}
              <Link className="dropdown-item" to="/profile">
                <i className="fa fa-fw mr-2 fa-user" />
                Profile
              </Link>
              <div
                className="dropdown-item"
                onClick={() => app.auth().signOut()}
                style={{ cursor: "pointer" }}
              >
                <i className="fa fa-fw mr-2 fa-lock fa-sm" />
                Log out
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
