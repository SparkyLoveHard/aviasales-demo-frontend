import React from 'react';
import styled from 'styled-components';

import {Title} from './Transplantation'
import {TitleText} from './Transplantation'
import {TitleArrow} from './Transplantation'
import arrow from './ArrowNav.svg';

export default class DurationOfTransplantation extends React.Component {
  render() {
    return (
      <div>
        <Title>
          <TitleArrow src={arrow}/><TitleText>ДЛИТЕЛЬНОСТЬ ПЕРЕСАДКИ</TitleText>
        </Title>
      </div>
    )
  }
}