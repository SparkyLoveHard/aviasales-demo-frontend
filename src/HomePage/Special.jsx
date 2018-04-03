import React from 'react';
import styled from 'styled-components';

import SpecialTitleImg from '../Images/title-special.svg';
import Pobeda from '../Images/pobeda.png';
import Lufthansa from "../Images/lufthansa.png";

const SpecialBlock = styled.div`
  background: linear-gradient(#00B0DE, #196EBD);
  font-family: Roboto, sans-serif;
`;

const TicketsSpecial= styled.h2`
  color: #FFFFFF;
  margin:0;
  padding: 16px 0 24px 0;
  @media screen and (min-width: 768px) {
    padding: 24px 0 20px 0;
  }
`;

const SpecialCard = styled.div`
  margin: 0 0 12px 0;
  @media screen and (min-width: 768px) {
    margin: 0 0 24px 0;
  }
  @media screen and (min-width: 992px) {
    margin: 0 0 24px 0;
    width: 240px;
  }
  @media screen and (min-width: 1200px) {
    margin: 0 0 24px 0;
    width: 298px;
  }
`;

const SpecialTitleCard = styled.h3`
  margin: 0;
  padding: 22px 0 22px 16px;
  font-size: 16px;
  background-color: #CD1F27;
  color: #ffffff;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #CD1F27;
`;

const SpecialImg = styled.img`
  margin: 0 8px 0 0;
`;

const SpecialDescription = styled.div`
  background-color: #ffffff;
`;

const Img = styled.img`
  height: 30px;
  width: 122px;
  margin: 0 0 0 8px;
  @media screen and (min-width: 768px) {
    height: 25px;
    width: 100px;
  }
`;

const Offer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 18px 0 18px 0;
`;

const DaysAndPrice = styled.div`
  text-align: right;
  margin: 0 16px 0 0 ;
  @media screen and (min-width: 768px) {
    margin: 0 8px 0 0 ;
  }
`;

const Price = styled.div`
  font-family: Roboto,sans-serif;
  font-size: 20px;
`;

const DaysLeft = styled.div`
  font-family: Roboto,sans-serif;
  font-size: 12px;
  color: #D93633;
`;

const SpecialText = styled.p`
   margin: 0 0 0 8px;
`;

const LearnMore = styled.div`
  margin: 0 8px 0 8px;
`;

const Button = styled.button`
  font-size: 16px;
  background-color: #ffffff;
  width: 100%;
  margin: 27px 0 16px 0;
  padding: 10px 0 10px 0;
  border: 2px solid #CD1F27;
  color: #D93533;
`;

const SpecialExtra = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Roboto,sans-serif;
  font-size: 16px;
  color: #ffffff;
  margin: 0 0 24px 0;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export default class Special extends React.Component {
  render(){
    return (
      <SpecialBlock>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-12 col-lg-10 col-lg-offset-1 between-lg">
              <TicketsSpecial>Спецпредложения на авиабилеты</TicketsSpecial>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-lg-offset-1">
              <div className="row between-lg">
                <SpecialCard className="col-xs-12 col-md-4">
                  <SpecialDescription>
                    <CardHeader>
                      <SpecialTitleCard>Билеты от 499 рублей!</SpecialTitleCard>
                      <SpecialImg src=""/>
                    </CardHeader>
                    <Offer>
                      <div>
                        <Img src={Pobeda}/>
                      </div>
                      <DaysAndPrice>
                        <Price>от 499 р</Price>
                        <DaysLeft>Осталось 45 дней</DaysLeft>
                      </DaysAndPrice>
                    </Offer>
                    <div>
                      <SpecialText>Билеты от 499 рублей! <br/> Специальное предложение <br/>от авиакомпании Победа</SpecialText>
                    </div>
                    <LearnMore>
                      <Button>Узнать подробности</Button>
                    </LearnMore>
                  </SpecialDescription>
                </SpecialCard>
                <SpecialCard className="col-xs-12 col-md-4">
                  <SpecialDescription>
                    <CardHeader>
                      <SpecialTitleCard>Билеты от 499 рублей!</SpecialTitleCard>
                      <SpecialImg src={SpecialTitleImg}/>
                    </CardHeader>
                    <Offer>
                      <div>
                        <Img src={Lufthansa}/>
                      </div>
                      <DaysAndPrice>
                        <Price>от 499 р</Price>
                        <DaysLeft>Осталось 45 дней</DaysLeft>
                      </DaysAndPrice>
                    </Offer>
                    <div>
                      <SpecialText>Билеты от 499 рублей! <br/> Специальное предложение <br/>от авиакомпании Победа</SpecialText>
                    </div>
                    <LearnMore>
                      <Button>Узнать подробности</Button>
                    </LearnMore>
                  </SpecialDescription>
                </SpecialCard>
                <SpecialCard className="col-xs-12 col-md-4">
                  <SpecialDescription>
                    <CardHeader>
                      <SpecialTitleCard>Билеты от 499 рублей!</SpecialTitleCard>
                      <SpecialImg src={SpecialTitleImg}/>
                    </CardHeader>
                    <Offer>
                      <div>
                        <Img src={Lufthansa}/>
                      </div>
                      <DaysAndPrice>
                        <Price>от 499 р</Price>
                        <DaysLeft>Осталось 45 дней</DaysLeft>
                      </DaysAndPrice>
                    </Offer>
                    <div>
                      <SpecialText>Билеты от 499 рублей! <br/> Специальное предложение <br/>от авиакомпании Победа</SpecialText>
                    </div>
                    <LearnMore>
                      <Button>Узнать подробности</Button>
                    </LearnMore>
                  </SpecialDescription>
                </SpecialCard>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-12 col-lg-10 col-lg-offset-1">
              <SpecialExtra>
                <div>Смотреть все предложения</div>
                <div>*средняя цена по направлению</div>
              </SpecialExtra>
            </div>
          </div>
        </div>
      </SpecialBlock>
    )
  }
}