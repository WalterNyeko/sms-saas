import React from "react";
import { Route } from "react-router-dom";
import HeaderContainer from "./header/header_container";
import SigninContainer from "./signin/signin_container";
import SignupContainer from "./signup/signup_container";
import SideBarContainer from "./sidebar/side_bar_container";
import DashboardContainer from "./dashboard/dashboard_container";
import Authetocation from "./authentication/authetocation_container";
import ForgotPassword from "./signin/forgot_password_container";
import VerifyOTP from "./signup/verifyOtp_container";
import Routes from "../components/helpers/routes";

const App = () => (
  <div>
    <Route path={Routes.landing} component={SideBarContainer} />
    <div className="main-content">
      <Route path={Routes.landing} component={HeaderContainer} />
      <Route path={Routes.dashboard} component={DashboardContainer} />
      <Route path={Routes.authentication} exact component={Authetocation} />
    </div>
    <Route path={Routes.signin} component={SigninContainer} />
    <Route path={Routes.signup} component={SignupContainer} />
    <Route path={Routes.resetPassword} component={ForgotPassword} />
    <Route path={Routes.verifyToken} exact component={VerifyOTP} />
  </div>
);

export default App;
