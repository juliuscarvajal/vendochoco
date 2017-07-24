import React from 'react';
import { Thumbnail } from 'react-bootstrap';
import { format } from '../constants';
import { products } from '../external-data';

const ErrorMsg = (props) => {
  return props.menu.error && props.menu.item === props.id &&
    <h3>{props.menu.error}</h3>;
};

const Item = props => (
  <div>
    { ErrorMsg(props) }
    <Thumbnail
      src={require(`../assets/${props.id}.png`)}
      onClick={() => props.onSelect(props.id)}
    >
      <h2>{`${props.name} (${format(props.value)})`}</h2>
    </Thumbnail>
  </div>
);

const Products = props => products.map(p => (
  <Item {...props} key={p.id} id={p.id} name={p.name} value={p.value} responsive />
));

const Selected = props => {
  const { product } = props.menu;
  return product && <div>
    <h2>Enjoy your snack. Have a nice day!</h2>
    <Item {...props} id={product.id} name={product.name} value={product.value} responsive />
  </div>;
};

const Menu = props => (
  <div>
    {
      Selected(props) ||
      <div>
        <h2> Step 2: Choose your chocolate bar</h2>
        { Products(props) }
      </div>
    }
  </div>
);

export default Menu;
