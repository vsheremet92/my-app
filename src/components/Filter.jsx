import React from 'react'
import { FilterItemsLink } from '../containers/FilterItemsLink'
import { FilterByTitle } from '../containers/FilterByTitle'

const Filter = ()=> {
    return (
      <div className="filter-block">
          <FilterByTitle />
          <ul>
            <FilterItemsLink fltr="SHOW_ALL">all</FilterItemsLink>
            <FilterItemsLink fltr="SHOW_ACTIVE">active</FilterItemsLink>
            <FilterItemsLink fltr="SHOW_INACTIVE">inactive</FilterItemsLink>
          </ul>
      </div>
    )
}

export default Filter
