import React from "react";
import Header from "./faculty_components/Header";
import CreateInternship from "./faculty_components/CreateInternship";
import { Route } from "react-router-dom";
// import { admin_app } from "./Firebase";

export default class FacultyApp extends React.Component {
  componentDidMount() {
    // admin_app
    //   .auth()
    //   .listUsers()
    //   .then(res => {
    //     console.log(res);
    // });
  }
  render() {
    return (
      <div className="FacultyApp min-vh-100">
        <Header />
        <Route path="/create-internship" component={CreateInternship} />
        <div id="userList">{""}</div>
        
      </div>
    );
  }
}
