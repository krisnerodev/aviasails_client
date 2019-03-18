import React, {Component} from "react";
import withStyles from "react-jss";
import {ErrorsInfoHelper} from "./errors-info-helper";
import Typography from "../typography/typography";
import ErrorScale from "./error-scale";
import {ErrorInfoConstants} from "./constants";
import _ from "lodash";

class ErrorsInfo extends Component {

  renderErrorStats = (mainErrors, otherErrors) => {
    const {classes} = this.props;
    return (
      <div className={classes.flexContainer}>
        {mainErrors.map((error, index) => this.renderError(error, ErrorInfoConstants.mainErrorsColors[index], index))}
        {this.renderError(otherErrors, ErrorInfoConstants.otherErrorsColor)}
      </div>
    );
  };

  renderError = (error, color, index) => {
    const {classes} = this.props;
    const {code, count = 0} = error;
    const errorInfo = code ? `Error ${code}: ${count}` : `Other: ${count}`;
    if (!count) return null;
    return (
      <div
        className={classes.errorContainer}
        key={index}
      >
        {this.renderSquare(color)}

        <Typography
          variant='body1'
        >
          {errorInfo}
        </Typography>
      </div>
    );
  };

  renderSquare = (color) => {
    const style = {
      background: color,
      width: "10px",
      height: "10px",
      minWidth: "10px",
      minHeight: "10px",
      borderRadius: "2px",
      marginRight: "10px",
      marginTop: "4px"
    };
    return <div style={style}/>;
  };

  render () {
    const {classes, serverErrors = []} = this.props;
    const preparedErrors = ErrorsInfoHelper.getPreparedErrors(serverErrors);
    const {mainErrors = [], otherErrors = {}} = preparedErrors;
    const totalErrorsCount = ErrorsInfoHelper.getTotalErrorCount(mainErrors, otherErrors);
    if (_.isEmpty(mainErrors) && _.isEmpty(otherErrors)) return null;
    return (
      <div className={classes.mainContainer}>
        <ErrorScale
          totalErrorsCount={totalErrorsCount}
          mainErrors={mainErrors}
          otherErrors={otherErrors}
        />
        {this.renderErrorStats(mainErrors, otherErrors)}
      </div>
    );
  }
}

const styles = {
  mainContainer: {
    marginTop: "15px"
  },
  paddingBottom24: {
    paddingBottom: "24px"
  },
  flexContainer: {
    display: "flex",
    alignItems: "center"
  },
  errorContainer: {
    display: "flex",
    width: "20%"
  }
};

export default withStyles(styles)(ErrorsInfo);