import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";
import Typography from "../typography/typography";
import withStyles from "react-jss";

class ProblemsAndAverageInfo extends Component {
  static propTypes = {
    label: PropTypes.string,
    percents: PropTypes.number,
    averagePercents: PropTypes.string
  };

  static defaultProps = {
    label: "Errors",
    percents: "0",
    averagePercents: "0"
  };

  render () {
    const {
      label,
      percents,
      classes,
      averagePercents
    } = this.props;

    if (!percents) return null;
    const preparedPercents = percents.toFixed(2);
    return (
      <div className={classes.rootContainer}>
        <div className={classes.bullet}/>

        <div className={classes.infoContainer}>
          <Typography
            variant='h3'
          >
            {label}: {preparedPercents}%
          </Typography>
          <Typography
            variant='body1'
            className={classes.averageText}
          >
            Average: {averagePercents} %
          </Typography>
        </div>
      </div>
    );
  }
}

const styles = {
  rootContainer: {
    display: "flex",
    width: "33%"
  },
  infoContainer: {
    display: "flex",
    flexDirection: "column"
  },
  container: {
    display: "flex",
    alignItems: "center"
  },
  bullet: {
    height: "10px",
    width: "10px",
    borderRadius: "100%",
    background: "#8BC34A",
    marginRight: "5px",
    marginTop: "8px"
  },
  averageText: {
    color: "#A0B0B9"
  }
};

export default withStyles(styles)(ProblemsAndAverageInfo);