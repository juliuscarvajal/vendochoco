import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Money from './Money';
import Bank from './Bank';
import Menu from './Menu';
import * as moneyActions from '../actions/money';

const VendingMachine = (props) => {
  return <div>
    <Money onSelect={props.actions.addMoney}/>
    <Bank />
    <Menu />
  </div>;
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(moneyActions, dispatch)
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(VendingMachine);
