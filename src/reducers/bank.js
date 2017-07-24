import omit from 'lodash/omit';

const initialState = {
  money: 0.0,
};

export default(state = initialState, payload) => {
  switch (payload.type) {
    case 'ADD_MONEY_SUCCESS':
      return {
        money: state.money + payload.money,
      };
    case 'ADD_MONEY_FAILED':
      return {
        ...state,
        error: payload.error,
      };
    case 'CHECKOUT_SUCCESS':
      return {
        money: state.money - payload.value,
      };
    case 'RESET_ERRORS':
      return omit(state, ['error']);
    default:
      return state;
  }
};
