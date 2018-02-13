import { combineReducers } from 'redux'
import { fltr } from './fltr'
import { fltrByTitle } from './fltrByTitle'
import { items } from './items'

const itemsApp = combineReducers({fltr, fltrByTitle, items});

export default itemsApp;
