import React from 'react'

export const FilterDate = ({dates, onSelect})=> {
  return(
    <select onChange={(e)=> {onSelect(e.target.value)}} className="filter-date">
      <option value="" disabled selected>Filter by creation date</option>
      <option></option>
      {
        dates.map((date)=> {
          return <option key={date}>{date}</option>
        })
      }
    </select>
  )
}
