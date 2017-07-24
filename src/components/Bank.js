import React from 'react';
import { Button } from 'react-bootstrap';
import { format } from '../constants';

const CashOut = (props) => {
  const { bank } = props;
  const visible = bank.money > 0.0;
  return visible &&
    <Button
      bsStyle="danger"
      bsSize="large"
      onClick={() => props.onCashOut()}
    >
      Cash Out
    </Button>;
};

const ErrorMsg = (props) => {
  const { bank } = props;
  return bank.error && <h3>{ bank.error }</h3>;
};

const Bank = (props) => {
  const { bank } = props;
  return <div>
    <h1>{ format(bank.money) }</h1>
    { CashOut(props) }
    { ErrorMsg(props) }
  </div>;
};

export default Bank;
