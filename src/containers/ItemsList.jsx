import { List } from '../components/List'
import { connect } from 'react-redux'
import { toggleItem, updateItem, deleteItem } from '../actions/index'

const getItems = (items, fltr, fltrByTitle)=> {
  switch(fltr) {
    case 'SHOW_ALL':
      if(fltrByTitle) {
        return items.filter(i=> i.title.includes(fltrByTitle));
      } else return items;
    case 'SHOW_ACTIVE':
      return items.filter((i)=> {
        if(fltrByTitle) {
          return i.active && i.title.includes(fltrByTitle)
        } else return i.active
      });
    case 'SHOW_INACTIVE':
      return items.filter((i)=> {
        if(fltrByTitle) {
          return !i.active && i.title.includes(fltrByTitle)
        } else return !i.active
      });
    default:
      return items;
  }
}

const mapStateToProps = (state)=> {
  return {
    items: getItems(state.items, state.fltr, state.fltrByTitle)
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
