import React from "react";
import { setBodyClasses } from "../../util/common_util";
import "../../../assets/css/main.css";
import backgroundPicture from "../../../assets/img/covers/auth-side-cover.jpg";
import { NavLink } from "react-router-dom";
import PhoneCode from "react-phone-code";
import Routes from "../../components/helpers/routes";
export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      signUp,
      handleInputChange,
      state: {
        email,
        phone,
        firstName,
        lastName,
        password,
        confirmPassword,
        countryCode,
        username,
        company,
        errors
      },
      isLoading,
      setCountryCode
    } = this.props;
    return (
      <div className="container-fluid">
        <div className="row align-items-center justify-content-center">
          <div className="col-12 col-md-5 col-lg-6 col-xl-4 px-lg-6">
            <h1 className="display-4 text-center mb-3">Sign up</h1>
            <p className="text-muted text-center mb-3">
              Free access to our dashboard.
            </p>
            <form onSubmit={signUp}>
              <div className="form-row">
                <div className="col-12 col-md-6 mb-3">
                  <label htmlFor="validationServer01">
                    First Name<sup className="text-danger h5">*</sup>
                  </label>
                  <input
                    type="text"
                    className={
                      errors.firstName ? `error form-control` : `form-control`
                    }
                    placeholder="First Name"
                    defaultValue={firstName}
                    name="firstName"
                    onChange={handleInputChange}
                  />
                  {errors.firstName && (
                    <span className="text-danger">{errors.firstName}</span>
                  )}
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <label htmlFor="validationServer02">
                    Last Name<sup className="text-danger h5">*</sup>
                  </label>
                  <input
                    type="text"
                    className={
                      errors.lastName ? `error form-control` : `form-control`
                    }
                    id="validationServer02"
                    placeholder="Last Name"
                    defaultValue={lastName}
                    name="lastName"
                    onChange={handleInputChange}
                  />
                  {errors.lastName && (
                    <span className="text-danger">{errors.lastName}</span>
                  )}
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="validationServer02">
                  Username<sup className="text-danger h5">*</sup>
                </label>
                <input
                  type="text"
                  className={
                    errors.username ? `error form-control` : `form-control`
                  }
                  id="validationServer02"
                  placeholder="Username"
                  defaultValue={username}
                  name="username"
                  onChange={handleInputChange}
                />
                {errors.username && (
                  <span className="text-danger">{errors.username}</span>
                )}
              </div>

              <div className="form-row">
                <div className="col-12 col-md-6 mb-3">
                  <label>
                    Phone Number<sup className="text-danger h5">*</sup>
                  </label>
                  <div className="input-group input-group-merge">
                    <input
                      type="text"
                      className={
                        errors.phone ? `error form-control` : `form-control`
                      }
                      placeholder="Enter phone"
                      name="phone"
                      onChange={handleInputChange}
                      defaultValue={phone}
                    />
                    {errors.phone && (
                      <span className="text-danger">{errors.phone}</span>
                    )}
                  </div>
                </div>
                <div className="col-12 col-md-6 mb-3">
                  <label>
                    Company Name<sup className="text-danger h5">*</sup>
                  </label>
                  <div className="input-group input-group-merge">
                    <input
                      type="text"
                      className={
                        errors.company ? `error form-control` : `form-control`
                      }
                      placeholder="Company Name"
                      name="company"
                      onChange={handleInputChange}
                      defaultValue={company}
                    />
                    {errors.company && (
                      <span className="text-danger">{errors.company}</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label>
                  Email Address<sup className="text-danger h5">*</sup>
                </label>
                <input
                  type="email"
                  className={
                    errors.email ? `error form-control` : `form-control`
                  }
                  placeholder="Enter your email"
                  name="email"
                  onChange={handleInputChange}
                  defaultValue={email}
                />
                {errors.email && (
                  <span className="text-danger">{errors.email}</span>
                )}
              </div>
              <div className="form-row">
                <div className="col-12 col-md-6 mb-3">
                  <label htmlFor="validationServer01">
                    Password<sup className="text-danger h5">*</sup>
                  </label>
                  <input
                    type="password"
                    className={
                      errors.password ? `error form-control` : `form-control`
                    }
                    placeholder="Password"
                    name="password"
                    onChange={handleInputChange}
                    defaultValue={password}
                  />
                  {errors.password && (
                    <span className="text-danger">{errors.password}</span>
                  )}
                </div>

                <div className="col-12 col-md-6 mb-3">
                  <label htmlFor="validationServer02">
                    Confirm Password<sup className="text-danger h5">*</sup>
                  </label>
                  <input
                    type="password"
                    className={
                      errors.confirmPassword
                        ? `error form-control`
                        : `form-control`
                    }
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    onChange={handleInputChange}
                    defaultValue={confirmPassword}
                  />
                  {errors.confirmPassword && (
                    <span className="text-danger">
                      {errors.confirmPassword}
                    </span>
                  )}
                </div>
                <div className="col-12 col-md-12 mb-3">
                  <label htmlFor="validationServer02">
                    Select Country<sup className="text-danger h5">*</sup>
                  </label>
                  <PhoneCode
                    onSelect={code => setCountryCode(code)} // required
                    showFirst={["US", "IN"]}
                    defaultValue={countryCode}
                    id="some-id"
                    name="some-name"
                    className={
                      errors.countryCode ? `error form-control` : `form-control`
                    }
                    optionClassName="form-control"
                  />
                  {errors.countryCode && (
                    <span className="text-danger">{errors.countryCode}</span>
                  )}
                </div>
              </div>
              <button className="btn btn-primary btn-block mb-3">
                {isLoading && (
                  <span className="spinner-border spinner-border-sm" />
                )}{" "}
                {isLoading ? `Loading...` : `Sign Up`}
              </button>
              <div className="text-center">
                <small className="text-muted text-center">
                  Already have an account?{" "}
                  <NavLink to={Routes.signin}>Log in</NavLink>.
                </small>
              </div>
            </form>
          </div>
          <div className="col-12 col-md-7 col-lg-6 col-xl-8 d-none d-lg-block">
            <div
              className="bg-cover vh-100 mt-n1 mr-n3"
              style={{
                backgroundImage: `url(${backgroundPicture})`
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}
