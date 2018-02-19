import * as moment from 'moment'
import 'moment/locale/uk'
moment.locale('uk');

const ADD_ITEM = 'ADD_ITEM';
const TOGGLE_ITEM = 'TOGGLE_ITEM';
const UPDATE_ITEM = 'UPDATE_ITEM';
const DELETE_ITEM = 'DELETE_ITEM';
const SET_FILTER = 'SET_FILTER';
const FILTER_BY_TITLE = 'FILTER_BY_TITLE';
const FILTER_BY_DATE = 'FILTER_BY_DATE';
const SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE';

let nextId = 0;
let currDate = new Date();
let creationDate = moment(currDate).format('l');

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

export const deleteItem = (_id)=> ({
    type: DELETE_ITEM,
    _id
})

export const setFilter = (filter)=> ({
    type: SET_FILTER,
    filter
})

export const filterByTitle = (filterString)=> ({
    type: FILTER_BY_TITLE,
    filterString
})

export const filterByDate = (filterDate)=> ({
    type: FILTER_BY_DATE,
    filterDate
})

export const setActivePage = (activePage)=> ({
    type: SET_ACTIVE_PAGE,
    activePage
})
