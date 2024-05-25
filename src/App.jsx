import { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
  }
  async componentDidMount() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const users = await response.json();
      this.setState(
        () => {
          return { monsters: users };
        },
        () => {
          console.log(this.state);
        }
      );
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }

  render() {
    return (
      <div>
        <h1>Monsters go here</h1>
        <ul>
          {this.state.monsters.map((monster) => {
            return <li key={monster.id}>{monster.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}
