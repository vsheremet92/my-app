export const fltrByTitle = (state = '', action)=> {
    let { type } = action;
    switch(type) {
      case 'FILTER_BY_TITLE':
        return action.filterName
      default:
        return state
    }
}
