import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

export const contactsAdd = createAction('items/add', (name, number) => {
  return {
    payload: {
      id: nanoid(),
      name: name,
      number: number,
    },
  };
});
export const contactsDelete = createAction('items/delete');
export const filtration = createAction('items/filtration');
