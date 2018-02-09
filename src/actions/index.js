const ADD_ITEM = 'ADD_ITEM';
const TOGGLE_ITEM = 'TOGGLE_ITEM';
const SET_FILTER = 'SET_FILTER';

let nextId = 0;
let creationDate = new Date();

export const addNewItem = (title)=> ({
    type: ADD_ITEM,
    _id: nextId++,
    createdAt: creationDate,
    title
})

export const toggleItem = (_id)=> ({
    type: TOGGLE_ITEM,
    _id
})

export const setFilter = (filter)=> ({
    type: SET_FILTER,
    filter
})
