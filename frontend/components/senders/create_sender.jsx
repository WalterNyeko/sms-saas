import React, { Component } from "react";

class create_sender extends Component {
  render() {
    const {
      state: { senderId, comments, errors },
      handleInputChange,
      createSender,
      isLoading
    } = this.props;
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-xl-6 my-5">
            <h1 className="display-4 text-center mb-3">Create Sender ID</h1>

            <form>
              <div className="form-group">
                <label>Sender Id</label>
                <input
                  type="text"
                  className={
                    errors.senderId ? "error form-control" : "form-control"
                  }
                  placeholder="Enter Sender Id"
                  defaultValue={senderId}
                  onChange={handleInputChange}
                  name="senderId"
                />
                {errors.senderId && (
                  <span className="text-danger">{errors.senderId}</span>
                )}
              </div>
              <div className="form-group">
                <div className="row">
                  <div className="col">
                    <label>Comments</label>
                  </div>
                </div>
                <div className="input-group input-group-merge">
                  <textarea
                    className={
                      errors.comments
                        ? "error form-control rounded-0"
                        : "form-control rounded-0"
                    }
                    placeholder="Comments..."
                    defaultValue={comments}
                    onChange={handleInputChange}
                    name="comments"
                    rows="3"
                  />
                </div>
                {errors.comments && (
                  <span className="text-danger">{errors.comments}</span>
                )}
              </div>
              <div className="row">
                <div className="col-md-6">
                  <button
                    className="btn btn-secondary btn-block mb-3"
                    onClick={createSender}
                  >
                    Cancel
                  </button>
                </div>
                <div className="col-md-6">
                  <button
                    className="btn btn-primary btn-block mb-3"
                    onClick={createSender}
                  >
                    {isLoading && (
                      <span className="spinner-border spinner-border-sm" />
                    )}{" "}
                    {isLoading ? `Creating...` : `Create Sender`}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default create_sender;
