import omit from 'lodash/omit';

const initialState = {};

export default(state = initialState, payload) => {
  switch (payload.type) {
    case 'CHECKOUT_SUCCESS':
      return {
        item: payload.item,
      };
    case 'CHECKOUT_FAILED':
      return {
        ...state,
        error: payload.error,
      };
    case 'RESET_ERRORS':
      return omit(state, ['error']);
    default:
      return state;
  }
};
