import React, {Component} from "react";
import PropTypes from "prop-types";
import Typography from "../../typography/typography";
import withStyles from "react-jss";

class WeekAnalytic extends Component {
  static propTypes = {
    headline: PropTypes.string,
    previousValue: PropTypes.number,
    currentValue: PropTypes.number,
    dashboardData: PropTypes.object,
    labels: PropTypes.object
  };

  renderLabelSection = () => {
    const {headline, classes} = this.props;

    return (
      <div className={classes.headlineContainer}>
        <Typography
          variant='h3'
        >
          {headline}
        </Typography>
        {this.renderBadge()}
      </div>
    );
  };

  renderBadge = () => {
    const {classes, percents} = this.props;
    const badgeStyle = percents < 0 ? classes.negativeBadge : classes.badgeStyle;
    if (!percents) return null;

    return (
      <div className={badgeStyle}>
        <Typography
          variant='body1'
          className={classes.badgeText}
        >
          {percents}%
        </Typography>
      </div>
    );
  };

  renderCurrentValues = (value, label, isPreviousValue) => {
    const {classes} = this.props;
    const textColorStyle = isPreviousValue ? classes.previousValueTextStyle : "";
    const preparedValue = parseInt(value).toLocaleString();

    return (
      <div className={classes.labelContainer}>
        <Typography
          variant='subtitle'
          className={textColorStyle}
        >
          {preparedValue}
        </Typography>
        <Typography
          variant='body1'
          className={`${textColorStyle} ${classes.marginLeft10}`}
        >
          {label}
        </Typography>
      </div>
    );
  };

  renderSectionStatistic = () => {
    const {
      classes,
      currentValue,
      previousValue,
      labels
    } = this.props;
    const {currentDateLabel = "", previousDateLabel = ""} = labels;
    return (
      <div>
        {this.renderCurrentValues(currentValue, currentDateLabel)}
        {this.renderCurrentValues(previousValue, previousDateLabel, true)}
      </div>
    );
  };

  render () {
    const {classes} = this.props;
    return (
      <div className={classes.analyticContainer}>
        {this.renderLabelSection()}
        {this.renderSectionStatistic()}
      </div>
    );
  }
}

const badgeStyle = {
  marginLeft: "8px",
  background: "#8BC34A",
  borderRadius: "20px",
  height: "18px",
  position: "relative",
  padding: "0 6px"
};

const styles = {
  badgeStyle,
  negativeBadge: {
    ...badgeStyle,
    background: "#FF6A67"
  },
  badgeText: {
    fontWeight: "600",
    color: "#fff"
  },
  labelContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: "8px"
  },
  headlineContainer: {
    display: "flex",
    alignItems: "center"
  },
  analyticContainer: {
    display: "flex",
    flexDirection: "column",
    width: "40%"
  },
  flexContainer: {
    display: "flex"
  },
  previousValueTextStyle: {
    color: "#A0B0B9"
  },
  marginLeft10: {
    marginLeft: "10px"
  }
};

export default withStyles(styles)(WeekAnalytic);