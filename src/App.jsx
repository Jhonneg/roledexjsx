import { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
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

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div>
        <h1>Monsters go here</h1>
        <input
          className="search-box"
          type="search"
          placeholder="Search monster"
          onChange={onSearchChange}
        />
        <ul>
          {filteredMonsters.map((monster) => {
            return <li key={monster.id}>{monster.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}
