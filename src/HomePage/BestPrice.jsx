import React from 'react';
import styled from 'styled-components';

import Calendar from './Images/calendar.png';
import Russia from './Images/russiaflag.png';
import Armenia from './Images/armeniaflag.png';
import Moldavia from './Images/moldaviaflag.png';

const Img = styled.img`
  margin: 32px 0 0 0;
`;

const Title = styled.h3`
  font-family: Roboto, sans-serif;
  font-size: 18px;
  color: #4a4a4a;
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
  margin: 0 0 16px 0;
  &:nth-last-child(1) {
    margin: 0;
  }
`;

const FromDeparture = styled.div`
  font-family: Roboto, sans-serif;
  font-size: 16px;
`;

const Price = styled.div`
  font-family: Roboto, sans-serif;
  font-size: 16px;
  color: #00bae8;
`;

const TitleNameCity = styled.h3`
  font-family: Roboto, sans-serif;
  margin: 0 0 2px 0;
  color: #5b5b5c;
  font-size: 22px;
`;

const TitleNameCountry = styled.h4`
  font-family: Roboto, sans-serif;
  font-size: 12px;
  margin: 0 0 0 0;
  color: #a0b0b9;
`;

const TitleBlock = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 24px 0;
`;

const BestPriceCard = styled.div`
  @media screen and (min-width: 992px) {
    width: 298px;
  }
`;

const Line = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  border: 0.4px dashed #afbec6;
  margin: 24px 0 24px 0;
  @media screen and (min-width: 992px) {
    width: auto;
    margin: 0 0 0 0;
    border: 0.4px dashed #afbec6;
  }
`;

const Text = styled.p`
  font-family: Roboto, sans-serif;
  font-size: 16px;
  margin: 40px 0 0 0;
  @media screen and (min-width: 992px) {
    margin: 80px 0 0 0;
  }
`;
const Rule = styled.p`
  font-family: Roboto, sans-serif;
  font-size: 14px;
  margin: 24px 0 40px;
  color: #a0b0b9;
  @media screen and (min-width: 768px) {
    margin: 16px 0 60px;
  }
  @media screen and (min-width: 992px) {
    margin: 16px 0 74px;
  }
`;

const BestPrice = () => {
  return (
    <div>
      <div className="center-xs">
        <Img src={Calendar} />
        <Title>
          Лучшие цены на авиабилеты за последний месяц
        </Title>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-md-offset-1 col-lg-offset-0 col-lg-12 col-xl-10 col-xl-offset-1">
            <div className="row between-lg">
              <BestPriceCard className="col-xs-12 col-md-12 col-lg-offset-0">
                <TitleBlock>
                  <div>
                    <Flag src={Russia} />
                  </div>
                  <div>
                    <TitleNameCity>
                      Симферополь (Крым)
                    </TitleNameCity>
                    <TitleNameCountry>
                      РОССИЯ
                    </TitleNameCountry>
                  </div>
                </TitleBlock>
                <CitiesAndPrice>
                  <FromDeparture>
                    Из Москвы
                  </FromDeparture>
                  <Price>
                    от 6 758 р
                  </Price>
                </CitiesAndPrice>
                <CitiesAndPrice>
                  <FromDeparture>
                    Из Санкт-Петербурга
                  </FromDeparture>
                  <Price>
                    от 7 857 р
                  </Price>
                </CitiesAndPrice>
                <CitiesAndPrice>
                  <FromDeparture>
                    Из Новорисийска
                  </FromDeparture>
                  <Price>
                    от 15 127 р
                  </Price>
                </CitiesAndPrice>
                <CitiesAndPrice>
                  <FromDeparture>
                    Из Екатеринбурга
                  </FromDeparture>
                  <Price>
                    от 9 275 р
                  </Price>
                </CitiesAndPrice>
                <CitiesAndPrice>
                  <FromDeparture>
                    Из Челябинска
                  </FromDeparture>
                  <Price>
                    от 9 148 р
                  </Price>
                </CitiesAndPrice>
              </BestPriceCard>
              <Line />
              <BestPriceCard className="col-xs-12 col-md-12 col-lg-offset-0">
                <TitleBlock>
                  <div>
                    <Flag src={Armenia} />
                  </div>
                  <div>
                    <TitleNameCity>
                      Ереван
                    </TitleNameCity>
                    <TitleNameCountry>
                      АРМЕНИЯ
                    </TitleNameCountry>
                  </div>
                </TitleBlock>
                <CitiesAndPrice>
                  <FromDeparture>
                    Из Москвы
                  </FromDeparture>
                  <Price>
                    от 6 758 р
                  </Price>
                </CitiesAndPrice>
                <CitiesAndPrice>
                  <FromDeparture>
                    Из Санкт-Петербурга
                  </FromDeparture>
                  <Price>
                    от 7 857 р
                  </Price>
                </CitiesAndPrice>
                <CitiesAndPrice>
                  <FromDeparture>
                    Из Сочи
                  </FromDeparture>
                  <Price>
                    от 15 127 р
                  </Price>
                </CitiesAndPrice>
                <CitiesAndPrice>
                  <FromDeparture>
                    Из Краснодара
                  </FromDeparture>
                  <Price>
                    от 9 275 р
                  </Price>
                </CitiesAndPrice>
                <CitiesAndPrice>
                  <FromDeparture>
                    Из Ростова-на-Дону
                  </FromDeparture>
                  <Price>
                    от 9 148 р
                  </Price>
                </CitiesAndPrice>
              </BestPriceCard>
              <Line />
              <BestPriceCard className="col-xs-12 col-md-12 col-lg-offset-0">
                <TitleBlock>
                  <div>
                    <Flag src={Moldavia} />
                  </div>
                  <div>
                    <TitleNameCity>
                      Кишинёв
                    </TitleNameCity>
                    <TitleNameCountry>
                      МОЛДАВИЯ
                    </TitleNameCountry>
                  </div>
                </TitleBlock>
                <CitiesAndPrice>
                  <FromDeparture>
                    Из Москвы
                  </FromDeparture>
                  <Price>
                    от 6 758 р
                  </Price>
                </CitiesAndPrice>
                <CitiesAndPrice>
                  <FromDeparture>
                    Из Санкт-Петербурга
                  </FromDeparture>
                  <Price>
                    от 7 857 р
                  </Price>
                </CitiesAndPrice>
                <CitiesAndPrice>
                  <FromDeparture>
                    Из Краснодара
                  </FromDeparture>
                  <Price>
                    от 15 127 р
                  </Price>
                </CitiesAndPrice>
                <CitiesAndPrice>
                  <FromDeparture>
                    Из Сургута
                  </FromDeparture>
                  <Price>
                    от 9 275 р
                  </Price>
                </CitiesAndPrice>
                <CitiesAndPrice>
                  <FromDeparture>
                    Из Нового Уренгоя
                  </FromDeparture>
                  <Price>
                    от 9 148 р
                  </Price>
                </CitiesAndPrice>
              </BestPriceCard>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 center-xs  col-md-10 col-md-offset-1 col-lg-6 col-lg-offset-3">
            <Text>
              Мы знаем, где купить авиабилеты дешево. Билеты на самолет в 220
              стран мира. Поиск и сравнение цен на авиабилеты среди 100 агентств
              и 728 авиакомпаний.
            </Text>
          </div>
          <div className="col-xs-12 center-xs  col-md-10 col-md-offset-1 col-lg-6 col-lg-offset-3">
            <Rule>
              Цены, найденные пользователями за последние 48 часов, не являются
              офертой.
            </Rule>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestPrice;