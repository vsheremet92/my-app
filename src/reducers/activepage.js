export const activePage = (state = 1, action)=> {
    const { type } = action;
    switch(type) {
      case 'SET_ACTIVE_PAGE':
        return action.activePage
      default:
        return state
    }
}
