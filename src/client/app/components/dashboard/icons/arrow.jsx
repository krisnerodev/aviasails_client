import React, {Component} from "react";
import withStyles from "react-jss";

class Arrow extends Component {

  render () {
    const {classes} = this.props;
    return (
      <div className={`${classes.arrowContainer} hideLastChild`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="69" viewBox="0 0 10 69" fill="none">
          <path
            opacity="0.220392"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.24585 0.170441C8.0191 0.325897 6.76892 0.406006 5.5 0.406006C3.82874 0.406006 2.18994 0.267029 0.594543 0L3.84613 63.406H0L4.5 68.406L9 63.406H5.19232L9.24585 0.170441Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="9.24587"
              y1="68.406"
              x2="9.24587"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop
                stopColor="#2196F3"
              />
              <stop
                offset="1"
                stopColor="#A9D9FF"
              />
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }
}

const styles = {
  arrowContainer: {
    height: "58px",
    marginTop: "50px"
  }
};

export default withStyles(styles)(Arrow);