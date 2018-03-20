import React from 'react';
import styled from 'styled-components';

import Pobeda from '../Images/pobeda.png';


const SpecialBlock = styled.div`
  background: linear-gradient(#00B0DE, #196EBD);
  font-family: Roboto, sans-serif;
`;

const TicketsSpecial= styled.h2`
  color: #FFFFFF;
  margin:0;
  padding: 16px 0 24px 0;
`;

const SpecialCard = styled.div`
  margin: 0 0 12px 0;
  @media screen and (min-width: 768px) {
    margin: 0 0 24px 0;
  }
`;

const SpecialTitleCard = styled.h3`
  margin: 0;
  padding: 22px 0 22px 16px;
  font-size: 16px;
  background-color: #CD1F27;
  color: #ffffff;
`;

const SpecialDescription = styled.div`
  background-color: #ffffff;
`;


const Img = styled.img`
  height: 30px;
  width: 122px;
`;

const Offer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 18px 8px 18px 8px;
`;

const DaysAndPrice = styled.div`
  text-align: right;
`;

const Price = styled.div`
  font-family: Roboto,sans-serif;
  font-size: 20px;
`;

const DaysLeft = styled.div`
  font-family: Roboto,sans-serif;
  font-size: 12px;
  color: #D93633;
  margin: 10px 0 17px 0;
`;

const SpecialText = styled.p`
   margin: 0 0 0 8px;
`;

const LearnMore = styled.button`
  font-size: 16px;
  background-color: #ffffff;
  width: 100%;
  margin: 27px 8px 16px 0;
  padding: 10px 0 10px 0;
  border: 2px solid #CD1F27;
  color: #D93533;
`;

const WatchMore = styled.p`
  margin: 0;
  font-size: 16px;
  color: #ffffff;
`;

export default class Special extends React.Component {
  render(){
    return (
      <SpecialBlock>
        <div className='col-xs-12'>
          <TicketsSpecial>Спецпредложения на авиабилеты</TicketsSpecial>
        </div>
        <div className="container">
          <div className='row'>
            <div className='col-xs-12 col-md-4'>
              <SpecialCard>
                <SpecialDescription>
                  <SpecialTitleCard>Билеты от 499 рублей!</SpecialTitleCard>
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
                  <div className="col-xs-12">
                    <LearnMore>Узнать подробности</LearnMore>
                  </div>
                </SpecialDescription>
              </SpecialCard>
            </div>
            <div className='col-xs-12 col-md-4'>
              <SpecialCard>
                <SpecialDescription>
                  <SpecialTitleCard>Билеты от 499 рублей!</SpecialTitleCard>
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
                  <div className="col-xs-12">
                    <LearnMore>Узнать подробности</LearnMore>
                  </div>
                </SpecialDescription>
              </SpecialCard>
            </div>
            <div className='col-xs-12 col-md-4'>
              <SpecialCard>
                <SpecialDescription>
                  <SpecialTitleCard>Билеты от 499 рублей!</SpecialTitleCard>
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
                  <div className="col-xs-12">
                    <LearnMore>Узнать подробности</LearnMore>
                  </div>
                </SpecialDescription>
              </SpecialCard>
            </div>
          </div>
        </div>
      </SpecialBlock>
    )
  }
}