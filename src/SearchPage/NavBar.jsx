import React from 'react';
import styled from 'styled-components';

import Transplantation from "./components/Transplantation";
import Baggage from "./components/Baggage";
import DepartureAndArrival from "./components/DepartureAndArrival";
import Airports from "./components/Airports";
import AirportTransplantation from "./components/AirportTransplantation";
import Airlines from "./components/Airlines";
import DurationOfTransplantation from "./components/DurationOfTransplantation";
import TravaelTime from "./components/TravaelTime";


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
        <DepartureAndArrival/>
        <Baggage/>
        <DurationOfTransplantation/>
        <TravaelTime/>
        <Airlines/>
        <Airports/>
        <AirportTransplantation/>
      </NavBarSection>
    )
  }
}