import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import withStyles from "react-jss";
import Typography from "../../typography/typography";

class Help extends Component {
  static propTypes = {
    links: PropTypes.array
  };

  renderLinks = () => {
    const {links} = this.props;
    return links.map(this.renderLink);
  };

  renderLink = (link, index, array) => {
    const {linkLabel, href} = link;
    const separator = array.length - 1 !== index ? ", " : "";
    return (
      <a
        href={href}
        key={index}
      >
        {linkLabel}{separator}
      </a>
    );
  };

  render () {
    const {links, classes} = this.props;
    if (_.isEmpty(links)) return null;
    return (
      <div className={classes.helpContainer}>
        <Typography variant='body1'>
          Help: {this.renderLinks()}
        </Typography>
      </div>
    );
  }
}

const styles = {
  linkStyle: {
    fontFamily: "'Open Sans', sans-serif",
    fontStyle: "normal",
    lineHeight: "normal",
    fontSize: "12px",
    color: "#6fbaf7",
    wordBreak: "break-word"
  },
  helpContainer: {
    marginBottom: "15px"
  }
};

export default withStyles(styles)(Help);