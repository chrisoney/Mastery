import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router-dom";
import '../styles/app.scss'

import NavBarContainer from "./nav/navbar_container";
import MainPageContainer from "./main/main_container";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";

import TaskContainer from './tasks/tasks_container';

import "../styles/reset.scss";
import "../styles/application.scss";


const App = () => (
  <div className="app">
    <NavBarContainer />
    <Switch>
      <TaskContainer />
      <AuthRoute exact path="/" component={MainPageContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    </Switch>
  </div>
);

export default App;
