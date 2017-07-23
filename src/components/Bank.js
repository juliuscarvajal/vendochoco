import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

const Bank = (props) => {
  const { bank } = props;
  return <div>
    <h1>
      {numeral(bank.money).format('$0,0.00')}
    </h1>
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

export default connect(
  mapStateToProps,
  null
)(Bank);
