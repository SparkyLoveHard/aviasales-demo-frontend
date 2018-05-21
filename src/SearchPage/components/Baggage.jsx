import React from 'react';

import {Title} from './Transplantation'
import {TitleText} from './Transplantation'
import {TitleArrow} from './Transplantation'
import arrow from './ArrowNav.svg';

export default class Baggage extends React.Component {
  render() {
    return (
      <div>
        <Title>
          <TitleArrow src={arrow}/><TitleText>БАГАЖ</TitleText>
        </Title>
      </div>
    )
  }
}