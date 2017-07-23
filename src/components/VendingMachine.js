import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Grid, Row } from 'react-bootstrap';
import Money from './Money';
import Bank from './Bank';
import Menu from './Menu';
import * as moneyActions from '../actions/money';
import * as menuActions from '../actions/menu';

const VendingMachine = (props) => {
  return <Grid fluid>
    <Row>
      <h2>Step 1: Put in money by clicking on the coins</h2>
      <Money onSelect={props.moneyActions.addMoney}/>
      <Bank />
      <h2> Step 2: Choose your chocolate bar</h2>
      <Menu onSelect={props.menuActions.checkOut}/>
    </Row>
  </Grid>;
};

const mapDispatchToProps = (dispatch) => {
  return {
    moneyActions: bindActionCreators(moneyActions, dispatch),
    menuActions: bindActionCreators(menuActions, dispatch)
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(VendingMachine);
