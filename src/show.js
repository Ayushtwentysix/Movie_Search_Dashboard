import React, { Component } from "react";
import { func } from "prop-types";

class Show extends Component {
  render() {
    function Year(props) {
      return <div>Released on: {props.year}</div>;
    }

    function Ratings(props) {
      return <div>IMDB Rating: {props.ratings}</div>;
    }

    function Title(props) {
      return <div>{props.title}</div>;
    }

    return (
      <div>
        <h2>
          {this.props.data.Title ? (
            <Title title={this.props.data.Title} />
          ) : (
            "Movie not found"
          )}
        </h2>
        <h4>
          {this.props.data.Year ? <Year year={this.props.data.Year} /> : null}
        </h4>
        <h4>
          {this.props.data.imdbRating ? (
            <Ratings ratings={this.props.data.imdbRating} />
          ) : null}
        </h4>
      </div>
    );
  }
}

export default Show;
