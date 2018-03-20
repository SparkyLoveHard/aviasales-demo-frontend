import React from 'react';
import styled from 'styled-components';

import Krasnodar from '../Images/krasnodar.png';
import Sochi from '../Images/sochi.jpg';
import SaintPetersburg from '../Images/saintpetersburg.jpg';
import MineralnieVodi from '../Images/mineralnievodi.jpg';
import Simferopol from '../Images/simferopol.jpg';
import Barcelona from '../Images/barcelona.jpg';

import RussianFlag from '../Images/russiaflag.png';
import SpainFlag from '../Images/spainflag.png';


const Cards = styled.div`
  font-family: Roboto,sans-serif;
  background-color: #F8FCFF;
`;

const Card = styled.div`
  margin: 0 0 12px 0;
  background-color: #ffffff;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  box-shadow: 0 12px 12px rgba(0, 75, 93, 0.12);
  @media screen and (min-width: 768px) {
    margin: 0 0 24px 0;
  }
  @media screen and (min-width: 768px) {
    margin: 0 0 30px 0;
  }
`;

const CityImg = styled.img`
  max-width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const CityAndCountry = styled.div`
  display: flex;
  align-items: center;
  margin: 12px 0 16px 0;
`;

const Flag = styled.img`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    margin: 0 0 0 24px;
  }
`;

const CityName = styled.p`
  font-size: 16px;
  margin: 0 0 0 16px;
  color: #5B5B5C;
`;
const CountryName = styled.p`
  margin: 0 0 0 16px;
  font-size: 12px;
  padding-top: 2px;
  color: #A0B0B9;
`;
const PriceAndDate = styled.div`
  margin: 12px 16px 16px 0;
`;
const Price = styled.p`
  font-size: 16px;
  margin: 0;
  color: #00BAE8;
`;
const Date = styled.p`
  margin: 0;
  font-size: 12px;
  padding-top: 2px;
  color: #A0B0B9;
  text-align: right;
`;
const Description = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CityCards = () => (
    <Cards>
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-10 col-md-offset-1 col-lg-5 '>
            <Card>
              <div>
                <CityImg src={Krasnodar}/>
              </div>
              <Description>
                <CityAndCountry>
                  <div>
                    <Flag src={RussianFlag}/>
                  </div>
                  <div>
                    <CityName>Краснодар</CityName>
                    <CountryName>РОССИЯ</CountryName>
                  </div>
                </CityAndCountry>
                <PriceAndDate>
                  <Price>Найти от 1 212 р</Price>
                  <Date>18 марта</Date>
                </PriceAndDate>
              </Description>
            </Card>
          </div>
          <div className='col-xs-12 col-md-10 col-md-offset-1 col-lg-5 col-lg-offset-0'>
            <Card>
              <div>
                <CityImg src={Sochi}/>
              </div>
              <Description>
                <CityAndCountry>
                  <div>
                    <Flag src={RussianFlag}/>
                  </div>
                  <div>
                    <CityName>Сочи (Адлер)</CityName>
                    <CountryName>РОССИЯ</CountryName>
                  </div>
                </CityAndCountry>
                <PriceAndDate>
                  <Price>Найти от 1 334 р</Price>
                  <Date>27 марта</Date>
                </PriceAndDate>
              </Description>
            </Card>
          </div>
          <div className='col-xs-12 col-md-10 col-md-offset-1 col-lg-5 col-lg-offset-1'>
            <Card>
              <div>
                <CityImg src={SaintPetersburg}/>
              </div>
              <Description>
                <CityAndCountry>
                  <div>
                    <Flag src={RussianFlag}/>
                  </div>
                  <div>
                    <CityName>Санкт-Петербург</CityName>
                    <CountryName>РОССИЯ</CountryName>
                  </div>
                </CityAndCountry>
                <PriceAndDate>
                  <Price>Найти от 1 508 р</Price>
                  <Date>19 февраля</Date>
                </PriceAndDate>
              </Description>
            </Card>
          </div>
          <div className='col-xs-12 col-md-10 col-md-offset-1 col-lg-5 col-lg-offset-0'>
            <Card>
              <div>
                <CityImg src={MineralnieVodi}/>
              </div>
              <Description>
                <CityAndCountry>
                  <div>
                    <Flag src={RussianFlag}/>
                  </div>
                  <div>
                    <CityName>Минеральные Воды</CityName>
                    <CountryName>РОССИЯ</CountryName>
                  </div>
                </CityAndCountry>
                <PriceAndDate>
                  <Price>Найти от 2 074 р</Price>
                  <Date>18 марта</Date>
                </PriceAndDate>
              </Description>
            </Card>
          </div>
          <div className='col-xs-12 col-md-10 col-md-offset-1 col-lg-5 col-lg-offset-1'>
            <Card>
              <div>
                <CityImg src={Simferopol}/>
              </div>
              <Description>
                <CityAndCountry>
                  <div>
                    <Flag src={RussianFlag}/>
                  </div>
                  <div>
                    <CityName>Симферополь</CityName>
                    <CountryName>РОССИЯ</CountryName>
                  </div>
                </CityAndCountry>
                <PriceAndDate>
                  <Price>Найти от 2 407 р</Price>
                  <Date>13 марта</Date>
                </PriceAndDate>
              </Description>
            </Card>
          </div>
          <div className='col-xs-12 col-md-10 col-md-offset-1 col-lg-5 col-lg-offset-0'>
            <Card>
              <div>
                <CityImg src={Barcelona}/>
              </div>
              <Description>
                <CityAndCountry>
                  <div>
                    <Flag src={SpainFlag}/>
                  </div>
                  <div>
                    <CityName>Краснодар</CityName>
                    <CountryName>РОССИЯ</CountryName>
                  </div>
                </CityAndCountry>
                <PriceAndDate>
                  <Price>Найти от 4 217 р</Price>
                  <Date>24 марта</Date>
                </PriceAndDate>
              </Description>
            </Card>
          </div>
        </div>
      </div>
    </Cards>
);

export default CityCards