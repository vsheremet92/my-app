import React from 'react'

export const Item = ({children, isActive, onItemClick})=> {
  return (
    <li className={isActive ? 'active' : 'removed'} onClick={onItemClick}>{children}</li>
  )
}
