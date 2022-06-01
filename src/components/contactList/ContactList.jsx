import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactDelete } from 'redux/operations/contacts-operation';
import styles from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const itemsContact = useSelector(state => state.contacts.items);
  const filterContact = useSelector(state => state.contacts.filter);

  const dataContacts = itemsContact.filter(({ name }) =>
    name.toLowerCase().includes(filterContact.toLowerCase())
  );

  const deleteHandler = id => dispatch(contactDelete(id));

  return (
    <div className={styles.container}>
      <ul>
        {dataContacts.map(({ id, name, phone }) => {
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
        })}
      </ul>
    </div>
  );
};

export default ContactList;
