import React, { Component } from 'react';
import '../App.css';
import AddItem from '../containers/AddItem'
import Filter from './Filter'
import ItemsList from '../containers/ItemsList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddItem />
        <Filter />
        <ItemsList />
      </div>
    );
  }
}

export default App;
