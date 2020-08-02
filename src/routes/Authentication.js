import React from "react";
import Welcome from "../components/authentication/welcome/Welcome";
import Signin from "../components/authentication/signin/Signin";
import Signup from "../components/authentication/signup/Signup";
import ForgotPassword from "../components/authentication/forgot-password/ForgotPassword";
import { Switch, Route, Redirect } from "react-router-dom";

const Authentication = () => {
  return (
    <Switch>
      <Route exact path='/' component={Welcome} />
      <Route path='/signin' component={Signin} />
      <Route path='/signup' component={Signup} />
      <Route path='/forgot-password' component={ForgotPassword} />
      <Route render={() => <Redirect to='/' />} />
    </Switch>
  );
};

export default Authentication;
