import React from 'react';
import styled from 'styled-components';

import ToggleClickBlock from './TogglableBlock';

const NavBarSection = styled.div`
  display: none;
  @media screen and (min-width: 992px) {
    border-radius: 4px;
    display: block;
    background-color: #FFFFFF;
    font-family: Roboto, sans-serif;
    border-bottom: 1px solid #DDDDDD;
  }
`;

export default class NavBar extends React.Component {
  render() {
    return (
      <NavBarSection>
        <ToggleClickBlock />
      </NavBarSection>
    );
  }
}
