import { Report } from 'notiflix/build/notiflix-report-aio';

const contactsHandler = (state, action) => {
  console.log(state.name);
  const nameArr = state.map(elem => elem.name.toLowerCase());
  console.log(nameArr);
  if (nameArr.includes(action.name.toLowerCase())) {
    return Report.failure(
      'Failure',
      `${action.name} is already in contacts!`,
      'Try again'
    );
  } else {
    return [...state, action];
  }
};

export default contactsHandler;
