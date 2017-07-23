import numeral from 'numeral';

export const format = value => numeral(value).format('$0,0.00');

export const validMoney = [
  0.1,
  0.2,
  0.5,
  1,
  2,
];

export const errorMessages = {
  INVALID_MONEY: additionalMsg => `Accepted denominations are ${validMoney.map(format).join(', ')}. ${additionalMsg}`,
};
