import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "world",
    };
  }

  render() {
    return (
      <>
        <p>hello {this.state.name}</p>
        <button onClick={() => this.setState({ name: "mom" })}>
          Press to say hi mom
        </button>
      </>
    );
  }
}

export default App;
