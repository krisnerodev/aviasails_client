import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";
import {ErrorsInfoHelper} from "./errors-info-helper";
import {ErrorInfoConstants} from "./constants";
import withStyles from "react-jss";

class ErrorScale extends Component {
  static propTypes = {
    mainErrors: PropTypes.array,
    otherErrors: PropTypes.object,
    totalErrorsCount: PropTypes.number
  };

  renderScale = (error, color, index) => {
    const {totalErrorsCount} = this.props;
    const percents = (error.count / totalErrorsCount * 100).toFixed(3);
    const style = {
      backgroundColor: color,
      width: `${percents}%`,
      height: "8px"
    };
    return (
      <div key={index} style={style}/>
    );
  };

  render () {
    const {mainErrors, otherErrors, classes} = this.props;

    return (
      <div className={classes.scaleContainer}>
        {mainErrors.map((error, index) => this.renderScale(error, ErrorInfoConstants.mainErrorsColors[index], index))}
        {this.renderScale(otherErrors, ErrorInfoConstants.otherErrorsColor)}
      </div>
    );
  }
}

const styles = {
  scaleContainer: {
    display: "flex",
    marginBottom: "20px"
  }
};

export default withStyles(styles)(ErrorScale);