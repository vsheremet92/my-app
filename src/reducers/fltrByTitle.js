export const fltrByTitle = (state = '', action)=> {
    const { type } = action;
    switch(type) {
      case 'FILTER_BY_TITLE':
        return action.filterString
      default:
        return state
    }
}
