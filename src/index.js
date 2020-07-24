import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "font-awesome/css/font-awesome.min.css";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import app from "./Firebase";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

// Authentication
import Signup from "./components/signup/Signup";
import Signin from "./components/signin/Signin";
import Forgotpass from "./components/signin/Forgotpass";

import Home from "./components/home/Home";
// import ReactDatePicker from "react-datepicker";
// import InternshipDetails from "./components/internshipDetails/InternshipDetails";
// import Internship from "./Internship";
import FacultyApp from "./FacultyApp";

app.auth().onAuthStateChanged((u) => {
  if (u && u.emailVerified) {
    app
      .firestore()
      .collection("users")
      .doc(u.uid)
      .get()
      .then((doc) => {
        let type = doc.data().type;
        if (type === "student") {
          ReactDOM.render(
            <React.StrictMode>
              <BrowserRouter>
                <Switch>
                  {/* <Internship /> */}
                  <Route
                    path={["/home", "/forgot-pass", "/signin", "/signup"]}
                    render={() => <Redirect to='/search' />}
                  />
                  <Route
                    exact
                    path='/'
                    render={() => <Redirect to='/search' />}
                  />
                  <App />
                </Switch>
              </BrowserRouter>
            </React.StrictMode>,
            document.getElementById("root"),
          );
        } else if (type === "faculty") {
          ReactDOM.render(
            <React.StrictMode>
              <BrowserRouter>
                <FacultyApp />
              </BrowserRouter>
            </React.StrictMode>,
            document.getElementById("root"),
          );
        } else if (type === "admin") {
          // ReactDOM.render(<p> {type} </p>, document.getElementById("root"));
        }
      });
  } else {
    ReactDOM.render(
      <React.StrictMode>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/forgot-pass' component={Forgotpass} />
            <Route exact path='/signin' component={Signin} />
            <Route exact path='/signup' component={Signup} />
            <Route render={() => <Redirect to='/' />} />
          </Switch>
        </BrowserRouter>
      </React.StrictMode>,
      document.getElementById("root"),
    );
  }
});

// ReactDOM.render(
//   <BrowserRouter>
//     <Home />
//   </BrowserRouter>,
//   document.getElementById("root"),
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
