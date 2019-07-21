import { connect } from "react-redux";
import SignUp from "./signup";
import { withRouter } from "react-router-dom";
import React, { Component } from "react";
import { signup } from "../actions/auth/auth";
import "../../../assets/css/main.css";

const mapStateToProps = state => ({
  auth: state.authRequest
});

const mapDispatchToProps = dispatch => ({});

class signup_container extends Component {
  state = {
    firstName: "",
    lastName: "",
    phone: "",
    company: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    countryCode: "",
    hidden: true,
    errors: {}
  };

  handleInputChange = event => {
    const {
      target: { name, value }
    } = event;
    this.setState({ [name]: value });
  };

  setCountryCode = code => {
    this.setState({ countryCode: code });
  };

  signUpUser = event => {
    event && event.preventDefault();
    this.validateForm();
  };

  validateForm = async () => {
    if (!this.state.firstName) {
      const error = { firstName: "Please provide your first name" };
      await this.setState({ errors: error });
    } else if (!this.state.lastName) {
      const error = { lastName: "Please provide your last name" };
      await this.setState({ errors: error });
    } else if (!this.state.username) {
      const error = { username: "Please provide your username" };
      await this.setState({ errors: error });
    } else if (!this.state.phone) {
      const error = { phone: "Please provide your phone number" };
      await this.setState({ errors: error });
    } else if (!this.state.company) {
      const error = { company: "Please provide your company name" };
      await this.setState({ errors: error });
    } else if (!this.state.email) {
      const error = { email: "Please provide your email" };
      await this.setState({ errors: error });
    } else if (!this.state.password) {
      const error = { password: "Please a password" };
      await this.setState({ errors: error });
    } else if (!this.state.confirmPassword) {
      const error = { confirmPassword: "Please confirm your password" };
      await this.setState({ errors: error });
    } else if (this.state.password !== this.state.confirmPassword) {
      const error = { confirmPassword: "Passwords do not match" };
      await this.setState({ errors: error });
    } else if (!this.state.countryCode) {
      const error = { countryCode: "Please select your country" };
      await this.setState({ errors: error });
    } else {
      await this.setState({ errors: {} });
      const data = {
        firstname: this.state.firstName,
        lastname: this.state.lastName,
        phone: this.state.phone,
        company: this.state.company,
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        password_confirmation: this.state.confirmPassword,
        country_code: this.state.countryCode
      };
      const { signup } = this.props;
      signup(data);
    }
  };
  render() {
    const {
      auth: { isLoading }
    } = this.props;
    return (
      <div>
        <SignUp
          signUp={this.signUpUser}
          handleInputChange={this.handleInputChange}
          isLoading={isLoading}
          state={this.state}
          setCountryCode={this.setCountryCode}
        />
      </div>
    );
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    { signup }
  )(signup_container)
);
