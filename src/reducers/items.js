export const items = (state = [], action)=> {
    const { type } = action;
    switch (type) {
        case 'ADD_ITEM':
          return [
            ...state,
            {
              _id: action._id,
              title: action.title,
              createdAt: action.createdAt,
              active: true
            }
          ]
        case 'TOGGLE_ITEM':
          return state.map(item=>
            item._id === action._id ?
              item.active ?
              {...item, active: false} :
              {...item, active: true} :
            item
          )
        case 'UPDATE_ITEM':
          return state.map(item=>
            item._id === action._id && item.title !== action.title ?
            {...item, title: action.title} :
            item
          )
        case 'DELETE_ITEM':
          return state.filter(item=>
            item._id !== action._id
          )
        default:
          return state
    }
}
