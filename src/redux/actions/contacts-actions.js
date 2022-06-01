import { createAction } from '@reduxjs/toolkit';

export const fetchContactsPadding = createAction('items/fetchContactPadding');
export const fetchContactsSuccess = createAction('items/fetchContactSuccess');
export const fetchContactsError = createAction('items/fetchContactError');

export const addContactPadding = createAction('items/addContactPadding');
export const addContactSuccess = createAction('items/addContactSuccess');
export const addContactError = createAction('items/addContactError');

export const deleteContactPadding = createAction('items/deleteContactPadding');
export const deleteContactSuccess = createAction('items/deleteContactSuccess');
export const deleteContactError = createAction('items/deleteContactError');

export const filtration = createAction('items/filtration');
