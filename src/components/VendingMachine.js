import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Grid, Row } from 'react-bootstrap';
import Money from './Money';
import Bank from './Bank';
import Menu from './Menu';
import * as moneyActions from '../actions/money';
import * as menuActions from '../actions/menu';
import * as bankActions from '../actions/bank';

const VendingMachine = props =>
  <Grid fluid>
    <Row>
      <Money onSelect={props.moneyActions.addMoney}/>
      <Bank onCashOut={props.bankActions.cashOut} bank={props.bank}/>
      <Menu onSelect={props.menuActions.checkOut} menu={props.menu}/>
    </Row>
  </Grid>;

const mapStateToProps = (state, props) => {
  return {
    bank: state.bank,
    menu: state.menu,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    moneyActions: bindActionCreators(moneyActions, dispatch),
    menuActions: bindActionCreators(menuActions, dispatch),
    bankActions: bindActionCreators(bankActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VendingMachine);
