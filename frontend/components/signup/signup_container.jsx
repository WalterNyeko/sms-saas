import { connect } from "react-redux";
import SignUp from "./signup";
import { withRouter } from "react-router-dom";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SignUp)
);
