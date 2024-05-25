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
      this.setState(() => {
        return { monsters: users };
      });
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }

  render() {
    return (
      <div>
        <h1>Monsters go here</h1>
        <input
          className="search-box"
          type="search"
          placeholder="Search monster"
          onChange={(event) => {
            const searchString = event.target.value.toLocaleLowerCase();
            const filteredMonsters = this.state.monsters.filter((monster) => {
              return monster.name.toLocaleLowerCase().includes(searchString);
            });
            this.setState(() => {
              return { monsters: filteredMonsters };
            });
          }}
        />
        <ul>
          {this.state.monsters.map((monster) => {
            return <li key={monster.id}>{monster.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}
