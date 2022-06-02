import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactAdd } from 'redux/operations/contacts-operation';
import { Report } from 'notiflix/build/notiflix-report-aio';
import styles from './Form.module.css';

const Form = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const itemsContact = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  // todo Function
  const inputHandler = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        return setName(value);
      case 'phone':
        return setPhone(value);
      default:
        return;
    }
  };

  const submitHandler = e => {
    e.preventDefault();
    const contact = { name: name, phone: phone };

    const newArr = itemsContact.map(({ name }) => name.toLowerCase());
    if (newArr.includes(name.toLowerCase())) {
      return Report.failure(
        'Failure',
        `${name} is already in contacts!`,
        'Try again'
      );
    }

    dispatch(contactAdd(contact));
    setName('');
    setPhone('');
  };

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler}>
        <label className={styles.form__title}>
          Name
          <input
            className={styles.input__form}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={inputHandler}
            required
          />
        </label>
        <label className={styles.form__title}>
          Number
          <input
            className={styles.input__form}
            type="tel"
            name="phone"
            value={phone}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={inputHandler}
            required
          />
        </label>
        <button className={styles.form__button} type="sumbmit">
          Add contact
        </button>
      </form>
    </div>
  );
};

export default Form;
