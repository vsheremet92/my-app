import React from 'react'
import { Item } from './Item'

export const List = ({items, onItemClick})=> {
  return(
    <ul className="items-list">
      {
        items.length ?
        items.map((item)=> {
          return (
            <Item key={item._id} title={item.title} onItemClick={()=> onItemClick(item._id)}/>
          )
        }) :
        <li className='empty'>No items found</li>
      }
    </ul>
)}
