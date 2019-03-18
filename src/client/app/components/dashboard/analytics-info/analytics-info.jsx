import React, {Component} from "react";
import PropTypes from "prop-types";
import withStyles from "react-jss";
import AnalyticsItem from "./analytics-item/analytics-item";

class AnalyticsInfo extends Component {
  static propTypes = {
    iconType: PropTypes.string,
    dashboardData: PropTypes.object,
    timeInterval: PropTypes.string
  };

  getPercents = (currentValue, previousValue) => {
    return Math.floor(currentValue / previousValue * 100 - 100);
  };

  render () {
    const {classes, dashboardData, timeInterval} = this.props;
    const {
      searches_current,
      searches_previous,
      clicks_current,
      clicks_previous,
      bookings_current,
      bookings_previous
    } = dashboardData;

    const searchPercents = this.getPercents(searches_current, searches_previous);
    const clicksPercents = this.getPercents(clicks_current, clicks_previous);
    const bookingsPercents = this.getPercents(bookings_current, bookings_previous);

    const isSearchAnalyticsNegative = searchPercents < 0;
    const isClicksAnalyticsNegative = searchPercents < 0;
    const isBookingsAnalyticsNegative = bookingsPercents < 0;
    return (
      <div
        className={classes.analyticsInfoContainer}
      >
        <AnalyticsItem
          iconType='shape'
          label='Searches'
          percents={searchPercents}
          isNegativeAnalytics={isSearchAnalyticsNegative}
          className={classes.analyticItem}
          dashboardData={dashboardData}
          currentValue={searches_current}
          previousValue={searches_previous}
          timeInterval={timeInterval}
        />
        <AnalyticsItem
          label='Clicks'
          iconType='tap'
          percents={clicksPercents}
          isNegativeAnalytics={isClicksAnalyticsNegative}
          className={classes.analyticItem}
          dashboardData={dashboardData}
          currentValue={clicks_current}
          previousValue={clicks_previous}
          timeInterval={timeInterval}
        />
        <AnalyticsItem
          iconType='cart'
          label='Bookings'
          percents={bookingsPercents}
          isNegativeAnalytics={isBookingsAnalyticsNegative}
          className={classes.analyticItem}
          dashboardData={dashboardData}
          currentValue={bookings_current}
          previousValue={bookings_previous}
          timeInterval={timeInterval}
        />
      </div>
    );
  }
}

const styles = {
  analyticsInfoContainer: {
    marginTop: "44px"
  },
  analyticItem: {
    "&:last-child .hideLastChild": {
      display: "none"
    }
  }
};

export default withStyles(styles)(AnalyticsInfo);
