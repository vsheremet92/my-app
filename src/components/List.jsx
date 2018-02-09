import React from 'react'
import { Item } from './Item'
import * as moment from 'moment'

export const List = ({items, onItemClick})=> {
  return(
    <ul className="items-list">
      {
        items.length ?
        items.map((item)=> {
          return (
            <Item key={item._id} isActive={!item.removed} onItemClick={()=> onItemClick(item._id)}>
              <span>{`${item.title}, time:${moment(item.createdAt).format('lll')}, id:${item._id}`}</span>
            </Item>
          )
        }) :
        <li className='empty'>No items found</li>
      }
    </ul>
)}
