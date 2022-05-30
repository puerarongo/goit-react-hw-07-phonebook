import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import contactsHandler from 'services/constactsHandler';

import {
  contactsAdd,
  contactsDelete,
  filtration,
} from 'redux/actions/contacts-actions';

const items = createReducer([], {
  [contactsAdd.type]: (state, { payload }) => contactsHandler(state, payload),
  [contactsDelete.type]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [filtration.type]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
