import React from "react";
import { Link } from "react-router-dom";
import history from "../helpers/history";
import Routes from "../helpers/routes";

class SignIn extends React.Component {
  render() {
    const {
      signIn,
      state: { email, password, errors, hidden },
      isLoading,
      showPassword,
      handleInputChange
    } = this.props;
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-5 col-xl-4 my-5">
            <h1 className="display-4 text-center mb-3">Sign in</h1>
            <p className="text-muted text-center mb-5">
              Free access to our dashboard.
            </p>
            <form onSubmit={signIn}>
              <div className="form-group">
                <label>
                  Email Address
                </label>
                <input
                  type="text"
                  className={
                    errors.email ? "error form-control" : "form-control"
                  }
                  placeholder="Enter email here"
                  defaultValue={email}
                  onChange={handleInputChange}
                  name="email"
                />
                {errors.email && (
                  <span className="text-danger">{errors.email}</span>
                )}
              </div>
              <div className="form-group">
                <div className="row">
                  <div className="col">
                    <label>
                      Password
                    </label>
                  </div>
                  <div className="col-auto">
                    <Link
                      to={Routes.resetPassword}
                      className="form-text small text-muted"
                    >
                      Forgot password?
                    </Link>
                  </div>
                </div>
                <div className="input-group input-group-merge">
                  <input
                    type={hidden ? "password" : "text"}
                    className={
                      errors.password
                        ? "error form-control form-control-appended"
                        : "form-control form-control-appended"
                    }
                    placeholder="Enter your password"
                    defaultValue={password}
                    onChange={handleInputChange}
                    name="password"
                  />

                  <div className="input-group-append">
                    <span
                      className={
                        errors.password
                          ? "error input-group-text"
                          : "input-group-text"
                      }
                      onClick={showPassword}
                    >
                      <i className="fe fe-eye" />
                    </span>
                  </div>
                </div>
                {errors.password && (
                  <span className="text-danger">{errors.password}</span>
                )}
              </div>

              <button className="btn btn-primary btn-block mb-3">
                {isLoading && (
                  <span className="spinner-border spinner-border-sm" />
                )}{" "}
                {isLoading ? `Just a little bit...` : `Sign in`}
              </button>

              <div className="text-center">
                <small className="text-muted text-center">
                  Don't have an account yet?{" "}
                  <Link to={Routes.signup}>Sign up</Link>.
                </small>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default SignIn;
