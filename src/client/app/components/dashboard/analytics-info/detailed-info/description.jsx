import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";
import Typography from "../../typography/typography";
import withStyles from "react-jss";

class Description extends Component {
  static propTypes = {
    description: PropTypes.string
  };

  render () {
    const {classes, description} = this.props;
    return (
      <Typography
        variant='body1'
        className={classes.textColor}
      >
        {description}
      </Typography>
    );
  }
}

const styles = {
  textColor: {
    color: "#A0B0B9",
    marginBottom: "6px"
  }
};
export default withStyles(styles)(Description);