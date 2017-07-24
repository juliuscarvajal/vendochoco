import omit from 'lodash/omit';

const initialState = {};

export default(state = initialState, payload) => {
  switch (payload.type) {
    case 'ADD_MONEY_SUCCESS':
      return {
        product: null,
      };
    case 'CHECKOUT_SUCCESS':
      return {
        product: payload.product,
      };
    case 'CHECKOUT_FAILED':
      return {
        item: payload.item,
        error: payload.error,
      };
    case 'RESET_ERRORS':
      return omit(state, ['error']);
    case 'CASH_OUT':
      return {}; //Empty object
    default:
      return state;
  }
};
