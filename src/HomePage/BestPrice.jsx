import React from 'react';
import styled from 'styled-components';

import Calendar from '../Images/calendar.png';

import Russia from '../Images/russiaflag.png'
import Armenia from '../Images/armeniaflag.png';
import Moldavia from '../Images/moldaviaflag.png';

const Img = styled.img`

`;
const Title = styled.h3`
  font-family: Roboto,sans-serif;
  font-size: 18px;
  color:#4A4A4A; 
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

const Flag = styled.img`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  margin: 0 12px 0 0;
`;

const CitiesAndPrice = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FromDeparture = styled.div`
   font-family: Roboto, sans-serif;
   font-size: 16px;
`;

const Price = styled.div`
  font-family: Roboto, sans-serif;
  font-size: 16px;
  color: #00BAE8;
`;

const TitleNameCity = styled.h3`
  font-family: Roboto,sans-serif;
  margin: 0 0 2px 0;
  color: #5B5B5C;
  font-size: 22px;
`;

const TitleNameCountry = styled.h4`
  font-family: Roboto,sans-serif;
  font-size: 12px;
  margin: 0 0 0 0;
  color: #A0B0B9;
`;


const TitleBlock = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 24px 0;
`;

const BestPriceCard = styled.div`
  
`;

export default class BestPrice extends React.Component {
  render() {
    return (
      <div>
        <div className='center-xs'>
          <Img src={Calendar}/>
          <Title>Лучшие цены на авиабилеты за последний месяц</Title>
        </div>
        <div className="container">
          <div className="row">
            <BestPriceCard className="col-xs-12 col-md-10 col-md-offset-1 col-lg-3 col-lg-offset-1">
              <TitleBlock>
                <div>
                  <Flag src={Russia}/>
                </div>
                <div>
                  <TitleNameCity>Симферополь (Крым)</TitleNameCity>
                  <TitleNameCountry>РОССИЯ</TitleNameCountry>
                </div>
              </TitleBlock>
              <CitiesAndPrice>
                <FromDeparture>Из Москвы</FromDeparture>
                <Price>от 6 758 р</Price>
              </CitiesAndPrice>
              <CitiesAndPrice>
                <FromDeparture>Из Санкт-Петербурга</FromDeparture>
                <Price>от 7 857 р</Price>
              </CitiesAndPrice>
              <CitiesAndPrice>
                <FromDeparture>Из Новорисийска</FromDeparture>
                <Price>от 15 127 р</Price>
              </CitiesAndPrice>
              <CitiesAndPrice>
                <FromDeparture>Из Екатеринбурга</FromDeparture>
                <Price>от 9 275 р</Price>
              </CitiesAndPrice>
              <CitiesAndPrice>
                <FromDeparture>Из Челябинска</FromDeparture>
                <Price>от 9 148 р</Price>
              </CitiesAndPrice>
            </BestPriceCard>
            <BestPriceCard className="col-xs-12 col-md-10 col-md-offset-1 col-lg-3">
              <TitleBlock>
                <div>
                  <Flag src={Armenia}/>
                </div>
                <div>
                  <TitleNameCity>Ереван</TitleNameCity>
                  <TitleNameCountry>АРМЕНИЯ</TitleNameCountry>
                </div>
              </TitleBlock>
              <CitiesAndPrice>
                <FromDeparture>Из Москвы</FromDeparture>
                <Price>от 6 758 р</Price>
              </CitiesAndPrice>
              <CitiesAndPrice>
                <FromDeparture>Из Санкт-Петербурга</FromDeparture>
                <Price>от 7 857 р</Price>
              </CitiesAndPrice>
              <CitiesAndPrice>
                <FromDeparture>Из Новорисийска</FromDeparture>
                <Price>от 15 127 р</Price>
              </CitiesAndPrice>
              <CitiesAndPrice>
                <FromDeparture>Из Екатеринбурга</FromDeparture>
                <Price>от 9 275 р</Price>
              </CitiesAndPrice>
              <CitiesAndPrice>
                <FromDeparture>Из Челябинска</FromDeparture>
                <Price>от 9 148 р</Price>
              </CitiesAndPrice>
            </BestPriceCard>
            <BestPriceCard className="col-xs-12 col-md-10 col-md-offset-1 col-lg-3 col-lg-offset-1">
              <TitleBlock>
                <div>
                  <Flag src={Moldavia}/>
                </div>
                <div>
                  <TitleNameCity>Кишенёв</TitleNameCity>
                  <TitleNameCountry>МОЛДАВИЯ</TitleNameCountry>
                </div>
              </TitleBlock>
              <CitiesAndPrice>
                <FromDeparture>Из Москвы</FromDeparture>
                <Price>от 6 758 р</Price>
              </CitiesAndPrice>
              <CitiesAndPrice>
                <FromDeparture>Из Санкт-Петербурга</FromDeparture>
                <Price>от 7 857 р</Price>
              </CitiesAndPrice>
              <CitiesAndPrice>
                <FromDeparture>Из Новорисийска</FromDeparture>
                <Price>от 15 127 р</Price>
              </CitiesAndPrice>
              <CitiesAndPrice>
                <FromDeparture>Из Екатеринбурга</FromDeparture>
                <Price>от 9 275 р</Price>
              </CitiesAndPrice>
              <CitiesAndPrice>
                <FromDeparture>Из Челябинска</FromDeparture>
                <Price>от 9 148 р</Price>
              </CitiesAndPrice>
            </BestPriceCard>
          </div>
        </div>

      </div>
    )
  }
}