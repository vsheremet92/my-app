import { combineReducers } from 'redux'
import { fltr } from './fltr'
import { items } from './items'

const itemsApp = combineReducers({fltr, items});

export default itemsApp;
