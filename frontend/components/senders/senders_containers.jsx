import React, { Component } from "react";
import { connect } from "react-redux";
import Senders from "./senders";
import { getSenders } from "../actions/senders/senders";

class senders_containers extends Component {
  componentWillMount() {
    const { getSenders } = this.props;
    getSenders();
  }
  render() {
    const {
      senders: { senderIDs },
      auth: { isLoading }
    } = this.props;
    return (
      <div>
        <Senders senderIDs={senderIDs} isLoading={isLoading} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  senders: state.senderReducer,
  auth: state.authRequest
});
export default connect(
  mapStateToProps,
  { getSenders }
)(senders_containers);
