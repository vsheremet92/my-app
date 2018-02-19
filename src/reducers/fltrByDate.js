export const fltrByDate = (state = '', action)=> {
    const { type } = action;
    switch(type) {
      case 'FILTER_BY_DATE':
        return action.filterDate;
      default:
        return state;
    }
}
