import React, {Component} from "react";
import withStyles from "react-jss";
import {ActionCreatorHelper} from "./../../../action-creators/action-creator-helper";
import {connect} from "react-redux";

class MetricsSorter extends Component {

  componentDidMount () {
    const {requestedDashboard} = this.props;
    requestedDashboard("lastHour");
  }

  generateButtons = () => {
    const {requestedDashboard} = this.props;
    return [
      {
        label: "Last hour",
        handler: () => requestedDashboard("lastHour")
      },
      {
        label: "Today",
        handler: () => requestedDashboard("lastHour")//todo we don't has data for today
      },
      {
        label: "Yesterday",
        handler: () => requestedDashboard("yesterday")
      },
      {
        label: "Last 3 days",
        handler: () => requestedDashboard("last3Days")
      }
    ];
  };

  state = {
    activeButton: 0
  };

  onMetricsButtonClick = (index, handler) => {
    this.setState({activeButton: index});
    handler();
  };

  renderButton = (item, index) => {
    const {classes} = this.props;
    const {label, handler} = item;
    const {activeButton} = this.state;
    const className = activeButton === index ? classes.metricButtonActive : classes.metricButton;
    return (
      <div
        className={className}
        onClick={() => this.onMetricsButtonClick(index, handler)}
        key={index}
      >
        {label}
      </div>
    );
  };

  renderButtons = () => {
    const buttons = this.generateButtons();
    return buttons.map(this.renderButton);
  };

  render () {
    const {classes} = this.props;
    return (
      <div className={classes.metricsSorterContainer}>
        {this.renderButtons()}
      </div>
    );
  }
}

const metricButton = {
  background: "#fff",
  border: "1px solid #D9D9D9",
  padding: "8px 16px",
  minWidth: "96px",
  display: "flex",
  justifyContent: "center",
  color: "#4A4A4A",
  lineHeight: "17px",
  fontSize: "14px",
  fontFamily: "'Open Sans', sans-serif",
  cursor: "pointer",
  userSelect: "none",
  maxHeight: '32px',
  "&:first-child": {
    borderTopLeftRadius: "6px",
    borderBottomLeftRadius: "6px"
  },
  "&:last-child": {
    borderTopRightRadius: "6px",
    borderBottomRightRadius: "6px"
  }
};

const styles = {
  metricsSorterContainer: {
    display: "flex",
    marginBottom: "44px"
  },
  metricButton,
  metricButtonActive: {
    ...metricButton,
    background: "#2196F3",
    border: "1px solid #2196F3",
    color: "#fff"
  }
};

const state = (state) => ({state});
const dispatch = (dispatch) => ({
  requestedDashboard: (infoDate) => dispatch(ActionCreatorHelper.fetchDashboard(infoDate))
});

export default withStyles(styles)(connect(state, dispatch)(MetricsSorter));

