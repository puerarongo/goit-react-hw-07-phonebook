import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
//import contactsHandler from 'services/constactsHandler';

import {
  fetchContactsPadding,
  fetchContactsSuccess,
  fetchContactsError,
  addContactPadding,
  addContactSuccess,
  addContactError,
  deleteContactPadding,
  deleteContactSuccess,
  deleteContactError,
  filtration,
} from 'redux/actions/contacts-actions';

const items = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [filtration.type]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [fetchContactsPadding]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
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
