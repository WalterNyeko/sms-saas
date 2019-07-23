import React, { Component } from "react";
import { connect } from "react-redux";
import CreateSenders from "./create_sender";
import { createSender } from "../actions/senders/senders";

class create_sender_container extends Component {
  state = {
    comments: "",
    senderId: "",
    errors: {}
  };

  handleInputChange = event => {
    const {
      target: { name, value }
    } = event;
    this.setState({ [name]: value });
  };

  createSender = event => {
    event.preventDefault();
    const { comments, senderId } = this.state;
    if (!senderId) {
      const error = { senderId: "Please provide sender Id" };
      this.setState({ errors: error });
    } else if (!comments) {
      const error = { comments: "We would be pleased to have your comments" };
      this.setState({ errors: error });
    } else {
      this.setState({ errors: {} });
      const { createSender } = this.props;
      createSender({ senderId, comments });
    }
  };

  render() {
    const {
      auth: { isLoading }
    } = this.props;
    return (
      <div>
        <CreateSenders
          state={this.state}
          createSender={this.createSender}
          handleInputChange={this.handleInputChange}
          isLoading={isLoading}
        />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.authRequest
});
export default connect(
  mapStateToProps,
  { createSender }
)(create_sender_container);
