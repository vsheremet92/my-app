import React from 'react'
import { connect } from 'react-redux'
import { filterByTitle } from '../actions/index'

class FilterInput extends React.Component {

  state = {
      filteringValue: ''
  }

  render() {
    return(
        <input className="filter-by-title" placeholder="Search by title" type="text" onChange={
            (e)=> {
              this.props.dispatch(filterByTitle(e.target.value));
            }
        }/>
    )
  }

}

export const FilterByTitle = connect()(FilterInput);
