import React from 'react'
import { FilterItemsLink } from '../containers/FilterItemsLink'
import { FilterByTitle } from '../containers/FilterByTitle'
import { FilterByDate } from '../containers/FilterByDate'

const Filter = ()=> {
    return (
      <div className="filter-block">
          <FilterByTitle />
          <FilterByDate />
          <ul>
            <FilterItemsLink fltr="SHOW_ALL">all</FilterItemsLink>
            <FilterItemsLink fltr="SHOW_ACTIVE">active</FilterItemsLink>
            <FilterItemsLink fltr="SHOW_INACTIVE">inactive</FilterItemsLink>
          </ul>
      </div>
    )
}

export default Filter
