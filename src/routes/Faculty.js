import React from "react";
import BrowseInternships from "../components/student/internship/browse/BrowseInternships";
// import Profile from "../components/student/profile/Profile";
import FloatedInternships from "../components/faculty/internship/floated/FloatedInternships";
// import InternshipDetails from "../components/student/internship/details/InternshipDetails";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Feedback from "react-bootstrap/Feedback";
import CreateInternships from "../components/faculty/internship/create/CreateInternships";

const Students = () => {
  return (
    <BrowserRouter>
      <Route
        exact
        path={["/browse-internships", "/"]}
        component={BrowseInternships}
      />
      {/* <Route exact path='/profile' component={Profile} /> */}
      <Route exact path='/floated-internships' component={FloatedInternships} />
      {/* <Route
        exact
        path='/internship-details/:id'
        component={InternshipDetails}
      /> */}
      <Route exact path='/create-internships' component={CreateInternships} />
      <Route exact path='/feedback/:id' component={Feedback} />

      <Route render={() => <Redirect to='/' />} />
    </BrowserRouter>
  );
};

export default Students;
