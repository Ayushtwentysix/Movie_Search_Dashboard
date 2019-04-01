import React, { Component } from "react";
import "./styles.css";
class Loader extends Component {
  render() {
    // let styles = {
    //   backgroundColor: "yellow"
    // };

    return (
      <div className="full">
        <div className="container">
          <div className="loader" id="one" />
          <div className="loader" id="two" />
          <div className="loader" id="three" />
          <div className="loader" id="four" />
          <div className="loader" id="five" />
        </div>
      </div>
    );
  }
}

export default Loader;
