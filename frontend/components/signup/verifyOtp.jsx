import React, { Component } from "react";

class verifyOtp extends Component {
  render() {
    const {
      verifyOtp,
      handleInputChange,
      token,
      errors,
      isLoading
    } = this.props;
    return (
      <div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-5 col-xl-4 my-5">
              <h1 className="display-4 text-center mb-5">Verify OTP Token</h1>
              <form onSubmit={verifyOtp}>
                <div className="form-group">
                  <label>
                    Verification Token<sup className="text-danger h5">*</sup>
                  </label>
                  <input
                    type="text"
                    className={
                      errors.token ? "error form-control" : "form-control"
                    }
                    placeholder="Enter OTP token here"
                    defaultValue={token}
                    onChange={handleInputChange}
                    name="token"
                  />
                  {errors.token && (
                    <span className="text-danger">{errors.token}</span>
                  )}
                </div>
                <button className="btn btn-primary btn-block mb-3">
                  {isLoading && (
                    <span className="spinner-border spinner-border-sm" />
                  )}{" "}
                  {isLoading ? `Verifying...` : `Verify`}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default verifyOtp;
