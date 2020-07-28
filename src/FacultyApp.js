import React from "react";
import Header from "./faculty_components/Header";
import CreateInternship from "./faculty_components/CreateInternship";
import { Route } from "react-router-dom";
import Feedback from "./faculty_components/Feedback";
import Floatedinternship from "./faculty_components/Floatedinternship";

export default class FacultyApp extends React.Component {
  render() {
    return (
      <div className='FacultyApp min-vh-100'>
        <Header />
        <Route exact path='/' render={() => "Landing page"} />
        {/* <Route exact path='/' component={SearchInternships} /> */}
        <Route path='/create-internship' component={CreateInternship} />
        <Route path='/feedback' component={Feedback} />
        <Route path='/floated' component={Floatedinternship} />
      </div>
    );
  }
}
