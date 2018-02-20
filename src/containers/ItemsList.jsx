import { List } from '../components/List'
import { connect } from 'react-redux'
import { toggleItem, updateItem, deleteItem } from '../actions/index'
const ITEMS_PER_PAGE = 20;

const getItems = (items, fltr, fltrByTitle, page)=> {
  switch(fltr) {
    case 'SHOW_ALL':
      if(fltrByTitle) {
        return items.filter((item, idx, arr)=>
        item.title.includes(fltrByTitle) && idx + 1 >= (page*ITEMS_PER_PAGE)-19 && idx + 1 < page*ITEMS_PER_PAGE)
      } else return items.filter((item, idx, arr)=> idx + 1 >= (page * ITEMS_PER_PAGE)-19 && idx + 1 <= page*ITEMS_PER_PAGE)
    case 'SHOW_ACTIVE':
      return items.filter((item, idx, arr)=> {
        if(fltrByTitle) {
          return item.active && item.title.includes(fltrByTitle) && idx + 1 >= page && idx + 1 < page*ITEMS_PER_PAGE
        } else return item.active && idx + 1 >= (page*ITEMS_PER_PAGE)-19 && idx + 1 < page*ITEMS_PER_PAGE
      });
    case 'SHOW_INACTIVE':
      return items.filter((item, idx, arr)=> {
        if(fltrByTitle) {
          return !item.active && item.title.includes(fltrByTitle) && idx + 1 >= (page*ITEMS_PER_PAGE)-19 && idx + 1< page*ITEMS_PER_PAGE
        } else return !item.active && idx + 1 >= (page*ITEMS_PER_PAGE)-19 && idx + 1 < page*ITEMS_PER_PAGE
      });
    default:
      return items;
  }
}

const getPagItems = (items, fltr, fltrByTitle)=> {
  switch(fltr) {
    case 'SHOW_ALL':
      if(fltrByTitle) {
        return items.filter(item=> item.title.includes(fltrByTitle))
      } else return items
    case 'SHOW_ACTIVE':
      return items.filter((item)=> {
        if(fltrByTitle) {
          return item.active && item.title.includes(fltrByTitle)
        } else return item.active
      });
    case 'SHOW_INACTIVE':
      return items.filter((item)=> {
        if(fltrByTitle) {
          return !item.active && item.title.includes(fltrByTitle)
        } else return !item.active
      });
    default:
      return items;
  }
}

const mapStateToProps = (state)=> {
  return {
    items: getItems(getPagItems(state.items, state.fltr, state.fltrByTitle), state.fltr, state.fltrByTitle, state.activePage),
    activePage: state.activePage,
    pagItems: getPagItems(state.items, state.fltr, state.fltrByTitle)
  }
}

const mapDispatchToProps = {
  toggleItem: toggleItem,
  onItemUpdate: updateItem,
  deleteItem: deleteItem
}

const ItemsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(List);

export default ItemsList;
