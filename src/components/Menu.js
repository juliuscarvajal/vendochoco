import React from 'react';
import { connect } from 'react-redux';
import { Thumbnail } from 'react-bootstrap';
import { format } from '../constants';
import { products } from '../external-data';

const Item = props => (
  <Thumbnail
    src={require(`../assets/${props.id}.png`)}
    onClick={() => props.onSelect(props.id)}
  >
    <h2>{`${props.name} (${format(props.value)})`}</h2>
    { props.menu.error && <h3>{props.menu.error}</h3> }
  </Thumbnail>
);

const Products = props => products.map(p => (
  <Item key={p.id} id={p.id} name={p.name} value={p.value} {...props} responsive />
));

const Menu = props => (
  <div>
    { Products(props) }
  </div>
);

const mapStateToProps = (state, props) => {
  return {
    bank: state.bank,
    menu: state.menu,
  };
}

export default connect(
  mapStateToProps,
  null,
)(Menu);
