import { connect } from "react-redux";
import Dashboard from "./dashboard";
import { withRouter } from "react-router-dom";
import React, { Component } from "react";
import {
  getRecentMessages,
  getAvailableBalance
} from "../actions/messages/messages";
import { getUserDetails } from "../actions/auth/auth";

const mapStateToProps = state => ({
  loggedInUser: state.authRequest,
  messages: state.recentMessages
});

const mapDispatchToProps = dispatch => ({});

class dashboard_container extends Component {
  componentWillMount() {
    const {
      getRecentMessages,
      getUserDetails,
      getAvailableBalance
    } = this.props;
    getRecentMessages();
    getUserDetails();
    getAvailableBalance();
  }

  render() {
    const {
      loggedInUser: { isLoading, userDetails },
      messages: { recentMessages, availableBalance }
    } = this.props;
    return (
      <div>
        <Dashboard
          recentMessages={recentMessages}
          isLoading={isLoading}
          userDetails={userDetails}
          availableBalance={availableBalance}
        />
      </div>
    );
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    { getRecentMessages, getUserDetails, getAvailableBalance }
  )(dashboard_container)
);
