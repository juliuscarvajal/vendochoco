export const checkOut = item => ({
  type: 'CHECKOUT',
  payload: {
    item,
  },
});
