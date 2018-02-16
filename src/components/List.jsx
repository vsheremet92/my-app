import React from 'react'
import { Item } from './Item'

export const List = ({items, toggleItem, onItemUpdate, deleteItem})=> {
  return(
    <ul className="items-list">
      {
        items.length ?
        items.map((item)=> {
          return (
            <Item key={item._id} id={item._id} isActive={item.active} title={item.title} toggleItem={toggleItem} onItemUpdate={onItemUpdate} deleteItem={deleteItem}>
              <span>{`${item.title}`}</span>
            </Item>
          )
        }) :
        <li className='empty'>No items found</li>
      }
    </ul>
)}
/*
<input type="text" readOnly value={item.title}/>
*/
