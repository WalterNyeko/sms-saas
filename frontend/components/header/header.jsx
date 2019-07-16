import React from "react";
import { isHeadlessPage } from "../../util/common_util";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pathname: "" };
  }

  componentDidMount() {
    if (this.props.location.pathname === "/") {
      this.props.history.push("/signin");
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
    if (isHeadlessPage(this.state.pathname)) {
      return <div />;
    } else {
      return (
        <div className="header">
          <div className="container-fluid">
            <div className="header-body">
              <div className="row align-items-end">
                <div className="col">
                  <h6 className="header-pretitle">Overview</h6>
                  <h1 className="header-title">Welcome, Sammy</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
