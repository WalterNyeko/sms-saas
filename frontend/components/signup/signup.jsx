import React from "react";
import { setBodyClasses } from "../../util/common_util";

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setBodyClasses(this.props.location.pathname);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-md-5 col-lg-6 col-xl-4 px-lg-6 my-5">
            <h1 className="display-4 text-center mb-3">Sign up</h1>
            <p className="text-muted text-center mb-5">
              Free access to our dashboard.
            </p>
            <form>
              <div className="form-row">
                <div className="col-12 col-md-6 mb-3">
                  <label for="validationServer01">First name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    value="Mark"
                    required=""
                  />
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <label for="validationServer02">Last name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="validationServer02"
                    placeholder="Last name"
                    value="Otto"
                    required=""
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="name@address.com"
                />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <div className="input-group input-group-merge">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your password"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="col-12 col-md-6 mb-3">
                  <label for="validationServer01">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="password"
                    required=""
                  />
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <label for="validationServer02">Confirm Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="confirm password"
                    required=""
                  />
                </div>
              </div>
              <button className="btn btn-lg btn-block btn-primary mb-3">
                Sign up
              </button>
              <div className="text-center">
                <small className="text-muted text-center">
                  Already have an account?{" "}
                  <a href="sign-in-cover.html">Log in</a>.
                </small>
              </div>
            </form>
          </div>
          <div className="col-12 col-md-7 col-lg-6 col-xl-8 d-none d-lg-block">
            <div
              className="bg-cover vh-100 mt-n1 mr-n3"
              style="background-image: url(assets/img/covers/auth-side-cover.jpg);"
            />
          </div>
        </div>
      </div>
    );
  }
}
