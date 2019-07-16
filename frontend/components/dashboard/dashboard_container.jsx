import { connect } from "react-redux";
import Dashboard from "./dashboard";
import { withRouter } from "react-router-dom";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Dashboard)
);
