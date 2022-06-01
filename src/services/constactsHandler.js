import { Report } from 'notiflix/build/notiflix-report-aio';

const contactsHandler = (items, name) => {
  const nameArr = items.map(elem => elem.name.toLowerCase());
  if (nameArr.includes(name.toLowerCase())) {
    return Report.failure(
      'Failure',
      `${name} is already in contacts!`,
      'Try again'
    );
  } else {
    return name;
  }
};

export default contactsHandler;
