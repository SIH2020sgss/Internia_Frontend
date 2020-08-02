import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "font-awesome/css/font-awesome.min.css";
import "./fonts/HindGuntur.css";
import "./index.scss";
import Authentication from "./routes/Authentication";
import Students from "./routes/Students";
import Faculty from "./routes/Faculty";
import Admin from "./routes/Admin";

import app from "./firebase";
import {
  BrowserRouter /* , Switch, Redirect, Route */,
} from "react-router-dom";

app.auth().onAuthStateChanged((firebase_user) => {
  if (firebase_user && firebase_user.emailVerified) {
    app
      .firestore()
      .collection("users")
      .doc(firebase_user.uid)
      .get()
      .then((doc) => {
        let type = doc.data().type;
        if (type === "student") {
          ReactDOM.render(
            <React.StrictMode>
              <BrowserRouter>
                <Students />
              </BrowserRouter>
            </React.StrictMode>,
            document.getElementById("root"),
          );
        } else if (type === "faculty") {
          ReactDOM.render(
            <React.StrictMode>
              <BrowserRouter>
                <Faculty />
              </BrowserRouter>
            </React.StrictMode>,
            document.getElementById("root"),
          );
        } else if (type === "admin") {
          ReactDOM.render(
            <React.StrictMode>
              <BrowserRouter>
                <Admin />
              </BrowserRouter>
            </React.StrictMode>,
            document.getElementById("root"),
          );
        }
      });
  } else {
    ReactDOM.render(
      <BrowserRouter>
        <Authentication />
      </BrowserRouter>,
      document.getElementById("root"),
    );
  }
});
