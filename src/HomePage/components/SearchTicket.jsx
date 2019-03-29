import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Aircraft from './../Images/aero.svg';

export const ButtonFind = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 16px 0 88px 0;
  @media screen and (min-width: 566px) {
    justify-content: center;
    width: auto;
    padding: 32px 0 122px 0;
  }
  @media screen and (min-width: 992px) {
    padding: 48px 0 254px 0;
  }
`;

export const ButtonFindTickets = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ff9241;
  color: #fff;
  font-size: 24px;
  font-weight: 900;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  padding: 14px 24px 14px 45px;
  @media screen and (min-width: 566px) {
    width: auto;
    justify-content: center;
  }
`;

export const AircraftIcon = styled.img`
  margin-left: 16px;
  @media screen and (min-width: 566px) {
    margin: 0 0 0 24px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export default class SearchTicket extends React.Component {
  render() {
    return (
      <ButtonFind>
        <StyledLink to="/search">
          <ButtonFindTickets>Найти билеты<AircraftIcon src={Aircraft}/></ButtonFindTickets>
        </StyledLink>
      </ButtonFind> 
    )
  }
}