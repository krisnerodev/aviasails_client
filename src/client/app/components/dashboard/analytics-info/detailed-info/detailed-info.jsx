import React, {Component} from "react";
import PropTypes from "prop-types";
import Typography from "../../typography/typography";
import withStyles from "react-jss";
import Help from "./help";
import Description from "./description";
import {connect} from "react-redux";

class DetailedInfo extends Component {
  static propTypes = {
    infoType: PropTypes.string
  };

  renderSearchesDetailedInfo = () => {
    const links = [
      {linkLabel: "Searches", href: "/"},
      {linkLabel: "Pessimisation", href: "/"}
    ];
    const {classes, dashboardFullData = {}} = this.props;
    const {mobile_pessimizer = 0, web_pessimizer = 0} = dashboardFullData;

    const mobilPessimizer = mobile_pessimizer.toFixed(0);
    const webPessimizer = web_pessimizer.toFixed(0);
    const description = `You get ${mobilPessimizer}% traffic on mobile and ${webPessimizer} traffic on desktop devices.`;
    return (
      <div className={classes.detailedInfoContainer}>
        <div className={classes.headlineContainer}>
          <Typography variant='h3'>
            Mobile Traffic: {mobilPessimizer}%
          </Typography>
          <Typography variant='h3'>
            Web Traffic: {webPessimizer}%
          </Typography>
        </div>
        <Description
          description={description}
        />
        <Help links={links}/>
      </div>
    );
  };

  renderClicksDetailedInfo = () => {
    const links = [
      {linkLabel: "CTR", href: "/"},
      {linkLabel: "Clicks", href: "/"}
    ];
    const {classes, dashboardFullData = {}} = this.props;
    const {ctr = "0"} = dashboardFullData;

    const ctrPercents = typeof ctr === "number" ? ctr.toFixed(2) : ctr;
    const ctrStyle = ctr < 1 ? classes.ctrNegativeColor : classes.ctrPositiveColor;
    const description = "Conversion from searches  to clicks on all devices.";
    return (
      <div className={classes.detailedInfoContainer}>
        <div className={classes.headlineContainer}>
          <Typography
            variant='h3'
            className={ctrStyle}
          >
            CTR: {ctrPercents}%
          </Typography>
        </div>
        <Description
          description={description}
        />
        <Help links={links}/>
      </div>
    );
  };

  renderBookingDetailedInfo = () => {
    const links = [
      {linkLabel: "STR", href: "/"},
      {linkLabel: "Booking", href: "/"},
      {linkLabel: "Avg. Check", href: "/"}
    ];
    const {classes, dashboardFullData = {}} = this.props;

    const {str = "0", avg_price = "0"} = dashboardFullData;

    const strPercents = typeof str === "number" ? str.toFixed(2) : str;
    const avgPricePercents = typeof avg_price === "number" ? avg_price.toFixed(0) : avg_price;

    const description = "Conversion from cliks  to bookings on all devices.";
    return (
      <div className={classes.detailedInfoContainer}>
        <div className={classes.headlineContainer}>
          <Typography variant='h3'>
            STR: {strPercents || 0}%
          </Typography>
          <Typography variant='h3'>
            Avg. Check: {avgPricePercents}
          </Typography>
        </div>
        <Description
          description={description}
        />
        <Help links={links}/>
      </div>
    );
  };

  render () {
    const {infoType} = this.props;
    if (infoType === "Searches") return this.renderSearchesDetailedInfo();
    if (infoType === "Clicks") return this.renderClicksDetailedInfo();
    if (infoType === "Bookings") return this.renderBookingDetailedInfo();
  }
}

const styles = {
  detailedInfoContainer: {
    display: "flex",
    flexDirection: "column"
  },
  ctrPositiveColor: {
    color: "#8BC34A"
  },
  ctrNegativeColor: {
    color: "#FF6A67"
  },
  headlineContainer: {
    marginBottom: "6px"
  }
};
const state = (state) => ({
  dashboardFullData: state.data.data
});

export default withStyles(styles)(connect(state)(DetailedInfo));