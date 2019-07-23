import React from "react";
import LinearProgress from "@material-ui/core/LinearProgress";

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const {
      isLoading,
      recentMessages,
      availableBalance,
      userDetails: { total_message_sent, failed_message }
    } = this.props;

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-lg-6 col-xl">
            <div className="card">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col">
                    <h6 className="card-title text-uppercase text-muted mb-2">
                      account balance
                    </h6>
                    <span className="h2 mb-0">
                      {availableBalance.currentBalance >= 0
                        ? `${availableBalance.currency.displaySymbol} ${
                            availableBalance.currentBalance
                          }`
                        : "Unknown"}
                    </span>
                  </div>
                  <div className="col-auto">
                    <span className="h2 fe fe-dollar-sign text-muted mb-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl">
            <div className="card">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col">
                    <h6 className="card-title text-uppercase text-muted mb-2">
                      sent messages
                    </h6>
                    <span className="h2 mb-0">
                      {recentMessages ? recentMessages.length : "Unknown"}
                    </span>
                  </div>
                  <div className="col-auto">
                    <span className="h2 fe fe-zap  text-success mb-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl">
            <div className="card">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col">
                    <h6 className="card-title text-uppercase text-muted mb-2">
                      failed messages
                    </h6>

                    <div className="row align-items-center no-gutters">
                      <div className="col-auto">
                        <span className="h2 mr-2 mb-0">
                          {failed_message ? failed_message : "Unknown"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <span className="h2 fe fe-zap-off mb-0 text-danger" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl">
            <div className="card">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col">
                    <h6 className="card-title text-uppercase text-muted mb-2">
                      Total message sent
                    </h6>
                    <span className="h2 mb-0">
                      {total_message_sent ? total_message_sent : "Unknown"}
                    </span>
                  </div>
                  <div className="col-auto">
                    <span className="h2 fe fe-clock  text-primary mb-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-xl-12">
            <div className="card">
              <div className="card-header">
                <div className="row align-items-center">
                  <div className="col">
                    <h4 className="card-header-title">Recent Messages</h4>
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
                        <th>date</th>
                        <th>message reference</th>
                        <th>Status</th>
                        <th>Cost</th>
                        <th>sender id</th>
                        <th>recipeint</th>
                        <th />
                      </tr>
                    </thead>
                  )}
                  <tbody className="list">
                    {!isLoading && recentMessages && recentMessages.length
                      ? recentMessages.map(
                          ({
                            id,
                            created_at,
                            mesage_refernce,
                            status,
                            cost,
                            send_id,
                            receiver_number
                          }) => (
                            <tr key={id}>
                              <td>{created_at}</td>
                              <td>{mesage_refernce}</td>
                              <td>{status}</td>
                              <td>{cost}</td>
                              <td>{send_id}</td>
                              <td>{receiver_number}</td>
                            </tr>
                          )
                        )
                      : null}
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
