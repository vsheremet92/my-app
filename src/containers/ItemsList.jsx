import { List } from '../components/List'
import { connect } from 'react-redux'
import { toggleItem, updateItem } from '../actions/index'

const getItems = (items, fltr)=> {
  switch(fltr) {
    case 'SHOW_ALL':
      return items;
    case 'SHOW_ACTIVE':
      return items.filter(i=> !i.removed);
    case 'SHOW_REMOVED':
      return items.filter(i=> i.removed);
    default:
      return items;
  }
}

const mapStateToProps = (state)=> {
  return {
    items: getItems(state.items, state.fltr)
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
