import { Component } from "react";
import logo from "./logo.svg";
import CardList from "./components/card-list/card-list.component";
import "./App.css";
import SearchBox from "./components/search-box/search-box.component";

class App extends Component {
  // Constructor method for instasiated the state
  constructor() {
    super();
    this.state = {
      monster: [],
      searchField: "",
    };
  }

  // Cada vez que tengamos un class-componente que necesita datos que provienen de API y necesitan ser mostrados pueden ser introducidos dentro de un componentDidMount() => life-cycle-method.
  componentDidMount() {
    // console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) =>
        this.setState(() => {
          return { monster: user };
        })
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    // const startingArray = this.state.monster;
    const { monster, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredMonster = monster.filter((monsterName) =>
      monsterName.name.toLowerCase().includes(searchField)
    );

    // console.log("render");
    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="search monster"
          className="search-box"
        />
        <CardList monsters={filteredMonster} />
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

//? Work on functionality first and then on the css style

//? Best practic => Keep the original state.

//? Best practice => Si tenemos que usar la misma callback function multiples veces, entonce es mejor crear un metodo que haga lo mismo. La ventaje es que el metodo es inicializado solo una vez y puede ser llamado multiples veces. Por el contrario esta funcion anonima es inicializada cada vez que se debe usar. Esto afecta el performance del componente.

/*
 - Un componente es un pedazo reutilizable de codigo.

 - props ~ properties

 - los componentes son renderizados bajo dos condiciones:
  - cuando setState() es llamado
  - cuando props es actualizado

*/
