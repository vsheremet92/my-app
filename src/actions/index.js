const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';
const SET_FILTER = 'SET_FILTER';

let next_id = 0;

export const addNewItem = (title)=> ({
    type: ADD_ITEM,
    _id: next_id++,
    title
})

export const removeItem = (_id)=> ({
    type: REMOVE_ITEM,
    _id
})

export const setFilter = (filter)=> ({
    type: SET_FILTER,
    filter
})
