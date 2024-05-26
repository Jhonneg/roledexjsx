import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";

export default function App() {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    // useEffect lifecycle hook to stop the component from rerendering in a loop 
    // while fetching and crashing the app, equivalent to componentDidMount() 
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

// Class component version of the app

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }
//   async componentDidMount() {
//     try {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/users"
//       );
//       const users = await response.json();
//       this.setState(() => {
//         return { monsters: users };
//       });
//     } catch (error) {
//       console.error("Error fetching users:", error);
//     }
//   }
//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });
//     return (
//       <div>
//         <h1>Search Monsters</h1>
//         <SearchBox
//           placeholder="Search monsters"
//           onSearchChange={onSearchChange}
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }
