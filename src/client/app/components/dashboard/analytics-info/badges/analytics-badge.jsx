import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";
import withStyles from "react-jss";
import Cart from "../../icons/cart";
import Shape from "../../icons/shape";
import Tap from "../../icons/tap";
import Arrow from "../../icons/arrow";

class AnalyticsBadge extends Component {
  static propTypes = {
    iconType: PropTypes.string,
    value: PropTypes.number,
    parentClassName: PropTypes.string,
    isNegativeAnalytics: PropTypes.bool
  };

  static defaultProps = {
    value: 0
  };

  renderBullet = () => {
    const {classes, isNegativeAnalytics} = this.props;

    const className = isNegativeAnalytics ? classes.negativeBullet : classes.positiveBullet;
    return (
      <div className={className}/>
    );
  };

  renderBadgeIcon = () => {
    const {iconType} = this.props;
    if (iconType === "cart") return <Cart/>;
    if (iconType === "shape") return <Shape/>;
    if (iconType === "tap") return <Tap/>;
  };

  render () {
    const {classes} = this.props;
    return (
      <div className={classes.badgeContainer}>
        <div>
          {this.renderBullet(10)}
          <div className={classes.badgeIconContainer}>
            {this.renderBadgeIcon()}
          </div>
        </div>
        <Arrow/>
      </div>
    );
  }
}

const bulletStyle = {
  position: "absolute",
  minWidth: "12px",
  minHeight: "12px",
  height: "12px",
  width: "12px",
  right: "1px",
  top: "1px",
  border: "2px solid #FFFFFF",
  borderRadius: "100%"
};

const styles = {
  badgeContainer: {
    minWidth: "48px",
    minHeight: "48px",
    height: "48px",
    width: "48px",
    background: "#2196F3",
    borderRadius: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  positiveBullet: {
    ...bulletStyle,
    background: "#8BC34A"
  },
  negativeBullet: {
    ...bulletStyle,
    background: "#FF6A67"
  },
  badgeIconContainer: {
    position: "absolute",
    top: "60%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "2"
  }

};

export default withStyles(styles)(AnalyticsBadge);