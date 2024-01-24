// src/store.js
import { createStore } from 'redux';
// import thunk from 'redux-thunk';
import rootReducer from './reducers';

const store = createStore(rootReducer);

export default store;