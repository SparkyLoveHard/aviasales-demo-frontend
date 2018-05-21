import React from 'react';
import styled from 'styled-components';

import {Title} from './Transplantation'
import {TitleText} from './Transplantation'
import {TitleArrow} from './Transplantation'
import arrow from './ArrowNav.svg';

export default class Airports extends React.Component {
  render() {
    return (
      <div>
        <Title>
          <TitleArrow src={arrow}/><TitleText>АЭРОПОРТЫ</TitleText>
        </Title>
      </div>
    )
  }
}