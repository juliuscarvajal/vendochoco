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
    default:
      return state;
  }
};
