export const fltr = (state = 'SHOW_ACTIVE', action)=> {
    let { type } = action;
    switch(type) {
      case 'SET_FILTER':
        return action.filter
      default:
        return state
    }
}
