const DEFAULT_PAGE = 1;

export const activePage = (state = DEFAULT_PAGE, action)=> {
    const { type } = action;
    switch(type) {
      case 'SET_ACTIVE_PAGE':
        return action.activePage
      default:
        return DEFAULT_PAGE
    }
}
