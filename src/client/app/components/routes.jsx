import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Dashboard from "./dashboard/dashboard";
import {connect} from "react-redux";

class Routes extends Component {

  render () {
    const {dashboardFullData, dataFetchError} = this.props;
    const {errors, data, timeInterval} = dashboardFullData;
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() =>
              <Dashboard
                timeInterval={timeInterval}
                serverErrors={errors}
                dashboardData={data}
                dataFetchError={dataFetchError}
              />
            }
          />
        </Switch>
      </Router>
    );
  }
}

const state = (state) => ({
  dashboardFullData: state.data,
  dataFetchError: state.dataFetchError
});

export default connect(state)(Routes);