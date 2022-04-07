import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  // Constructor method for instasiated the state
  constructor() {
    super();
    this.state = {
      monster: [],
      searchField: "",
    };
    console.log("constructor");
  }

  // Cada vez que tengamos un class-componente que necesita datos que provienen de API y necesitan ser mostrados pueden ser introducidos dentro de un componentDidMount() => life-cycle-method.
  componentDidMount() {
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) =>
        this.setState(
          () => {
            return { monster: user };
          },
          () => console.log(this.state)
        )
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const startingArray = this.state.monster;
    const filteredMonster = startingArray.filter((monsterName) =>
      monsterName.name.toLowerCase().includes(this.state.searchField)
    );

    console.log("render");
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monster"
          onChange={this.onSearchChange}
        />
        {filteredMonster.map((monster) => {
          // a unique id as key={monster.id} allowed get also repeated names.
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;

/*
Unsing class-component:
  1. Run constructor first
    1.1 Initialize the state
  
  2. Render ()

  3. ComponentDidMount()

  4. Re-render() if the state change.

*/

// Work on functionality first and then on the css style

// Best practic => Keep the original state.

// Best practice => Si tenemos que usar la misma allback function multiples veces, entonce es mejor crear un metodo que haga lo mismo. La ventaje es que el metodo es inicializado solo una vez y puede ser llamado multiples veces. Por el contrario esta funcion anonima es inicializada cada vez que se debe usar. Esto afecta el performance del componente.
