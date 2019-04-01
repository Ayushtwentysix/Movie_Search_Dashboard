import React, { Component } from "react";
import { Input, Icon, Button } from "semantic-ui-react";
import Loader from "./loader";
import Preshow from "./pre_show";
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      url: this.props.url,
      data: "",
      isLoading: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("line 21", this.state.url);
    this.setState((a, b) => ({
      isLoading: true,
      url: b.url + this.state.title
    }));
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("DATA: ", this.state.data);
    console.log("URL: ", this.state.url);
    if (this.state.url !== prevState.url) {
      fetch(this.state.url)
        .then(data => data.json())
        .then(data =>
          this.setState((a, b) => ({
            data: data,
            url: this.state.url,
            title: " ",
            isLoading: false
          }))
        )
        .catch(err => console.log("Error:" + err));
    }
  }

  render() {
    return (
      <div>
        <h1>Search bar</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Movie Title</label>
          <Input
            iconPosition="left"
            type="text"
            name="title"
            onChange={this.handleChange}
            value={this.state.title}
            icon={{ name: "search", circular: true, link: true }}
          />
          {/* <Input type="submit" value="submit" /> */}
          <Button type="submit" color="purple" style={{ marginLeft: "10px" }}>
            Submit
          </Button>
        </form>
        {/* {this.state.isLoading ? <Loader /> : <Show data={this.state.data} />} */}
        {/* {this.state.data ? <Show data={this.state.data} /> : null} */}
        {this.state.isLoading ? <Loader /> : <Preshow data={this.state.data} />}
      </div>
    );
  }
}

export default Search;
