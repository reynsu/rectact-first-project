// import { Component } from "react";
import { useState, useEffect } from "react";
import logo from "./logo.svg";
import CardList from "./components/card-list/card-list.component";
import "./App.css";
import SearchBox from "./components/search-box/search-box.component";

// Functional Componentes
const App = () => {
  const [searchField, setsearchField] = useState(""); // [value, setvalue]
  const [monster, setMonster] = useState([]);
  const [filteredMonster, setFilteredMonster] = useState([]);

  useEffect(() => {
    console.log("effect fired");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => {
        setMonster(user);
      });
  }, []);

  useEffect(() => {
    const newFilteredMonster = monster.filter((monsterName) =>
      monsterName.name.toLowerCase().includes(searchField)
    );
    setFilteredMonster(newFilteredMonster);
  }, [monster, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setsearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="search monster"
        className="search-box"
      />
      {<CardList monsters={filteredMonster} />}
    </div>
  );
};

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

/* 
- Una funcion es considerada pura si su resultado solo depende de los argumentos que le estoy pasando y no de otros valores externos. En caso contrario se dice que la funcion es inpura.

- Adicionalmente una funcion es pura si no crea un efecto fuera de su scope. Como por ejemplo cambiar el valor de una variable declarada fuera del scope de la funcion.

- En React usaremos hoocks para escribir funciones impuras para escribir los componentes.

*/

/*
useEffect toma dos argumentos:

  - useEffect(()=> {callback function}, [array of dependences]) 
  - si queremos que la callback function se ejecute solo una vez dejamos vacio el array.

*/
