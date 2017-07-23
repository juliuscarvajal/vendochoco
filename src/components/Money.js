import React from 'react';
import { Image } from 'react-bootstrap';
import { denominations } from '../external-data';

const Denomination = props =>
  <Image
    width={props.width || 96}
    height={props.height || 96}
    src={require(`../assets/au_${props.id}_coin.png`)}
    onClick={() => props.onSelect(props.value)}
  />;

const Denominations = props => denominations.map(d => (
  <Denomination id={d.id} value={d.value} {...props} responsive />
));

const Money = props => (
  <div>
    { Denominations(props) }
  </div>
);

export default Money;
