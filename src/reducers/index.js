import { combineReducers } from 'redux'
import { fltr } from './fltr'
import { fltrByTitle } from './fltrByTitle'
import { fltrByDate } from './fltrByDate'
import { activePage } from './activepage'
import { items } from './items'

const itemsApp = combineReducers({fltr, fltrByTitle, fltrByDate, activePage, items});

export default itemsApp;
