import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  contactsFetch,
  contactAdd,
  contactDelete,
} from 'redux/operations/contacts-operation';

import { filtration } from 'redux/actions/contacts-actions';

const items = createReducer([], {
  [contactsFetch.fulfilled]: (_, { payload }) => payload,
  [contactAdd.fulfilled]: (state, { payload }) => [...state, payload],
  [contactDelete.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [filtration.type]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [contactsFetch.pending]: () => true,
  [contactsFetch.fulfilled]: () => false,
  [contactsFetch.rejected]: () => false,
  [contactAdd.pending]: () => true,
  [contactAdd.fulfilled]: () => false,
  [contactAdd.rejected]: () => false,
  [contactDelete.pending]: () => true,
  [contactDelete.fulfilled]: () => false,
  [contactDelete.rejected]: () => false,
});

export default combineReducers({
  items,
  filter,
  loading,
});
