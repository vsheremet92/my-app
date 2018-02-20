import React from 'react'
import { Item } from './Item'
import Pagination from '../components/Pagination'

export const List = ({items, pagItems, activePage, toggleItem, onItemUpdate, deleteItem})=> {
  return(
    <div>
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
      <Pagination items={pagItems} activePage={activePage} />
    </div>
)}
