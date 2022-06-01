import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import contactsHandler from 'services/constactsHandler';

import {
  addContactPadding,
  addContactSuccess,
  addContactError,
  deleteContactPadding,
  deleteContactSuccess,
  deleteContactError,
  filtration,
} from 'redux/actions/contacts-actions';

const items = createReducer([], {
  [addContactSuccess]: (state, { payload }) => contactsHandler(state, payload),
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [filtration.type]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [addContactPadding]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactPadding]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

export default combineReducers({
  items,
  filter,
  loading,
});
