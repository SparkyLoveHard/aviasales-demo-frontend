import React, {Component} from 'react';
import styled from  'styled-components';

import AppStoreImg from '../Images/appstore.png';
import GoogleMarketImg from '../Images/googlemarket.png';
import WindowsPhoneImg from '../Images/windowsphone.png';


const Nav = styled.div``;

const NavTitle = styled.div`
  margin: 32px 0 16px 0 ;
  font-family: Roboto, sans-serif;
  font-size: 12px;
  font-weight: bold;  
  color: #4A4A4A;
`;

const LinkCountry = styled.div`
  margin: 0 0 12px 0;
  font-family: Roboto, sans-serif;
  font-size: 12px;
  color: #5B5B5C;
  &:nth-last-child(2) {
    margin: 0;
  }
`;
const NavOther = styled.div`
  margin: 16px 0 0 0;
  font-family: Roboto, sans-serif;
  font-size: 12px;
  color: #4A4A4A;
  font-weight: bold;
`;

const Line = styled.hr`
  margin: 0;
  color: #E0E6E8;
`;

const Download = styled.div`
  display: flex;
  flex-direction: column;
  
`;
const DownloadImg = styled.img`
  margin: 0;
`;

const AboutAviaSales = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Text = styled.div`
  margin: 0;
`;

export default class Footer extends Component {
  render() {
    return (
        <div>
          <div className="container">
            <div className="row">
              <Nav className="col-xs-6 col-md-3 col-lg-2">
                <NavTitle>СТРАНЫ</NavTitle>
                <LinkCountry>Россия</LinkCountry>
                <LinkCountry>Таиланд</LinkCountry>
                <LinkCountry>Черногория</LinkCountry>
                <LinkCountry>Кипр</LinkCountry>
                <LinkCountry>Болгария</LinkCountry>
                <LinkCountry>Грузия</LinkCountry>
                <NavOther>Все страны</NavOther>
              </Nav>
              <Nav className="col-xs-6 col-md-3 col-lg-2">
                <NavTitle>ГОРОДА</NavTitle>
                <LinkCountry>Москва</LinkCountry>
                <LinkCountry>Санкт-Перербург</LinkCountry>
                <LinkCountry>Симферополь</LinkCountry>
                <LinkCountry>Адлер</LinkCountry>
                <LinkCountry>Екатеринбург</LinkCountry>
                <LinkCountry>Лондон</LinkCountry>
                <NavOther>Все города</NavOther>
              </Nav>
              <Nav className="col-xs-6 col-md-3 col-lg-2">
                <NavTitle>АВИАКОМПАНИИ</NavTitle>
                <LinkCountry>Air Berlin</LinkCountry>
                <LinkCountry>Air France</LinkCountry>
                <LinkCountry>Alitalia</LinkCountry>
                <LinkCountry>Air Baltic</LinkCountry>
                <LinkCountry>Emirates</LinkCountry>
                <LinkCountry>KLM</LinkCountry>
                <NavOther>Все авиакомпании</NavOther>
              </Nav>
              <Nav className="col-xs-6 col-md-3 col-lg-2">
                <NavTitle>Аэропорты</NavTitle>
                <LinkCountry>Шереметьево</LinkCountry>
                <LinkCountry>Курумоч</LinkCountry>
                <LinkCountry>Домодедово</LinkCountry>
                <LinkCountry>Толмочево</LinkCountry>
                <LinkCountry>Владивосток</LinkCountry>
                <LinkCountry>Гамбург</LinkCountry>
                <NavOther>Все аэропорты</NavOther>
              </Nav>
              <Nav className="col-xs-6 col-md-3 col-lg-2">
                <NavTitle>Направления</NavTitle>
                <LinkCountry>MOV - SIP</LinkCountry>
                <LinkCountry>MOV - AER</LinkCountry>
                <LinkCountry>MOV - TIV</LinkCountry>
                <LinkCountry>MOV - MRV</LinkCountry>
                <LinkCountry>LED - MOV</LinkCountry>
                <LinkCountry>LED - MOW</LinkCountry>
                <LinkCountry>MOV - BKK</LinkCountry>
              </Nav>
              <Nav className="col-xs-6 col-md-3 col-lg-2">
                <NavTitle>Сервисы</NavTitle>
                <LinkCountry>Горящие авиабилеты</LinkCountry>
                <LinkCountry>Календарь низкиц цен</LinkCountry>
                <LinkCountry>Карта низких цен</LinkCountry>
                <LinkCountry>Спецпредложения</LinkCountry>
                <LinkCountry>Таблица цен</LinkCountry>
                <LinkCountry>Блог</LinkCountry>
                <LinkCountry>Помощь</LinkCountry>
              </Nav>
            </div>
          </div>



          <div className="container">
            <div className="row">
              <AboutAviaSales className="col-xs-10">
                <Text>O компании</Text>
                <Text>Партнерская программа</Text>
                <Text>Реклама</Text>
                <Text>Вакансии</Text>
                <Text>Помощь</Text>
                <Text>Правила</Text>
                <Text>White Label авиабилеты</Text>
              </AboutAviaSales>
              <Download className="">
                <div>
                  <DownloadImg src={AppStoreImg}/>
                </div>
                <div>
                  <DownloadImg src={GoogleMarketImg}/>
                </div>
                <div>
                  <DownloadImg src={WindowsPhoneImg}/>
                </div>
              </Download>
            </div>
          </div>
        </div>
    )
  }
}