
import { createStore } from 'redux';
// import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducer/reducer.js'

export const store = createStore(rootReducer);

// export const store = configureStore({ reducer: rootReducer });
