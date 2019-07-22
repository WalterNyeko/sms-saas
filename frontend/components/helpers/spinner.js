import React, { Component, Fragment } from "react";

class Spinner extends Component {
  render() {
    return (
      <div>
        <div
          className="spinner-grow text-info d-flex justify-content-center"
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
}
export default Spinner;
