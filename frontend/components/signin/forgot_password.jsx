import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import Routes from "../helpers/routes";
class forgot_password extends Component {
  render() {
    const {
      state: { newPassword, confirmPassword, email, errors },
      handleInputChange,
      isLoading,
      resetPassword
    } = this.props;
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-5 col-xl-4 my-5">
            <h1 className="display-4 text-center mb-5">Password Reset</h1>
            <form onSubmit={resetPassword}>
              <div className="form-group">
                <label>Email Address (The email you registered with)</label>
                <input
                  type="text"
                  className={
                    errors.email ? "error form-control" : "form-control"
                  }
                  placeholder="Enter your email address"
                  defaultValue={email}
                  name="email"
                  onChange={handleInputChange}
                />
                {errors.email && (
                  <span className="text-danger">{errors.email}</span>
                )}
              </div>
              <div className="form-group">
                <label>New Password</label>
                <input
                  type="password"
                  className={
                    errors.newPassword ? "error form-control" : "form-control"
                  }
                  placeholder="Enter new password"
                  defaultValue={newPassword}
                  name="newPassword"
                  onChange={handleInputChange}
                />
                {errors.newPassword && (
                  <span className="text-danger">{errors.newPassword}</span>
                )}
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  className={
                    errors.confirmPassword
                      ? "error form-control"
                      : "form-control"
                  }
                  placeholder="Confirm new password"
                  defaultValue={confirmPassword}
                  name="confirmPassword"
                  onChange={handleInputChange}
                />
                {errors.confirmPassword && (
                  <span className="text-danger">{errors.confirmPassword}</span>
                )}
              </div>
              <button className="btn btn-primary btn-block mb-3">
                {isLoading && (
                  <span className="spinner-border spinner-border-sm" />
                )}{" "}
                {isLoading ? `Resetting...` : `Reset Password`}
              </button>
              <div className="text-center">
                <small className="text-muted text-center">
                  Don't have an account yet?{" "}
                  <NavLink to={Routes.signup}>Sign up</NavLink>.
                </small>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default forgot_password;
