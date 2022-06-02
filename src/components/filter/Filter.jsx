import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filtration } from 'redux/actions/contacts-actions';
import styles from './Filter.module.css';

const Filter = () => {
  const filterContact = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const inputHandler = e => {
    dispatch(filtration(e.currentTarget.value));
  };

  return (
    <div className={styles.container}>
      <label>
        Find contacts by name:
        <input
          className={styles.form__input}
          type="text"
          name="filter"
          value={filterContact}
          onChange={inputHandler}
        ></input>
      </label>
    </div>
  );
};

export default Filter;
