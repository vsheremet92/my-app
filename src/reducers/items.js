export const items = (state = [], action)=> {
    const { type } = action;
    switch (type) {
        case 'ADD_ITEM':
          return [
            ...state,
            {
              _id: action._id,
              title: action.title,
              removed: false
            }
          ]
        case 'REMOVE_ITEM':
          return state.map(item=>
            item._id === action._id ?
            {...item, removed: true} :
            item
          )
        default:
          return state
    }
}
