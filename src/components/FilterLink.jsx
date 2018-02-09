import React from 'react'

export const FilterLink = ({fltr, children, active, onclick})=> {
  console.log(fltr, children, active, onclick);
    return(
        <li onClick={onclick} className={active ? 'active-filter' : ''}>
          {children}
        </li>
    )
}
