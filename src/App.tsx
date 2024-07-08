import { useState, useEffect, ChangeEvent } from "react";
import "./App.css";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import { getData } from "./utils/data.utils";

export type Monster = {
  id: string;
  name: string;
  results: string[];
  url: string;
};

export default function App() {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState<Monster[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const user = await getData<Monster[]>(
        "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151"
      );
      const users = user.results;
      setMonsters(users);
    };

    fetchUsers();
  }, []);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };
  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField);
  });
  return (
    <div>
      <h1>Search Pokemon</h1>
      <SearchBox
        placeholder="Search monsters"
        onSearchChange={onSearchChange}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}
