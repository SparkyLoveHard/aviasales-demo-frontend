import React, {Component} from 'react';
import styled from  'styled-components';

import Vk from '../Images/footer-vk.svg'
import Facebook from '../Images/footer-facebook.svg'
import Instagram from '../Images/footer-instagram.svg'
import Twitter from '../Images/footer-twitter.svg'
import Viber from '../Images/footer-viber.svg'

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
  &:nth-last-child(1) {
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
  color: #E0E6E8;
  margin: 24px 0 0 0;
`;

const AboutCompanyForUser = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 16px 0 0 0;
  @media screen and (min-width: 992px) {
    margin: 40px 0 0 0;
  }
`;

const AboutCompany = styled.p`
  margin: 8px 8px 0 0;
  font-family: Roboto, sans-serif;
  font-size: 12px;
  &:nth-last-child(1) {
    margin: 8px 0 0 0;
  }
`;

const SocialSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 4px 0 0 0;
`;

const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 12px 24px 0 0;
  &:nth-last-child(1) {
    margin-left: 12px;
    @media screen and (min-width: 400px) {
      margin-left: 0;
    }
  }
`;

const SocialImg = styled.img`
  margin: 0 0 0 0;
  &:nth-last-child(1) {
    margin-right: 12px;
`;

const SocialMediaText = styled.p`
  font-family: Roboto, sans-serif;
  font-size: 12px;
  margin: 0;
  padding: 0 0 0 6px;
`;

const ReservationOfHotels = styled.div`
  display: flex;
  justify-content: center;
  font-family: Roboto, sans-serif;
  font-size: 12px;
  margin: 24px 0 16px 0;
  @media screen and (min-width: 768px) {
    margin: 32px 0 16px 0;
    justify-content: left;
  }
  @media screen and (min-width: 768px) {
    margin: 32px 0 44px 0;
  }
`;

const Download = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
  @media screen and (min-width: 992px) {
    justify-content: flex-end;
    margin: 40px 0 0 0;
  }
`;

const DownloadApp = styled.div`
  @media screen and (min-width: 768px) {
    margin: 0 10px 0 0;
  }  
  @media screen and (min-width: 992px) {
    margin: 0 10px 0 0;
    &:nth-last-child(1){
      margin: 0;
    }
  }
`;

const DownloadImg = styled.img`
  margin: 0;
`;

const Inc = Download.extend`
  font-family: Roboto, sans-serif;
  font-size: 12px;
  margin: 24px 0 24px 0;
  @media screen and (min-width: 768px) {
    margin: 24px 0 40px 0;
  }
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
              <NavOther>Все страны &#8594;</NavOther>
            </Nav>
            <Nav className="col-xs-6 col-md-3 col-lg-2">
              <NavTitle>ГОРОДА</NavTitle>
              <LinkCountry>Москва</LinkCountry>
              <LinkCountry>Санкт-Перербург</LinkCountry>
              <LinkCountry>Симферополь</LinkCountry>
              <LinkCountry>Адлер</LinkCountry>
              <LinkCountry>Екатеринбург</LinkCountry>
              <LinkCountry>Лондон</LinkCountry>
              <NavOther>Все города &#8594;</NavOther>
            </Nav>
            <Nav className="col-xs-6 col-md-3 col-lg-2">
              <NavTitle>АВИАКОМПАНИИ</NavTitle>
              <LinkCountry>Air Berlin</LinkCountry>
              <LinkCountry>Air France</LinkCountry>
              <LinkCountry>Alitalia</LinkCountry>
              <LinkCountry>Air Baltic</LinkCountry>
              <LinkCountry>Emirates</LinkCountry>
              <LinkCountry>KLM</LinkCountry>
              <NavOther>Все авиакомпании &#8594;</NavOther>
            </Nav>
            <Nav className="col-xs-6 col-md-3 col-lg-2">
              <NavTitle>АЭРОПОРТЫ</NavTitle>
              <LinkCountry>Шереметьево</LinkCountry>
              <LinkCountry>Курумоч</LinkCountry>
              <LinkCountry>Домодедово</LinkCountry>
              <LinkCountry>Толмочево</LinkCountry>
              <LinkCountry>Владивосток</LinkCountry>
              <LinkCountry>Гамбург</LinkCountry>
              <NavOther>Все аэропорты &#8594;</NavOther>
            </Nav>
            <Nav className="col-xs-6 col-md-3 col-lg-2">
              <NavTitle>НАПРАВЛЕНИЯ</NavTitle>
              <LinkCountry>MOV - SIP</LinkCountry>
              <LinkCountry>MOV - AER</LinkCountry>
              <LinkCountry>MOV - TIV</LinkCountry>
              <LinkCountry>MOV - MRV</LinkCountry>
              <LinkCountry>LED - MOV</LinkCountry>
              <LinkCountry>MOV - BKK</LinkCountry>
            </Nav>
            <Nav className="col-xs-6 col-md-3 col-lg-2">
              <NavTitle>СЕРВИСЫ</NavTitle>
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
        <Line/>
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="row">
                <div className="col-xs-10 col-sm-12 col-md-12">
                  <AboutCompanyForUser>
                    <AboutCompany>О компании</AboutCompany>
                    <AboutCompany>Партнёрская программа</AboutCompany>
                    <AboutCompany>Реклама</AboutCompany>
                    <AboutCompany>Вакансии</AboutCompany>
                    <AboutCompany>Помощь</AboutCompany>
                    <AboutCompany>Правила</AboutCompany>
                    <AboutCompany>White Label авиабилеты</AboutCompany>
                  </AboutCompanyForUser>
                </div>
                <div className="col-xs-12">
                  <SocialSection>
                    <SocialMedia>
                      <SocialImg src={Vk}/><SocialMediaText>Вконтакте</SocialMediaText>
                    </SocialMedia>
                    <SocialMedia>
                      <SocialImg src={Facebook}/><SocialMediaText>Фейсбук</SocialMediaText>
                    </SocialMedia>
                    <SocialMedia>
                      <SocialImg src={Instagram}/><SocialMediaText>Инстаграм</SocialMediaText>
                    </SocialMedia>
                    <SocialMedia>
                      <SocialImg src={Twitter}/><SocialMediaText>Твиттер</SocialMediaText>
                    </SocialMedia>
                    <SocialMedia>
                      <SocialImg src={Viber}/><SocialMediaText>Вайбер</SocialMediaText>
                    </SocialMedia>
                  </SocialSection>
                </div>
              </div>
              <ReservationOfHotels>Поиск и бронирование отелей</ReservationOfHotels>
            </div>
            <div className="col-lg-5">
              <Download>
                <DownloadApp>
                  <DownloadImg src={AppStoreImg}/>
                </DownloadApp>
                <DownloadApp>
                  <DownloadImg src={GoogleMarketImg}/>
                </DownloadApp>
                <DownloadApp>
                  <DownloadImg src={WindowsPhoneImg}/>
                </DownloadApp>
              </Download>
              <Inc>© 2007–2018, Aviasales — дешевые авиабилеты</Inc>
            </div>
          </div>
        </div>
      </div>
    )
  }
}