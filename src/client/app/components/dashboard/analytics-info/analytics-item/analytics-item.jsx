import React, {Component} from "react";
import AnalyticsBadge from "../badges/analytics-badge";
import withStyles from "react-jss";
import WeekAnalytic from "./../week-analytic/week-analytic";
import PropTypes from "prop-types";
import DetailedInfo from "../detailed-info/detailed-info";
import moment from "moment";

class AnalyticsItem extends Component {

  static propTypes = {
    iconType: PropTypes.string,
    label: PropTypes.string,
    dashboardData: PropTypes.object,
    isNegativeAnalytics: PropTypes.bool,
    currentValue: PropTypes.number,
    previousValue: PropTypes.number,
    currentDataLabel: PropTypes.string
  };

  renderSeparateLine = () => {
    const {classes} = this.props;
    return <hr className={`${classes.lineStyle} hideLastChild`}/>;
  };

  getDataForLabels = (timeInterval) => {
    const format = {
      lastDay: "[Yesterday]",
      sameDay: "[Today]",
      nextDay: "[Tomorrow]",
      lastWeek: "[last] dddd",
      nextWeek: "dddd",
      sameElse: "L"
    };
    if (timeInterval === "yesterday") {
      return {
        currentDateLabel: "Yesterday",
        previousDateLabel: moment().day(-1).calendar(null, format)
      };
    }
    if (timeInterval === "lastHour") {
      return {
        currentDateLabel: "Last hour",
        previousDateLabel: "Two hours ago"
      };
    }
    if (timeInterval === "last3Days") {
      return {
        currentDateLabel: "Last 3 days",
        previousDateLabel: moment().day(-6).calendar(null, format)
      };
    }
    return {currentDateLabel: timeInterval, previousDateLabel: `previous ${timeInterval}`};
  };

  render () {
    const {
      classes,
      className,
      iconType,
      label,
      dashboardData,
      percents,
      isNegativeAnalytics,
      currentValue,
      previousValue,
      timeInterval
    } = this.props;

    const labels = this.getDataForLabels(timeInterval);
    return (
      <div className={className}>

        <div className={classes.flexContainer}>
          <div className={classes.badgeContainer}>
            <AnalyticsBadge
              iconType={iconType}
              isNegativeAnalytics={isNegativeAnalytics}
            />
          </div>
          <div className={classes.mainInformationContainer}>
            <div className={classes.flexContainer}>
              <WeekAnalytic
                percents={percents}
                headline={label}
                dashboardData={dashboardData}
                currentValue={currentValue}
                previousValue={previousValue}
                labels={labels}
              />
              <DetailedInfo infoType={label}/>
            </div>
            {this.renderSeparateLine()}
          </div>
        </div>

      </div>
    );
  }
}

const styles = {
  badgeContainer: {
    marginBottom: "18px",
    minHeight: "138px"
  },
  flexContainer: {
    display: "flex"
  },
  mainInformationContainer: {
    width: "100%",
    paddingLeft: "20px",
    height: "100%",
    marginTop: "-4px"
  },
  lineStyle: {
    marginTop: "20px",
    marginBottom: "24px",
    background: "#EFF1F4",
    height: "1px",
    border: "none"
  }
};

export default withStyles(styles)(AnalyticsItem);

