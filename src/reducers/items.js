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
              removed: false
            }
          ]
        case 'TOGGLE_ITEM':
          return state.map(item=>
            item._id === action._id ?
              !item.removed ?
              {...item, removed: true} :
              {...item, removed: false} :
            item
          )
        case 'UPDATE_ITEM':
          return state.map(item=>
            item._id === action._id && item.title !== action.title ?
            {...item, title: action.title} :
            item
          )
        default:
          return state
    }
}
