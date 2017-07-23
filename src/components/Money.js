import React from 'react';
import { Image } from 'react-bootstrap';

const Denomination = props =>
  <Image
    src={require(`../assets/au_${props.id}_coin.png`)}
    onClick={() => props.onSelect(props.value)}
  />;

const Money = (props) => {
  return <div>
    <Denomination id={'5c'} value={0.05} {...props} responsive/>
    <Denomination id={'10c'} value={0.1} {...props} responsive/>
    <Denomination id={'20c'} value={0.2} {...props} responsive/>
    <Denomination id={'50c'} value={0.5} {...props} responsive/>
    <Denomination id={'1'} value={1} {...props} responsive/>
    <Denomination id={'2'} value={2} {...props} responsive/>
  </div>;
};

export default Money;
