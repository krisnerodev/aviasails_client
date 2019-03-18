import React, {Component} from "react";
import withStyles from "react-jss";

class Template extends Component {
  static propTypes = {};

  static defaultProps = {};

  render () {
    const {classes} = this.props;
    return (
      <div className={classes.cardContainer}>
        <div className={classes.card}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

const styles = {
  cardContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "137px 0"
  },
  card: {
    background: "#fff",
    boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.15)",
    borderRadius: "10px",
    width: "778px",
    padding: "40px 39px 58px"
  }
};

export default withStyles(styles)(Template);