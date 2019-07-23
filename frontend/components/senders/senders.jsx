import React, { Component } from "react";
import LinearProgress from "@material-ui/core/LinearProgress";
import { formatDate } from "../helpers/index";

class senders extends Component {
  render() {
    const { senderIDs, isLoading } = this.props;
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-xl-12">
            <div className="card">
              <div className="card-header">
                <div className="row align-items-center">
                  <div className="col">
                    <h4 className="card-header-title">All Our Senders</h4>
                  </div>
                  <div className="col-auto">
                    <a href="#!" className="btn btn-sm btn-white">
                      See all log..
                    </a>
                  </div>
                </div>
              </div>
              <div className="table-responsive mb-0">
                {isLoading && <LinearProgress />}

                <table className="table table-sm table-nowrap card-table">
                  {!isLoading && (
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Sender ID</th>
                        <th>Status</th>
                        <th>Comment</th>
                        <th>Date Created</th>
                        <th>Last Updated</th>
                        <th />
                      </tr>
                    </thead>
                  )}
                  <tbody className="list">
                    {!isLoading && senderIDs && senderIDs.length
                      ? senderIDs.map(
                          ({
                            id,
                            sender_id,
                            comment,
                            status,
                            created_at,
                            updated_at
                          }) => (
                            <tr>
                              <td>{id}</td>
                              <td>{sender_id}</td>
                              <td>{status}</td>
                              <td>{comment}</td>
                              <td>{formatDate(created_at)}</td>
                              <td>{formatDate(updated_at)}</td>
                            </tr>
                          )
                        )
                      : ""}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default senders;
