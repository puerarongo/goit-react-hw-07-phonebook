import { createAction } from '@reduxjs/toolkit';

export const addContactPadding = createAction('items/addContactPadding');
export const addContactSuccess = createAction('items/addContactSuccess');
export const addContactError = createAction('items/addContactError');

export const deleteContactPadding = createAction('items/deleteContactPadding');
export const deleteContactSuccess = createAction('items/deleteContactSuccess');
export const deleteContactError = createAction('items/deleteContactError');

export const filtration = createAction('items/filtration');
