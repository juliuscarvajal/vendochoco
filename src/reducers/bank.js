import omit from 'lodash/omit';
import { decimal } from '../constants';

const initialState = {
  money: 0.0,
};

export default(state = initialState, payload) => {
  switch (payload.type) {
    case 'ADD_MONEY_SUCCESS':
      return {
        money: decimal(state.money + payload.money),
      };
    case 'ADD_MONEY_FAILED':
      return {
        ...state,
        error: payload.error,
      };
    case 'CHECKOUT_SUCCESS':
      return {
        money: decimal(state.money - payload.product.value),
      };
    case 'RESET_ERRORS':
      return omit(state, ['error']);
    case 'CASH_OUT':
      return {
        money: 0.0,
        returned: state.money,
      };
    default:
      return state;
  }
};
