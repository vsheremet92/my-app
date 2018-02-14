import React from 'react'
import { Item } from './Item'

export const List = ({items, toggleItem, onItemUpdate})=> {
  return(
    <ul className="items-list">
      {
        items.length ?
        items.map((item)=> {
          return (
            <Item key={item._id} id={item._id} isActive={!item.removed} title={item.title} toggleItem={toggleItem} onItemUpdate={onItemUpdate}>
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
