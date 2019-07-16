import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    background: "none",
    marginRight: "-50%",
    border: "0",
    transform: "translate(-50%, -50%)"
  }
};

export default class LoadingSpinner extends React.Component {
  constructor() {
    super();

    this.state = {
      modelIsOpen: false
    };
  }

  componentDidMount() {
    window.util.initSpinningWheel(this);
  }

  toggleSpinner = show => {
    if (this.refs.spinner) {
      this.setState({ modelIsOpen: show });
    }
  };

  render() {
    return (
      <Modal ref="spinner" isOpen={this.state.modelIsOpen} style={customStyles} contentLabel="Loading Spinner">
        <div id="loading-spinner">
          <img src="../../stylesheets/assets/loading.gif" />
        </div>
      </Modal>
    );
  }
}
