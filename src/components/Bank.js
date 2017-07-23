import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'react-bootstrap';
import { format } from '../constants';
import * as bankActions from '../actions/bank';

const Bank = (props) => {
  const { bank } = props;
  return <div>
    <h1>
      {format(bank.money)}
    </h1>
    <Button bsStyle="danger" bsSize="large">refund</Button>
    { bank.error && <p>
      { bank.error }
    </p> }
  </div>;
};

const mapStateToProps = (state, props) => {
  return {
    bank: state.bank,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    bankActions: bindActionCreators(bankActions, dispatch),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Bank);
