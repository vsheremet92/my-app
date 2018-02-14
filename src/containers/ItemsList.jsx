import { List } from '../components/List'
import { connect } from 'react-redux'
import { toggleItem, updateItem } from '../actions/index'

const getItems = (items, fltr, fltrByTitle)=> {
  switch(fltr) {
    case 'SHOW_ALL':
      if(fltrByTitle) {
        return items.filter(i=> i.title === fltrByTitle);
      } else return items;
    case 'SHOW_ACTIVE':
      return items.filter((i)=> {
        if(fltrByTitle) {
          return !i.removed && i.title === fltrByTitle
        } else return !i.removed
      });
    case 'SHOW_REMOVED':
      return items.filter((i)=> {
        if(fltrByTitle) {
          return i.removed && i.title === fltrByTitle
        } else return i.removed
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
    onItemUpdate: updateItem
}

const ItemsList = connect(
  mapStateToProps,
  mapDispatchToProps
)(List);

export default ItemsList;
