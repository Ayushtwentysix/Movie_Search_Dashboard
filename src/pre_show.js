import React, { Component } from "react";
import Show from "./show";
class Preshow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    };
  }
  render() {
    return (
      <div>{this.state.data ? <Show data={this.props.data} /> : null}</div>
    );
  }
}

export default Preshow;
