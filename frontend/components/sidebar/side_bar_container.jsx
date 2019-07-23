import { connect } from "react-redux";
import SideBar from "./side_bar";
import { withRouter } from "react-router-dom";

const mapStateToProps = state => ({
  messages: state.recentMessages
});

const mapDispatchToProps = dispatch => ({});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SideBar)
);
