import React, { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search/search-box.component";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monster: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((users) => this.setState({ monster: users }));
  }

  handlechange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monster, searchField } = this.state;
    const filteredMonster = monster.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Hello</h1>
        <SearchBox
          placeholder="search monster"
          handlechange={this.handlechange}
        />
        <CardList monster={filteredMonster} />
      </div>
    );
  }
}

export default App;
