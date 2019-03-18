import React, {Component} from "react";
import withStyles from "react-jss";

import Card from "./card/card";
import Typography from "./typography/typography";
import MetricsSorter from "./metrics-sorter/metrics-sorter";
import ProblemsAndAverageInfo from "./problems-and-average-info/problems-and-average-info";
import ErrorsInfo from "./errors-info/errors-info";
import AnalyticsInfo from "./analytics-info/analytics-info";

class Dashboard extends Component {

  renderServerNotAvailableMessage = () => {
    const {classes} = this.props;
    console.error("FETCH_DASHBOARD_ASYNC::Error");
    return (
      <Card>
        <Typography
          children="Server not available, please try again later"
          variant="h2"
          className={classes.paddingBottom24}
        />
      </Card>
    );
  };

  render () {
    const {
      classes,
      dashboardData = {},
      serverErrors,
      dataFetchError,
      timeInterval
    } = this.props;

    const {
      errors = 0,
      zeroes = 0,
      timeout = 0
    } = dashboardData;

    const average = (errors + zeroes + timeout / 3).toFixed(2); //todo not sure here
    if (dataFetchError) return this.renderServerNotAvailableMessage();

    return (
      <Card>
        <Typography
          children="Main metrics"
          variant="h2"
          className={classes.paddingBottom24}
        />
        <MetricsSorter/>
        <div className={classes.problemsAndAverageContainer}>
          <ProblemsAndAverageInfo
            label='Errors'
            percents={errors}
            averagePercents={average}
          />
          <ProblemsAndAverageInfo
            label='Zeroes'
            percents={zeroes}
            averagePercents={average}
          />
          <ProblemsAndAverageInfo
            label='Timeouts'
            percents={timeout}
            averagePercents={average}
          />
        </div>
        <ErrorsInfo serverErrors={serverErrors}/>
        <AnalyticsInfo
          dashboardData={dashboardData}
          timeInterval={timeInterval}
        />
      </Card>
    );
  }
}

const styles = {
  paddingBottom24: {
    paddingBottom: "24px"
  },
  problemsAndAverageContainer: {
    display: "flex"
  }
};

export default withStyles(styles)(Dashboard);