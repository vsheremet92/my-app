import React from 'react'
import { FilterItemsLink } from '../containers/FilterItemsLink'
import { FilterByTitle } from '../containers/FilterByTitle'
import { store } from '../index'

const Filter = ()=> {
    return (
      <div className="filter-block">
          <hr />
          <FilterByTitle />
          <ul>
            <FilterItemsLink fltr="SHOW_ALL">all</FilterItemsLink>
            <FilterItemsLink fltr="SHOW_ACTIVE">active</FilterItemsLink>
            <FilterItemsLink fltr="SHOW_REMOVED">removed</FilterItemsLink>
          </ul>
          <hr />
      </div>
    )
}

export default Filter
