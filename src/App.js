import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TableList from './components/TableList';
import Form from './components/Form';

class App extends Component {
  state = {
    characters: []
  };

  removeCharacter = index => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((characters, i) => {
        return i !== index;
      })
    });
  };

  handleSubmit = characters => {
    this.setState({ characters: [...this.state.characters, characters] });
  };

  render() {
    const { characters } = this.state;

    return (
      <div>
        <TableList
          dataCharacters={characters}
          removeCharacter={this.removeCharacter}
        />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
