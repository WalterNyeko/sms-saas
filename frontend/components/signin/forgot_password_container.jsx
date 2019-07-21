import React, { Component, Fragment } from "react";
import ForgotPassword from "./forgot_password";
import { connect } from "react-redux";
import { validateEmail } from "../../components/helpers/index";
import { resetPassword } from "../actions/auth/auth";

class forgot_password_container extends Component {
  state = {
    newPassword: "",
    confirmPassword: "",
    email: "",
    errors: {}
  };

  resetPassword = async event => {
    event && event.preventDefault();
    if (!validateEmail(this.state.email)) {
      const error = { email: "Invalid email address" };
      await this.setState({ errors: error });
    } else if (!this.state.newPassword) {
      const error = { newPassword: "Please provide the new password" };
      await this.setState({ errors: error });
    } else if (!this.state.confirmPassword) {
      const error = { confirmPassword: "Please confirm the new password" };
      await this.setState({ errors: error });
    } else if (this.state.newPassword !== this.state.confirmPassword) {
      const error = { confirmPassword: "Passwords do not match" };
      await this.setState({ errors: error });
    } else {
      await this.setState({ errors: {} });
      const { resetPassword } = this.props;
      const { newPassword, email, confirmPassword } = this.state;
      const data = {
        password: newPassword,
        email,
        confirm_password: confirmPassword
      };
      resetPassword(data);
    }
  };

  handleInputChange = event => {
    const {
      target: { name, value }
    } = event;
    this.setState({ [name]: value });
  };
  render() {
    const {
      auth: { isLoading }
    } = this.props;
    return (
      <ForgotPassword
        resetPassword={this.resetPassword}
        handleInputChange={this.handleInputChange}
        isLoading={isLoading}
        state={this.state}
      />
    );
  }
}

const mapStateToProps = state => ({
  auth: state.authRequest
});
export default connect(
  mapStateToProps,
  { resetPassword }
)(forgot_password_container);
