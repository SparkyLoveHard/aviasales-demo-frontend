import React from 'react';
import styled from 'styled-components';
import SearchDeparture from './SearchDeparture';
import SearchArrival from './SeacrhArrival';
import SearchThere from './SearchThere';
import SearchBack from './SearchBack';
import SearchAddTickets from './SearchAddTickets';

import logo from '../../../HomePage/Images/aviasales.png';
import logoText from '../../../HomePage/Images/LogoText.png';

import {Logo, LogoImg, LogoText} from '../../../HomePage/Header';

const HeaderStyle = styled.div`
  background: linear-gradient(#00b0de, #01aedc, #02abdb, #02abdb, #02abdb, #196ebd);
  margin: 0 0 56px 0;
`;

const HeaderContainer = styled.div`
  display: flex;
`;




// 12 procent // 19
export default class SearchHeader extends React.Component {
  render() {
    return (
      <HeaderStyle>
        <div className="container">
          <Logo className="col-xs-12">
            <LogoImg src={logo} />
            <LogoText src={logoText} />
          </Logo>
        </div>
        <HeaderContainer className="container">
          <SearchDeparture />
          <SearchArrival />
          <SearchThere/>
          <SearchBack />
          <SearchAddTickets />
        </HeaderContainer>
      </HeaderStyle>
    )
  }
}

