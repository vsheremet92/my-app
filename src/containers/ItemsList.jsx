import { List } from '../components/List'
import { connect } from 'react-redux'
import { toggleItem, updateItem, deleteItem } from '../actions/index'

const getItems = (items, fltr, fltrByTitle, page)=> {
  console.log(page);
  switch(fltr) {
    case 'SHOW_ALL':
      if(fltrByTitle) {
        return items.filter(i=> i.title.includes(fltrByTitle) && i._id + 1 >= page && i._id <= page*20)
      } else return items.filter(i=> i._id + 1 >= page && i._id <= page*20)
    case 'SHOW_ACTIVE':
      return items.filter((i)=> {
        if(fltrByTitle) {
          return i.active && i.title.includes(fltrByTitle) && i._id + 1 >= page && i._id <= page*20
        } else return i.active && i._id + 1 >= page && i._id <= page*20
      });
    case 'SHOW_INACTIVE':
      return items.filter((i)=> {
        if(fltrByTitle) {
          return !i.active && i.title.includes(fltrByTitle) && i._id + 1 >= page && i._id <= page*20
        } else return !i.active && i._id + 1 >= page && i._id <= page*20
      });
    default:
      return items;
  }
}

const mapStateToProps = (state)=> {
  return {
    items: getItems(state.items, state.fltr, state.fltrByTitle, state.activePage)
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
