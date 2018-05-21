import React from 'react';
import styled from 'styled-components';

import {Title} from './Transplantation'
import {TitleText} from './Transplantation'
import {TitleArrow} from './Transplantation'
import arrow from './ArrowNav.svg';

export default class Airlines extends React.Component {
  render() {
    return (
      <div>
        <Title>
          <TitleArrow src={arrow}/><TitleText>АВИАКОМПАНИИ</TitleText>
        </Title>
      </div>
    )
  }
}