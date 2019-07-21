import { connect } from "react-redux";
import SignIn from "./signin";
import React, { Component } from "react";
import { signin } from "../actions/auth/auth";
import { validateEmail } from "../helpers/index";

const mapStateToProps = state => ({
  auth: state.authRequest
});

class signin_container extends Component {
  state = {
    hidden: true,
    password: "",
    email: "",
    errors: {}
  };

  showPassword = () => {
    this.setState({ hidden: !this.state.hidden });
  };

  handleInputChange = event => {
    const {
      target: { name, value }
    } = event;
    this.setState({ [name]: value });
  };

  signInUser = async event => {
    event && event.preventDefault();
    if (!validateEmail(this.state.email)) {
      const error = { email: "Invalid email provided" };
      await this.setState({ errors: error });
    } else if (!this.state.password) {
      const error = { password: "Please provide your password" };
      await this.setState({ errors: error });
    } else {
      this.setState({ errors: {} });
      const { signin } = this.props;
      signin({ email: this.state.email, password: this.state.password });
    }
  };
  render() {
    const {
      auth: { isLoading }
    } = this.props;
    return (
      <div>
        <SignIn
          signIn={this.signInUser}
          state={this.state}
          isLoading={isLoading}
          showPassword={this.showPassword}
          handleInputChange={this.handleInputChange}
        />
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  { signin }
)(signin_container);
