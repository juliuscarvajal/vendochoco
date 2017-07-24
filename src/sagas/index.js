import { all, takeLatest, put, select } from 'redux-saga/effects';
import { validMoney, errorMessages, format } from '../constants';
import { products } from '../external-data';
import { getBank } from '../selectors';

function validateMoney(money) {
  // Check for invalid denomination
  if (validMoney.indexOf(money) === -1) {
    throw new Error(errorMessages.INVALID_MONEY(`Inserted ${format(money)}.`));
  }
}

function* addMoney(action) {
  try {
    const { money } = action.payload;

    validateMoney(money);
    yield put({ type: 'RESET_ERRORS' });
    yield put({ type: 'ADD_MONEY_SUCCESS', money });

  } catch(err) {
    yield put({ type: 'ADD_MONEY_FAILED', error: err.message });
  }
}

function validateProduct(item) {
  const matchedProduct = products.filter(p => p.id === item);
  if (matchedProduct.length !== 1) {
    throw new Error(errorMessages.INVALID_PRODUCT(`Selected ${item}.`));
  }

  return matchedProduct[0];
}

function* validatePurchase(item, product) {
  const bank = yield select(getBank);
  if (bank.money < product.value) {
    throw new Error(errorMessages.INSUFFICIENT_FUNDS(`You've got ${bank.money} but the price of the item is ${product.value}`));
  }
}

function* checkout(action) {
  try {
    const { item } = action.payload;
    const product = validateProduct(item);

    yield validatePurchase(item, product);
    yield put({ type: 'CHECKOUT_SUCCESS', payload: { item, value: product.value }});

  } catch(err) {
    yield put({ type: 'CHECKOUT_FAILED', error: err.message });
  }
}

export default function* saga() {
  yield all([
    takeLatest('ADD_MONEY', addMoney),
    takeLatest('CHECKOUT', checkout),
  ]);
}
