import { combineReducers } from '@reduxjs/toolkit';
import portfolioReducer from './portfolioSlice';

const rootReducer = combineReducers({
  portfolio: portfolioReducer,
});

export default rootReducer; 