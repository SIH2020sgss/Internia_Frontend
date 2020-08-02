import React from "react";
import BrowseInternships from "../components/student/internship/browse/BrowseInternships";
import Profile from "../components/student/profile/Profile";
import AppliedInternships from "../components/student/internship/applied/AppliedInternships";
import InternshipDetails from "../components/student/internship/details/InternshipDetails";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Header from "../components/student/header/Header";

const Students = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route
        exact
        path={["/browse-internships", "/"]}
        component={BrowseInternships}
      />
      <Route exact path='/profile' component={Profile} />
      <Route exact path='/applied-internships' component={AppliedInternships} />
      <Route
        exact
        path='/internship-details/:id'
        component={InternshipDetails}
      />
      <Route render={() => <Redirect to='/' />} />
    </BrowserRouter>
  );
};

export default Students;
