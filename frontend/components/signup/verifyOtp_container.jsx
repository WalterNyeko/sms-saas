import React, { Component } from "react";
import { connect } from "react-redux";
import VerifyOtpComponent from "./verifyOtp";
import { verifyOtp } from "../actions/auth/auth";

const mapStateToProps = state => ({
  auth: state.authRequest
});

class verifyOtp_container extends Component {
  state = {
    token: "",
    errors: {}
  };

  handleInputChange = event => {
    const {
      target: { name, value }
    } = event;
    this.setState({ [name]: value });
  };

  verifyOtpToken = async event => {
    event.preventDefault();
    if (!this.state.token) {
      const error = { token: "Please provide the verification token" };
      await this.setState({ errors: error });
    } else {
      this.setState({ errors: {} });
      const { token } = this.state;
      const countryCode = localStorage.getItem("code");
      const phone = localStorage.getItem("phone");
      const data = {
        otp: token,
        phone: phone
      };
      const { verifyOtp } = this.props;
      await verifyOtp(data);
    }
  };

  render() {
    const { isLoading } = this.props.auth;
    return (
      <div>
        <VerifyOtpComponent
          verifyOtp={this.verifyOtpToken}
          token={this.state.token}
          errors={this.state.errors}
          isLoading={isLoading}
          handleInputChange={this.handleInputChange}
        />
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  { verifyOtp }
)(verifyOtp_container);
