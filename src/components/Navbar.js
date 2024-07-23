import { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        {this.props.name} <br></br>
        {this.props.message}
      </nav>
    );
  }
}
