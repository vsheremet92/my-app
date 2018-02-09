import React from 'react'

export const Item = ({title, onItemClick})=> {
  return (
    <li onClick={onItemClick}>{title}</li>
  )
}
