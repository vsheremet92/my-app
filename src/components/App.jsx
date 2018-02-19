import React, { Component } from 'react';
import '../App.css';
import Pagination from './Pagination'
import AddItem from '../containers/AddItem'
import Filter from './Filter'
import ItemsList from '../containers/ItemsList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pagination>
          <AddItem />
          <div className="items-container">
            <Filter />
            <ItemsList />
          </div>
        </Pagination>
      </div>
    );
  }
}

export default App;
