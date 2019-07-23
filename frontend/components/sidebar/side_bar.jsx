import React from "react";
import { isHeadlessPage } from "../../util/common_util";
import Routes from "../helpers/routes";
import { NavLink } from "react-router-dom";

export default class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    console.log(this.props);
    const {
      messages: { availableBalance }
    } = this.props;
    if (isHeadlessPage(this.props.location.pathname)) {
      return <div />;
    } else {
      return (
        <nav
          className="navbar navbar-vertical fixed-left navbar-expand-md navbar-light"
          id="sidebar"
        >
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#sidebarCollapse"
              aria-controls="sidebarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <a className="navbar-brand" href="index.html">
              <img
                src="assets/img/logo.svg"
                className="navbar-brand-img 
            mx-auto"
                alt="..."
              />
            </a>
            <div className="navbar-user d-md-none">
              <div className="dropdown">
                <a
                  href="#"
                  id="sidebarIcon"
                  className="dropdown-toggle"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <div className="avatar avatar-sm avatar-online">
                    <img
                      src="assets/img/avatars/profiles/avatar-1.jpg"
                      className="avatar-img rounded-circle"
                      alt="..."
                    />
                  </div>
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="sidebarIcon"
                >
                  <a href="profile-posts.html" className="dropdown-item">
                    Profile
                  </a>
                  <a href="settings.html" className="dropdown-item">
                    Settings
                  </a>
                  <hr className="dropdown-divider" />
                  <a href="sign-in.html" className="dropdown-item">
                    Logout
                  </a>
                </div>
              </div>
            </div>
            <div className="collapse navbar-collapse" id="sidebarCollapse">
              <form className="mt-4 mb-3 d-md-none">
                <div className="input-group input-group-rounded input-group-merge">
                  <input
                    type="search"
                    className="form-control form-control-rounded form-control-prepended"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                      <span className="fe fe-search" />
                    </div>
                  </div>
                </div>
              </form>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" to={Routes.dashboard}>
                    <i className="fe fe-home" /> Dashboards
                  </NavLink>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#sidebarDashboards"
                    data-toggle="collapse"
                    role="button"
                    aria-expanded="true"
                    aria-controls="sidebarDashboards"
                  >
                    <i className="fe fe-user" /> Sender ID
                  </a>
                  <div className="collapse" id="sidebarDashboards">
                    <ul className="nav nav-sm flex-column">
                      <li className="nav-item">
                        <NavLink
                          to={Routes.createSenders}
                          className="nav-link "
                        >
                          Create Sender ID
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink to={Routes.senders} className="nav-link">
                          All Sender ID
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="">
                    <i className="fe fe-activity" /> Message Logs
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="">
                    <i className="fe fe-cpu" /> Authentication
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#sidebarFinance"
                    data-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    aria-controls="sidebarFinance"
                  >
                    <i className="fe fe-dollar-sign" /> Finance
                  </a>
                  <div className="collapse" id="sidebarFinance">
                    <ul className="nav nav-sm flex-column">
                      <li className="nav-item">
                        <a href="" className="nav-link ">
                          Top Up
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="" className="nav-link">
                          Payment History
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              <hr className="navbar-divider my-3" />
              <h6 className="navbar-heading">Documentation</h6>
              <ul className="navbar-nav mb-md-4">
                <li className="nav-item">
                  <a className="nav-link " href="">
                    <i className="fe fe-clipboard" /> Getting started
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="">
                    <i className="fe fe-message-circle" /> Support
                  </a>
                </li>
              </ul>
              <div className="mt-auto" />
              <h2 className="text-center text-muted">
                {availableBalance.currentBalance >= 0
                  ? `${availableBalance.currency.displaySymbol} ${
                      availableBalance.currentBalance
                    }`
                  : "Unknown"}
              </h2>
              <p className="text-center small text-muted mb-3">
                Current Balance
              </p>
              <div className="navbar-user d-none d-md-flex" id="sidebarUser">
                <a
                  href="#sidebarModalActivity"
                  className="navbar-user-link"
                  data-toggle="modal"
                >
                  <span className="icon">
                    <i className="fe fe-bell" />
                  </span>
                </a>
                <div className="dropup">
                  <a
                    href="#"
                    id="sidebarIconCopy"
                    className="dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <div className="avatar avatar-sm avatar-online">
                      <img
                        src="assets/img/avatars/profiles/avatar-1.jpg"
                        className="avatar-img rounded-circle"
                        alt="..."
                      />
                    </div>
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="sidebarIconCopy"
                  >
                    <a href="profile-posts.html" className="dropdown-item">
                      Profile
                    </a>
                    <a href="settings.html" className="dropdown-item">
                      Settings
                    </a>
                    <hr className="dropdown-divider" />
                    <a href="sign-in.html" className="dropdown-item">
                      Logout
                    </a>
                  </div>
                </div>
                <a
                  href="#sidebarModalSearch"
                  className="navbar-user-link"
                  data-toggle="modal"
                >
                  <span className="icon">
                    <i className="fe fe-search" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </nav>
      );
    }
  }
}
