import { all, takeLatest, put, select } from 'redux-saga/effects';
import { validMoney, errorMessages, format } from '../constants';
import { getBank } from '../selectors';

function validateMoney(action) {
  const { money } = action.payload;
  if (validMoney.indexOf(money) === -1) {
    throw new Error(errorMessages.INVALID_MONEY(`Inserted ${format(money)}`));
  }
}

function* addMoney(action) {
  console.log('Adding money:', action);
  try {
    validateMoney(action);

    const { money } = action.payload;
    yield put({ type: 'ADD_MONEY_SUCCESS', money });

  } catch(err) {
    yield put({ type: 'ADD_MONEY_FAILED', error: err.message });
  }
}

function* checkout(action) {
  const bank = yield select(getBank);
  console.log('Checkout:', action.payload.item, bank);
  //TODO: Continue here
}

export default function* saga() {
  yield all([
    takeLatest('ADD_MONEY', addMoney),
    takeLatest('CHECKOUT', checkout),
  ]);
}
