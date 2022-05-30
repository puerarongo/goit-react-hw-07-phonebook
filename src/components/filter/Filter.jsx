import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filtration } from 'redux/actions/contacts-actions';
import styles from './Filter.module.css';

const Filter = () => {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();

  const inputHandler = e => {
    setFilter(e.currentTarget.value);
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
          value={filter}
          onChange={inputHandler}
        ></input>
      </label>
    </div>
  );
};

export default Filter;
