import axios from 'axios';
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
} from '../actions/contacts-actions';
import { nanoid } from 'nanoid';

axios.defaults.baseURL = 'https://629734048d77ad6f75fd043c.mockapi.io/api/v1';

export const contactsFetch = () => async dispatch => {
  dispatch(fetchContactsPadding());

  try {
    const request = await axios.get('/contacts');
    dispatch(fetchContactsSuccess(request.data));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }
};

export const contactAdd = (name, number) => async dispatch => {
  const contact = { id: nanoid(), name: name, phone: number };
  dispatch(addContactPadding());

  try {
    const request = await axios.post('/contacts', contact);
    dispatch(addContactSuccess(request.data));
  } catch (error) {
    dispatch(addContactError(error));
  }
};

export const contactDelete = id => async dispatch => {
  dispatch(deleteContactPadding());

  try {
    await axios.delete(`/contacts/${id}`);
    dispatch(deleteContactSuccess(id));
  } catch (error) {
    dispatch(deleteContactError(error));
  }
};
