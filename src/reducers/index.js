import { combineReducers } from 'redux'
import { fltr } from './fltr'
import { fltrByTitle } from './fltrByTitle'
import { fltrByDate } from './fltrByDate'
import { items } from './items'

const itemsApp = combineReducers({fltr, fltrByTitle, fltrByDate, items});

export default itemsApp;
