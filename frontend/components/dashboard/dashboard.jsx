import React from "react";

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
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
                    <span className="h2 mb-0">$24,500</span>
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
                    <span className="h2 mb-0">12</span>
                  </div>
                  <div className="col-auto">
                    <span className="h2 fe fe-zap text-muted mb-0" />
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
                        <span className="h2 mr-2 mb-0">2,908</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <span className="h2 fe fe-zap-off text-muted mb-0" />
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
                    <span className="h2 mb-0">45678,799</span>
                  </div>
                  <div className="col-auto">
                    <span className="h2 fe fe-clock text-muted mb-0" />
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
                <table className="table table-sm table-nowrap card-table">
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
                  <tbody className="list">
                    <tr>
                      <td>5 July 2019</td>
                      <td>DSFDGFHGJHKJLK34545678</td>
                      <td>Delivered</td>
                      <td>NGN0.02</td>
                      <td>SLSBank</td>
                      <td>+2348107176019</td>
                    </tr>
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
