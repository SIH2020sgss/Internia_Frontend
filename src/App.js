import React, { Component, Fragment } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/header/Header";
import AppliedInternships from "./components/appliedInternships/AppliedInternships";
import SearchInternships from "./components/searchInternships/SearchInternships";
import InternshipDetails from "./components/internshipDetails/InternshipDetails";
import $ from "jquery";
import Profile from "./components/profile/Profile";

class App extends Component {
  componentDidMount() {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Fragment>
            <Header />
            <Route path='/applied' component={AppliedInternships} />
            <Route path='/search' component={SearchInternships} />
            <Route path='/internship-details' component={InternshipDetails} />
            <Route path='/profile' component={Profile} />
          </Fragment>
          <Route render={() => <Redirect to='/' />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
