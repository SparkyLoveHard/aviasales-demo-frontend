import React from 'react';
import styled from 'styled-components';

import Transplantation from "./components/Transplantation";
import Baggage from "./components/Baggage";
import DepartureAndArrival from "./components/DepartureAndArrival";
import Airports from "./components/Airports";
import AirportTransplantation from "./components/AirportTransplantation";
import Airlines from "./components/Airlines";
import DurationOfTransplantation from "./components/DurationOfTransplantation";
import TravelTime from "./components/TravelTime";

import arrow from './Images/ArrowNav.svg'

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

export const TitleBlock = styled.div`
  border-bottom: 1px solid #DDDDDD;
  
`;

export const Title = styled.div`
  display: flex;
  margin: 0 0 0 0;
  padding: 16px 0 16px 0;
  cursor: pointer;
`;

export const TitleArrow = styled.img`
  margin: 0 0 0 16px;
`;

export const TitleText = styled.h3`
  margin: 0;
  font-size: 12px;
  color: #5B5B5C;
  padding: 0 0 0 6px;
`;



export default class NavBar extends React.Component {

  render() {
    return (
      <NavBarSection>
        <Transplantation/>
        <DepartureAndArrival/>
        <Baggage/>
      </NavBarSection>
    )
  }
}