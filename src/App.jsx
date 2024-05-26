import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";

export default function App() {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const users = await response.json();
        setMonsters(users);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    })();
  }, []);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };
  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField);
  });
  return (
    <div>
      <h1>Search Monsters</h1>
      <SearchBox
        placeholder="Search monsters"
        onSearchChange={onSearchChange}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}
