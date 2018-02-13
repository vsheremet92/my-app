const ADD_ITEM = 'ADD_ITEM';
const TOGGLE_ITEM = 'TOGGLE_ITEM';
const UPDATE_ITEM = 'UPDATE_ITEM';
const SET_FILTER = 'SET_FILTER';
const FILTER_BY_TITLE = 'FILTER_BY_TITLE';

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

export const updateItem = (_id, newTitle)=> ({
    type: UPDATE_ITEM,
    _id,
    title: newTitle
})

export const setFilter = (filter)=> ({
    type: SET_FILTER,
    filter
})

export const filterByTitle = (filterString)=> ({
    type: FILTER_BY_TITLE,
    filterString
})
