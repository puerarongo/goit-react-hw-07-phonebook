import axios from 'axios';
import {
  addContactPadding,
  addContactSuccess,
  addContactError,
  deleteContactPadding,
  deleteContactSuccess,
  deleteContactError,
} from '../actions/contacts-actions';
import { nanoid } from 'nanoid';

axios.defaults.baseURL = 'https://629734048d77ad6f75fd043c.mockapi.io/api/v1';

export const contactAdd = (name, number) => dispatch => {
  const contact = { id: nanoid(), name: name, phone: number };

  dispatch(addContactPadding());

  axios
    .post('/contacts', contact)
    .then(response => dispatch(addContactSuccess(response.data)))
    .catch(error => dispatch(addContactError(error)));
};

export const contactDelete = id => dispatch => {
  dispatch(deleteContactPadding());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactError(error)));
};
