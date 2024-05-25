import { Component } from "react";

export default class SearchBox extends Component {
  render() {
    return (
      <input
        className="search-box"
        type="search"
        placeholder="Search monster"
        onChange={this.props.onSearchChange}
      />
    );
  }
}
