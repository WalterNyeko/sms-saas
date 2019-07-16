import React from "react";
import { Route } from "react-router-dom";
import HeaderContainer from "./header/header_container";
import SigninContainer from "./signin/signin_container";
import SignupContainer from "./signup/signup_container";
import SideBarContainer from "./sidebar/side_bar_container";
import DashboardContainer from "./dashboard/dashboard_container";

const App = () => (
  <div>
    <Route path="/" component={SideBarContainer} />
    <div className="main-content">
      <Route path="/" component={HeaderContainer} />
      <Route path="/dashboard" component={DashboardContainer} />
    </div>
    <Route path="/signin" component={SigninContainer} />
    <Route path="/signup" component={SignupContainer} />
  </div>
);

export default App;
