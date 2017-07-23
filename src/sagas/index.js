import { takeLatest, put } from 'redux-saga/effects';
import { validMoney, errorMessages, format } from '../constants';

function checkMoney(action) {
  const { money } = action.payload;
  if (validMoney.indexOf(money) === -1) {
    throw new Error(errorMessages.INVALID_MONEY(`Inserted ${format(money)}`));
  }
}

function* addMoney(action) {
  console.log('Adding money:', action);
  try {
    checkMoney(action);

    const { money } = action.payload;
    yield put({ type: 'ADD_MONEY_SUCCESS', money });

  } catch(err) {
    yield put({ type: 'ADD_MONEY_FAILED', error: err.message });
  }
}

export default function* saga() {
  yield takeLatest('ADD_MONEY', addMoney);
}
