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
  <Denomination {...props} key={d.id} id={d.id} value={d.value} responsive />
));

const Money = props => (
  <div>
    <h2>Step 1: Put in money by clicking on the coins</h2>
    { Denominations(props) }
  </div>
);

export default Money;
