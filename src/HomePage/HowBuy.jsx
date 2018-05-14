import React from 'react';
import styled from 'styled-components';

import Aircraft from '../Images/aircraft.png'
import Electron from '../Images/electron.png';
import Advice from '../Images/advice.png';

const HowBuySection = styled.div`
  margin: 20px 0 24px 0;
  @media screen and (min-width: 768px) {
    margin: 16px 0 48px 0;
  }
  @media screen and (min-width: 1024px) {
    margin: 20px 0 40px 0;
  }
`;

const Img = styled.img`
  margin: 0 10px 0 0;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
`;

const HowBuyTitle = styled.h3`
  font-family: Roboto, sans-serif;
  font-size: 13px;
  font-weight: bold;
  margin: 0;
`;

const Text = styled.p`
  font-family: Roboto, sans-serif;
  color: #4A4A4A;
`;

export default class HowBuy extends React.Component {
  render() {
    return (
        <HowBuySection>
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-12 col-lg-10 col-lg-offset-1">
                <Title>
                  <Img src={Aircraft}/>
                  <HowBuyTitle>КАК КУПИТЬ ДЕШЕВЫЕ АВИАБИЛЕТЫ?</HowBuyTitle>
                </Title>
                <Text>
                  Avisales.ru - это метапоисковик авиабилетов. Мы ищем билеты на самолет по сотням авиакомпаний и находим за считанные минуты самые дешевые авиабилеты. Чтобы купить авибилеты дешево, воспользуюсь нашим поиском, который  совершенно бесплатно сравнивает цены на авиабилеты онлайн и находит самые дешевые перелеты. Болльше нет смысла ходить в авиакассы, обзванивать агенства - дешевый билет находтся на расстоянии клика. На нашем сайте вы можете подобрать дешевые билеты на самоет в Европу, Азию и на другие континенты. Мы написали для вас простую инструкцию о том, как пользоваться поиском и экономить на перелетах от 1000 до 20 000 руб в год. Подробнее
                </Text>
              </div>
              <div className="col-xs-12 col-md-12 col-lg-10 col-lg-offset-1">
                <Title>
                  <Img src={Electron}/>
                  <HowBuyTitle>ЭЛЕКТРОННЫЙ АВИАБИЛЕТ</HowBuyTitle>
                </Title>
                <Text>
                  Электронный авиабилет - это, по сути, обычный билет на самолет, но только в менее привычном для путешественника виде. Вся информация об авиаперелете (данные пассажира, маршрут следования) хранится в электронной базе, а пассажир получает на руки маршрут-квитанцию. Некоторые пассажиры, купив авиабилет онлайн и получив маршрут-квитанцию, удивлены ее видом - это обыкновенный лист формата А4, на котором распечатана вся информация о пердстоящем перелете. Однако для действиельно официальный документ, подтверждающий договор между авиаперевозчиком и пассажиром. При регистрации на рейс пассажир должен предъявить маршру-квитанцию вместе с удостоверением личности точно так же, как предъявляют обыкновенный онлайн, стоит дешевле своего бумажного аналога. Подробнее
                </Text>
              </div>
              <div className="col-xs-12 col-md-12 col-lg-10 col-lg-offset-1">
                <Title>
                  <Img src={Advice}/>
                  <HowBuyTitle>20 СОВЕТОВ АВИАПУТЕШЕСТВЕННИКАМ</HowBuyTitle>
                </Title>
                <Text>
                  Есть масса путеводителей оп странам, но ни одного о том, как провести время в самолете. Для того, чтобы сделать ваш перелет максимально комфортным, мы написали 20 советов о подготовке к путеществию. Ведь настоящее путешествие начинается со слов Добро пожаловать на борт нашего самолета! Подробнее
                </Text>
              </div>
            </div>
          </div>
        </HowBuySection>
    )
  }
}