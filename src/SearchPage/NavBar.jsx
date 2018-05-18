import React from 'react';
import styled from 'styled-components';

import Transplantation from "./components/Transplantation";
import Baggage from "./components/Baggage";


const NavBarSection = styled.div`
  display: none;
  @media screen and (min-width: 992px) {
    display: block;
    background-color: #FFFFFF;
  }
`;

export default class NavBar extends React.Component {
  render() {
    return (
      <NavBarSection>
          <Transplantation/>
          <Baggage/>

      </NavBarSection>
    )
  }
}