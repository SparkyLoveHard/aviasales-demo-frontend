import React from 'react';
import styled from 'styled-components';
import 'flexboxgrid2';

import logo from '../Images/aviasales.png';
import logoText from '../Images/LogoText.png'
import Aircraft from '../Images/aero.svg'
import Calendar from '../Images/minicalendar.png';
import Arrow from '../Images/arrow.svg';
import BlackArrow from  '../Images/Shape.svg';


const HeaderStyle = styled.div`
  background: linear-gradient(#00B0DE, #01AEDC,#02ABDB,#02ABDB,#02ABDB,#196EBD);
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  margin: 0 0 47px 0;
  @media screen and (min-width: 768px){
    margin-bottom: 81px;
  }
  @media screen and (min-width: 1024px){
    margin-bottom: 213px;
  }    
`;

const LogoImg = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 12px;

`;

const LogoText = styled.img`
  @media screen and (min-width: 320px){
    display: none;
  }
  @media screen and (min-width: 768px){
    display: inline-block;
  }    
`;

const SearchTicketTitle = styled.h1`
  text-align: center;
  font-family: Roboto, sans-serif;
  font-size: 20px;
  color: #ffffff;
  
  @media screen and (min-width: 320px){
    font-size: 20px;
  }
  @media screen and (min-width: 768px){
    font-size: 32px;
  }
  @media screen and (min-width: 1024px){
    font-size: 40px;
  }
`;

const AviaTagline = styled.h2`
  display: flex;
  justify-content: center;
  font-family: Roboto, sans-serif;
  font-size: 20px;
  color: #ffffff;
  @media screen and (min-width: 320px){
    display: none;
  }
  @media screen and (min-width: 768px){
    display: flex;
  }
  @media screen and (min-width: 1024px){
    font-size: 24px;
  }
`;

const CityOfDeparture = styled.div`
width: 100%;
  @media screen and (min-width: 768px){

  }
`;

const CityOfArrival = styled.div`
width: 100%;
    @media screen and (min-width: 768px){

  }
`;

const There = styled.div`
width: 100%;
    @media screen and (min-width: 768px){

  }
`;

const Back = styled.div`
width: 100%;
    @media screen and (min-width: 768px){
 
  }
`;

const AddTickets = styled.div`
width: 100%;
    @media screen and (min-width: 768px){

  }
`;

const Button = styled.div`
  display: flex;
  ;
  @media screen and (min-width: 566px){
    justify-content: center;
    width: auto;
  }
`;

const ButtonFindTickets = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: #ff9241;
  color: #fff;
  font-size: 24px;
  font-weight: 900;
  padding: 14px 0 14px 0;
  border: none;
  margin-bottom: 88px;
  border-radius: 4px;
  @media screen and (min-width: 566px){
    width: auto;
    padding: 16px 0 16px 45px;
    margin-bottom: 122px;
  }
  @media screen and (min-width: 1024px){
    width: auto;
    padding: 16px 0 16px 45px;
    margin-bottom: 254px;
  }
`;

const AircraftIcon = styled.img`
  margin-left: 16px;
    @media screen and (min-width: 566px){
    margin: 0 24px 0 24px;
  }
`;


const Header = () => (
  <HeaderStyle>
    <Logo className="col-xs-12">
      <LogoImg src={logo}/>
      <LogoText src={logoText}/>
    </Logo>
    <SearchTicketTitle>Поиск дешевых авиабилетов</SearchTicketTitle>
    <AviaTagline>Лучший способ купить авиабилеты дешево</AviaTagline>
    <Button className="col-xs-12">
      <ButtonFindTickets>Найти билеты<AircraftIcon src={Aircraft}/></ButtonFindTickets>
    </Button>
  </HeaderStyle>
);




export default Header