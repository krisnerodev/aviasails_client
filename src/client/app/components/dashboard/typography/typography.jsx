import React, {Component} from "react";
import PropTypes from "prop-types";
import withStyles from "react-jss";

class Typography extends Component {
  static propTypes = {
    variant: PropTypes.string,
    classes: PropTypes.object
  };

  static defaultProps = {
    variant: "body1"
  };

  render () {
    const {
      classes,
      variant,
      className = ""
    } = this.props;

    const typographyClassName = classes[variant];
    const customClass = `${typographyClassName} ${className}`;
    return (
      <div className={customClass}>
        {this.props.children}
      </div>
    );
  }
}

const styles = {
  h2: {
    fontFamily: "'Open Sans', sans-serif",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "28px",
    fontSize: "22px",
    color: "#4A4A4A",
    wordBreak: "break-word"
  },
  h3: {
    fontFamily: "'Open Sans', sans-serif",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "28px",
    fontSize: "16px",
    color: "#4A4A4A",
    wordBreak: "break-word"
  },
  subtitle: {
    fontFamily: "'Open Sans', sans-serif",
    fontStyle: "normal",
    fontSize: "20px",
    lineHeight: "28px",
    color: "#4A4A4A",
    wordBreak: "break-word"
  },
  body1: {
    fontFamily: "'Open Sans', sans-serif",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "normal",
    fontSize: "12px",
    color: "#4A4A4A",
    wordBreak: "break-word"
  }
};

export default withStyles(styles)(Typography);