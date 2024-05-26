import React from "react";
import PropTypes from "prop-types";

// Images
import pi from "../assets/pi_black.png";
import newIcon from "../assets/newIcon.png";
import xsquareIcon from "../assets/math.png";

import "./Button.css";

export default class Button extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    orange: PropTypes.bool,
    wide: PropTypes.bool,
    clickHandler: PropTypes.func,
  };

  handleClick = () => {
    this.props.clickHandler(this.props.name);
  };

  render() {
    let buttonContent;
    if (this.props.name === "pi") {
      buttonContent = (
        <div>
          <img
            src={pi}
            alt="Pi"
            style={{
              width: "0.8rem",
              height: "0.8rem",
              margin: "auto",
            }}
          />
          <img
            src={newIcon}
            alt="Top Right"
            style={{
              position: "absolute",
              top: "0",
              right: "0",
              width: "7vh",
              height: "7vh",
            }}
          />
        </div>
      );
    } else if (
      this.props.name === "sin" ||
      this.props.name === "cos" ||
      this.props.name === "tan"
    ) {
      buttonContent = (
        <div>
          {this.props.name}
          <img
            src={newIcon}
            alt="Top Right"
            style={{
              position: "absolute",
              top: "0",
              right: "0",
              width: "7vh",
              height: "7vh",
            }}
          />
        </div>
      );
    } else if (this.props.name === "square") {
      buttonContent = (
        <div>
          <img
            src={xsquareIcon}
            alt="Pi"
            style={{
              width: "0.8rem",
              height: "0.8rem",
              margin: "auto",
            }}
          />
          <img
            src={newIcon}
            alt="Top Right"
            style={{
              position: "absolute",
              top: "0",
              right: "0",
              width: "7vh",
              height: "7vh",
            }}
          />
        </div>
      );
    } else {
      buttonContent = this.props.name;
    }

    const className = [
      "component-button",
      this.props.orange ? "orange" : "",
      this.props.wide ? "wide" : "",
    ];

    return (
      <div className={className.join(" ").trim()}>
        <button onClick={this.handleClick}>{buttonContent}</button>
      </div>
    );
  }
}
