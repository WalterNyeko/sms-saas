import { connect } from "react-redux";
import Dashboard from "./dashboard";
import { withRouter } from "react-router-dom";
import React, { Component } from "react";

const mapStateToProps = state => ({
  loggedInUser: state.authRequest
});

const mapDispatchToProps = dispatch => ({});

class dashboard_container extends Component {
  render() {
    const {
      currentUser: { token, username }
    } = this.props.loggedInUser;
    return (
      <div>
        <Dashboard user={username}/>
      </div>
    );
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(dashboard_container)
);
