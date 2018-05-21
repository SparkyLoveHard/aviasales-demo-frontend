import React from 'react';
import styled from 'styled-components';

import Russia from './Images/Russia.png'
import Pinned from './Images/pin.svg'
import TakeOff from './Images/takeoff.png';
import Landing from './Images/landing.png';
import Arrow from './Images/arrow.png';
import NoBaggage from './Images/no-baggage.png'
import Bag from './Images/bag.svg';
import Baggage from "./components/Baggage";

const CityOfDepartureInfo = styled.div`
  font-family: Roboto,sans-serif;
`;

const CityOfDepartureInfoTime = styled.p`
  font-size: 28px;
  margin: 0;
`;
const TimeBlock = styled.div`
  display: flex;
  margin: 0 0 6px 0;
`;

const PinImg = styled.img`
  margin: 0 8px 0 0;
`;

const CityOfDepartureName = styled.div`
  font-size: 12px;
  color: #9CA5A8;
 
`;
const CityOfDepartureDate = styled.div`
  font-size: 12px;
  color: #9CA5A8;
  margin: 4px 0 0 0;
`;

const RadioSection = styled.div`
  margin: 0 24px 0 24px;
`;

const Line = styled.hr`
  width: 205px;
  border: 0.5px solid #A0B0B9;
  margin: 0;
`;

const MainInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 12px 0;
`;


const TimeOfFlight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin:  0 0 6px 0;
`;
const TimeOfFlightText = styled.div`
  font-size: 12px;
  color: #A0B0B9;
`;

const RadioBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Airport = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px 0 0 0;
`;
const AirName = styled.div`
  font-size: 10px;

`;

const CityOfArrivalInfo = CityOfDepartureInfo.extend`
  text-align: right;
`;

const CityOfArrivalInfoTime = styled.div`
  font-size: 28px;
`;

const BetweenInfoLine = styled.div`
  border: 0.5px dashed #9CA5A8;
  margin: 14px 0 12px 0;
`;

const AirportCompany = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CharterSection = styled.div`
  display: flex;
  align-items: center;
`;

const CharterButton = styled.button`
  color: #2196F3;
  border: 1px solid #2196F3;
  border-radius: 16px;
  padding: 4px 10px 4px 10px;
  margin: 0 14px 0 0 ;
  font-size: 10px;
`;

const FullTicketsInformation =styled.div`
  display: flex;
  background-color: #ffffff;
  border-radius: 4px;
`;
const BaggageBlock = styled.div`
 display: flex; 
 justify-content: center;
 margin: 10px 0 12px 0;
`;

const ByForButton = styled.button`
  margin: 0 24px 0 24px;
  padding: 4px 46px 4px 46px;
  background-color: #FF6D00;
  color: #ffffff;
  border: none;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  font-size: 16px;
`;

const ButtonLine = styled.div`
  border: 0.5px solid #DDDDDD;
  margin: 0 16px 0 0;
`;

export default class TicketsInfo extends React.Component {
  render() {
    return (
      <FullTicketsInformation>
        <div>
          <BaggageBlock>
            <div>
              <img src={Bag} alt=""/>
            </div>
            <div>
              <img src={NoBaggage} alt=""/>
            </div>
            <div>
              <img src={Bag} alt=""/>
            </div>
            <div>
              <img src={NoBaggage} alt=""/>
            </div>
          </BaggageBlock>
          <div>
            <ByForButton>Купить<br/>за 7712</ByForButton>
          </div>
        </div>
        <ButtonLine/>
        <div>
          <AirportCompany>
            <div>
              <img src={Russia} alt=""/>
            </div>
            <CharterSection>
              <div>
                <CharterButton>ЧАРТЕР</CharterButton>
              </div>
              <div>
                <img src={Arrow} alt=""/>
              </div>
            </CharterSection>
          </AirportCompany>
          <MainInfo>
            <CityOfDepartureInfo>
              <TimeBlock>
                <PinImg src={Pinned} alt=""/>
                <CityOfDepartureInfoTime>00:04</CityOfDepartureInfoTime>
              </TimeBlock>
              <div>
                <CityOfDepartureName>Москва</CityOfDepartureName>
              </div>
              <div>
                <CityOfDepartureDate>24 feb 2011, sb</CityOfDepartureDate>
              </div>
            </CityOfDepartureInfo>
            <RadioSection>
              <TimeOfFlight>
                <div>
                  <img src={TakeOff} alt=""/>
                </div>
                <TimeOfFlightText>Всего 5 часов</TimeOfFlightText>
                <div>
                  <img src={Landing} alt=""/>
                </div>
              </TimeOfFlight>
              <RadioBlock>
                <input type="radio"/>
                <Line/>
                <input type="radio"/>
              </RadioBlock>
              <Airport>
                <AirName>BCN</AirName>
                <AirName>SVO</AirName>
              </Airport>
            </RadioSection>
            <CityOfArrivalInfo>
              <div>
                <CityOfArrivalInfoTime>00:04</CityOfArrivalInfoTime>
              </div>
              <div>
                <CityOfDepartureName>Москва</CityOfDepartureName>
              </div>
              <div>
                <CityOfDepartureDate>24 feb 2011, sb</CityOfDepartureDate>
              </div>
            </CityOfArrivalInfo>
          </MainInfo>
          <BetweenInfoLine/>
          <MainInfo>
            <CityOfDepartureInfo>
              <TimeBlock>
                <PinImg src={Pinned} alt=""/>
                <CityOfDepartureInfoTime>00:04</CityOfDepartureInfoTime>
              </TimeBlock>
              <div>
                <CityOfDepartureName>Москва</CityOfDepartureName>
              </div>
              <div>
                <CityOfDepartureDate>24 feb 2011, sb</CityOfDepartureDate>
              </div>
            </CityOfDepartureInfo>
            <RadioSection>
              <TimeOfFlight>
                <div>
                  <img src={TakeOff} alt=""/>
                </div>
                <TimeOfFlightText>Всего 5 часов</TimeOfFlightText>
                <div>
                  <img src={Landing} alt=""/>
                </div>
              </TimeOfFlight>
              <RadioBlock>
                <input type="radio"/>
                <Line/>
                <input type="radio"/>
              </RadioBlock>
              <Airport>
                <AirName>BCN</AirName>
                <AirName>SVO</AirName>
              </Airport>
            </RadioSection>
            <CityOfArrivalInfo>
              <div>
                <CityOfArrivalInfoTime>00:04</CityOfArrivalInfoTime>
              </div>
              <div>
                <CityOfDepartureName>Москва</CityOfDepartureName>
              </div>
              <div>
                <CityOfDepartureDate>24 feb 2011, sb</CityOfDepartureDate>
              </div>
            </CityOfArrivalInfo>
          </MainInfo>
        </div>
      </FullTicketsInformation>
    )
  }
}