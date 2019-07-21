import { connect } from "react-redux";
import Header from "./header";
import { withRouter } from "react-router-dom";
import React, { Component } from "react";

const mapStateToProps = state => ({
  loggedInUser: state.authRequest
});

const mapDispatchToProps = dispatch => ({});

class header_container extends Component {
  render() {
    return (
      <div>
        <Header {...this.props} />
      </div>
    );
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(header_container)
);
