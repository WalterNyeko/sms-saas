import React from "react";
import { isHeadlessPage } from "../../util/common_util";
import history from "../../components/helpers/history";
import Routes from "../helpers/routes";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pathname: "" };
  }

  componentDidMount() {
    if (this.props.location.pathname === `${Routes.landing}`) {
      history.push(`${Routes.signin}`);
    }
    this.setState({ pathname: this.props.location.pathname });
  }

  componentWillReceiveProps(newProps) {
    if (
      newProps.location &&
      newProps.location.pathname != this.props.location.pathname
    ) {
      this.setState({ pathname: newProps.location.pathname });
    }
  }

  render() {
    const {
      currentUser: { username }
    } = this.props.loggedInUser;
    if (isHeadlessPage(this.state.pathname)) {
      return <div />;
    } else {
      return (
        <div className="header">
          <div className="container-fluid">
            <div className="header-body">
              <div className="row align-items-end">
                <div className="col">
                  <h1 className="header-title">
                    Welcome,{" "}
                    {username
                      ? username
                      : this.props.loggedInUser.userDetails.username}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
