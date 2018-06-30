import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import logo from './Images/aviasales.png';
import logoText from './Images/LogoText.png';
import Aircraft from './Images/aero.svg';
import CalendarIcon from './Images/minicalendar.png';
import BlueArrowLeft from './Images/Arrow-left-icon.png';
import BlueArrowRight from './Images/Arrow-right-icon.png.png';

export const HeaderStyle = styled.div`
  background: linear-gradient(
    #00b0de,
    #01aedc,
    #02abdb,
    #02abdb,
    #02abdb,
    #196ebd
  );
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  margin: 0 0 47px 0;
  @media screen and (min-width: 768px) {
    margin-bottom: 81px;
  }
  @media screen and (min-width: 1024px) {
    margin-bottom: 213px;
  }
`;

export const LogoImg = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 12px;
`;

const LogoText = styled.img`
  @media screen and (min-width: 320px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`;

const SearchTicketTitle = styled.h1`
  text-align: center;
  font-family: Roboto, sans-serif;
  font-size: 20px;
  color: #ffffff;
  @media screen and (min-width: 320px) {
    font-size: 20px;
  }
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
  @media screen and (min-width: 1024px) {
    font-size: 40px;
  }
`;

const AviaTagline = styled.h2`
  display: flex;
  justify-content: center;
  font-family: Roboto, sans-serif;
  font-size: 20px;
  color: #ffffff;
  @media screen and (min-width: 320px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    display: flex;
  }
  @media screen and (min-width: 1024px) {
    font-size: 24px;
  }
`;

export const CityOfDeparture = styled.input`
  width: 100%;
  padding: 18px 0 18px 16px;
  border: none;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  @media screen and (min-width: 568px) {
    margin: 0 2px 0 0;
    border-top-right-radius: unset;
  }
  @media screen and (min-width: 992px) {
    border-bottom-left-radius: 4px;
  }
`;

export const ArrowImg = styled.img`
  display: flex;

`;
export const ImgSearchLayout = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  bottom: 0;
  top: 0;
  margin: 20px 0;
`;

export const LayoutArrow = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 16px 0 0;
  align-items: center;
`;
export const Mow = styled.span`
  margin: 0 12px 0 0;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  color: #a0b0b9;
`;

export const CityOfArrival = styled.input`
  width: 100%;
  border: none;
  padding: 18px 0 18px 16px;
  @media screen and (min-width: 568px) {
    border-top-right-radius: 4px;
  }
  @media screen and (min-width: 992px) {
    margin: 0 2px 0 0;
    border-top-right-radius: unset;
  }
`;

export const There = styled.input`
  width: 100%;
  margin: 0 2px 0 0;
  border: none;
  padding: 18px 0 18px 16px;
  @media screen and (min-width: 568px) {
    border-bottom-left-radius: 4px;
  }
  @media screen and (min-width: 992px) {
    border-bottom-left-radius: unset;
    border-top-right-radius: 4px;
  }
`;

export const Back = styled.input`
  width: 100%;
  border: none;
  padding: 18px 0 18px 16px;

  @media screen and (min-width: 568px) {
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
  margin: 0 0 2px 0;
  position: relative;
  @media screen and (min-width: 568px) {
    width: 50%;
  }
  @media screen and (min-width: 992px) {
    width: 22%;
  }
`;

export const ArrivalLayout = styled.div`
  display: flex;
  width: 100%;
  margin: 0 0 2px 0;
  @media screen and (min-width: 568px) {
    width: 50%;
  }
  @media screen and (min-width: 992px) {
    width: 22%;
  }
`;

export const ThereLayout = styled.div`
  display: flex;
  width: 50%;
  margin: 0 0 2px 0;
  position: relative;
  @media screen and (min-width: 568px) {
    width: 25%;
  }
  @media screen and (min-width: 992px) {
    width: 17%;
  }
`;

export const BackLayout = styled.div`
  display: flex;
  width: 50%;
  margin: 0 0 2px 0;
  position: relative;
  @media screen and (min-width: 568px) {
    width: 25%;
  }
  @media screen and (min-width: 992px) {
    width: 17%;
  }
`;

export const PassengerTicketsLayout = styled.div`
  display: flex;
  width: 100%;
  @media screen and (min-width: 568px) {
    width: 50%;
  }
  @media screen and (min-width: 992px) {
    width: 22%;
  }
`;

export const PassengerTickets = styled.select`
  display: flex;
  width: 100%;
  border: none;
  height: 54px;
  padding: 14px 0 14px 16px;
  border-bottom-left-radius: 4px;
  @media screen and (min-width: 568px) {
    border-bottom-left-radius: unset;
  }
  @media screen and (min-width: 992px) {
    border-top-right-radius: 4px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const Button = styled.div`
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

const CalendarImgLayout = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  bottom: 0;
  top: 0;
  margin: 17px 0 0 0;
`;
export const Calendar = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 16px 0 0;
  align-items: center;
`;

export const CalendarImg = styled.img``;

const Header = () => (
  <HeaderStyle>
    <div className="container">
      <div className="row">
        <Logo className="col-xs-12">
          <LogoImg src={logo} />
          <LogoText src={logoText} />
        </Logo>
      </div>
    </div>
    <SearchTicketTitle>
      Поиск дешевых авиабилетов
    </SearchTicketTitle>
    <AviaTagline>
      Лучший способ купить авиабилеты дешево
    </AviaTagline>
    <div className="container">
      <div className="row">
        <Main className="col-xs-12 col-xs-offset-0 col-md-10 col-md-offset-1 col-lg-10 ">
          <DepartureLayout>
            <CityOfDeparture placeholder="Москва" />
            <ImgSearchLayout>
              <Mow>
                MOW
              </Mow>
              <LayoutArrow>
                <div>
                  <ArrowImg src={BlueArrowLeft} alt="" />
                </div>
                <div>
                  <ArrowImg src={BlueArrowRight} alt="" />
                </div>
              </LayoutArrow>
            </ImgSearchLayout>
          </DepartureLayout>
          <ArrivalLayout>
            <CityOfArrival placeholder="Город прибытия" />
          </ArrivalLayout>
          <ThereLayout>
            <There placeholder="Туда" />
            <CalendarImgLayout>
              <Calendar>
                <CalendarImg src={CalendarIcon} alt="Calendar" />
              </Calendar>
            </CalendarImgLayout>
          </ThereLayout>
          <BackLayout>
            <Back placeholder="Обратно" />
            <CalendarImgLayout>
              <Calendar>
                <CalendarImg src={CalendarIcon} alt="" />
              </Calendar>
            </CalendarImgLayout>
          </BackLayout>
          <PassengerTicketsLayout>
            <PassengerTickets>
              <option>
                1 пассажир, эконом
              </option>
            </PassengerTickets>
          </PassengerTicketsLayout>
        </Main>
      </div>
    </div>
    <div className="container">
      <div className="className='col-xs-12">
        <Button>
          <StyledLink to="/search">
            <ButtonFindTickets>
              Найти билеты
              <AircraftIcon src={Aircraft} />
            </ButtonFindTickets>
          </StyledLink>
        </Button>
      </div>
    </div>
  </HeaderStyle>
);

export default Header;
