import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  contactsFetch,
  contactDelete,
} from 'redux/operations/contacts-operation';
import Loader from 'components/loader/Loader';
import styles from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const itemsContact = useSelector(state => state.contacts.items);
  const filterContact = useSelector(state => state.contacts.filter);
  const loadingContacts = useSelector(state => state.contacts.loading);

  const dataContacts = itemsContact.filter(({ name }) =>
    name.toLowerCase().includes(filterContact.toLowerCase())
  );

  useEffect(() => {
    dispatch(contactsFetch());
  }, [dispatch]);

  const deleteHandler = id => dispatch(contactDelete(id));

  return (
    <div className={styles.container}>
      <ul>
        {loadingContacts ? (
          <Loader />
        ) : (
          dataContacts.map(({ id, name, phone }) => {
            return (
              <li key={id} className={styles.contact}>
                <span>
                  {name}: {phone}
                </span>
                <button
                  className={styles.button__delete}
                  type="button"
                  onClick={() => deleteHandler(id)}
                >
                  Delete
                </button>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
};

export default ContactList;
