import React from 'react';
import styled from 'styled-components';
import 'flexboxgrid2';

import logo from '../Images/aviasales.png';
import logoText from '../Images/LogoText.png'
import Aircraft from '../Images/aero.svg'
import CalendarIcon from '../Images/minicalendar.png';
import Arrow from '../Images/arrow.svg';
import BlackArrow from  '../Images/Shape.svg';

import {Link} from 'react-router-dom';

export const HeaderStyle = styled.div`
  background: linear-gradient(#00B0DE, #01AEDC,#02ABDB,#02ABDB,#02ABDB,#196EBD);
`;

export const Logo = styled.div`
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

export const LogoImg = styled.img`
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

export const AircraftIcon = styled.img`
  margin-left: 16px;
  @media screen and (min-width: 566px){
    margin: 0 24px 0 24px;
  }
`;

export const CityOfDeparture = styled.input`
  width: 100%;
  border: none;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  @media screen and (min-width: 568px){
    margin: 0 2px 0 0;
    border-top-right-radius: unset;
  }
  @media screen and (min-width: 992px){
    border-bottom-left-radius: 4px;
  }
`;

export const CityOfArrival = styled.input`
  width: 100%;
  border: none;
  @media screen and (min-width: 568px){
    border-top-right-radius: 4px;
  }
  @media screen and (min-width: 992px){
    margin: 0 2px 0 0;
    border-top-right-radius: unset;
  }
`;
export const There = styled.input`
  width: 100%;
  margin: 0 2px 0 0;
  border: none;
  @media screen and (min-width: 568px){
    border-bottom-left-radius: 4px;
  }
  @media screen and (min-width: 992px){
    border-bottom-left-radius: unset;
    border-top-right-radius: 4px;
  }
`;

export const Back = styled.input`
  width: 100%;
  border: none;
  @media screen and (min-width: 568px){
    margin: 0 2px 0 0;
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const DepartureLayout = styled.div`
  display: flex;
  width: 100%;
  height: 56px;
  margin: 0 0 2px 0;
  @media screen and (min-width: 568px){
    width: 50%;
  }
  @media screen and (min-width: 992px){
    width: 22%;
  }
`;

export const ArrivalLayout = styled.div`
  display:flex;
  width: 100%;
  height: 56px;
  margin: 0 0 2px 0;
  @media screen and (min-width: 568px){
    width: 50%;
  }
  @media screen and (min-width: 992px){
    width: 22%;
  }
`;

export const ThereLayout = styled.div`
  display:flex;
  width: 50%;
  height: 56px;
  margin: 0 0 2px 0;
  
  @media screen and (min-width: 568px){
    width: 25%;
  }
  @media screen and (min-width: 992px){
    width: 17%;
  }
`;

export const BackLayout = styled.div`
  display:flex;
  width: 50%;
  height: 56px;
  margin: 0 0 2px 0;
  @media screen and (min-width: 568px){
    width: 25%;
  }
  @media screen and (min-width: 992px){
    width: 17%;
  }
`;

export const PassengerTicketsLayout = styled.div`
  display: flex;
  width: 100%;
  height: 56px;
  @media screen and (min-width: 568px){
    width: 50%;
  }
  @media screen and (min-width: 992px){
    width: 22%;
  }
`;

export const PassengerTickets = styled.select`
  display: flex;
  width: 100%;
  border: none; 
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  @media screen and (min-width: 568px){
    border-bottom-left-radius: unset;
  }
  @media screen and (min-width: 992px){
    border-top-right-radius: 4px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const Button = styled.div`
  display: flex;
  padding: 16px 0 88px 0;  
  align-items: center;
  justify-content: center;
  width: 100%;
  ;
  @media screen and (min-width: 566px){
    justify-content: center;
    width: auto;
    padding-bottom: 122px;
  }
  @media screen and (min-width: 992px){
    padding-bottom: 254px;
  }
`;

export const ButtonFindTickets = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #ff9241;
  color: #fff;
  font-size: 24px;
  font-weight: 900;
  padding: 14px 0 14px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  @media screen and (min-width: 566px){
    width: auto;
    padding: 16px 0 16px 45px;
  }
  @media screen and (min-width: 992px){
    padding: 16px 0 16px 45px;
  }
`;

const Header = () => (
  <HeaderStyle>
    <div className="container">
      <div className="row">
        <Logo className="col-xs-12">
          <LogoImg src={logo}/>
          <LogoText src={logoText}/>
        </Logo>
      </div>
    </div>
    <SearchTicketTitle>Поиск дешевых авиабилетов</SearchTicketTitle>
    <AviaTagline>Лучший способ купить авиабилеты дешево</AviaTagline>
    <div className="container">
      <div className="row">
        <Main className="col-xs-12 col-xs-offset-0 col-md-10 col-md-offset-1 col-lg-10 ">
          <DepartureLayout>
            <CityOfDeparture placeholder="Москва"/>
          </DepartureLayout>
          <ArrivalLayout>
            <CityOfArrival placeholder="Город прибытия"/>
          </ArrivalLayout>
          <ThereLayout>
            <There placeholder="Туда"/>
          </ThereLayout>
          <BackLayout>
            <Back placeholder="Обратно"/>
          </BackLayout>
          <PassengerTicketsLayout>
            <PassengerTickets>
              <option>1 пассажир, эконом</option>
            </PassengerTickets>
          </PassengerTicketsLayout>
        </Main>
      </div>
    </div>
    <StyledLink to="/search">
      <div className="container">
        <Button className="col-xs-12">
            <ButtonFindTickets>Найти билеты<AircraftIcon src={Aircraft}/></ButtonFindTickets>
        </Button>
      </div>
    </StyledLink>
  </HeaderStyle>
);

export default Header