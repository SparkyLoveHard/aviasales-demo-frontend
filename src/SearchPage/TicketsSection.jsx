import React from 'react';
import styled from 'styled-components';
import Pinned from './Images/pin.svg';
import TakeOff from './Images/takeoff.png';
import Landing from './Images/landing.png';
import Arrow from './Images/arrow.png';
// import NoBaggage from './Images/no-baggage.png'
// import Bag from './Images/no-bag.svg';
// import Baggage from "./components/Baggage";
import ArrowBut from './Images/ArrowButton.svg';

import { TICKETS_INFO } from './TicketsInformation';


const Card = styled.div`
  display: flex;
  background-color: white;
  font-family: Roboto, sans-serif;
  border-radius: 4px;
  margin: 0 0 20px 0;
`;
const CardInfo = styled.div`
  width: 100%;
`;

const CardInfoBuy = styled.div`
  display: flex;
  align-items: center;  
  flex-direction: column;
  width: 208px;
`;
const CardMainInfo = styled.div`
  display: flex;
  justify-content: space-between;
  &:nth-last-child(1) {
    margin-bottom: 24px;
  }
`;
const ButtonBuyTicket = styled.button`
  border: 0;
  border-radius: 4px;
  color: #fff;
  margin: 48px 24px 0 24px ;
  background-color: #FF6D00;
  font-size: 16px;
  padding: 6px 0;
  width: 162px;
`;

const AirLineCompanyImg = styled.img`
  margin: 16px 0 0 16px;
`;

const PinnedImg = styled.img`
  display: inline-block;
  margin: 0 8px 0 0;
  height: 20px;
  width: 20px;
`;

const TimeText = styled.p`
  display: inline-flex;
  align-items: center;
  margin: 0;
  font-size: 28px;
  color: #323333;  
`;

const Text = styled.p`
  font-size: 12px;
  margin: 0;
  color: #9CA5A8;
`;

const TotalHours = styled.div`
  color: #A0B0B9;
  font-size: 12px;
`;

const CardInfoTop = styled.div`
  display: flex;
  justify-content: space-between;
  
`;

const Flight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TimeLine = styled.div`
  height: 1px;
  background-color: #A0B0B9;
  width: 205px;
`;

const FlightInput = styled.div`
  display: flex;
  align-items: center;
  margin: 12px 0 14px 0;
`;

const Airports = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  margin: 14px 0 0 0;
`;

const Departure = styled.div`
  margin: 0 0 0 16px;
`;

const Arrival = styled.div`
  text-align: right;
`;

const CardInfoBetweenLine = styled.div`
  border: 1px dashed #DDDDDD;
  margin: 14px 16px 14px 16px;
`;

const SchemeFlight = styled.div`
  margin: 6px 14px 0 14px;
  @media screen and(min-width: 992px) {
    margin: 6px 4px 0 4px;
  }
`;

const NameCity = Text.extend`
  margin: 10px 0 8px 0;
`;

const TicketOpenerSection = styled.div`
  margin-left: 10px;  
  background-color: grey;
`;

const TicketButtonOpener = styled.button`
  background-color: #EDF5F7;
  border: 0;
  height: 100%;
`;


const BetweenLine = styled.div`
  border: 0.5px solid #DDDDDD;
`;

const BuyOnCompany = styled.p`
  margin: 8px 0 0 0;
  color: #A0B0B9;
  font-size: 12px;
`;

const ShowMore = styled.button`
  width: 100%;
  font-size: 14px;
  color: white;
  background-color: #00ACDE;
  padding: 18px 0;
  border-radius: 4px;
  border: none;
  cursor: pointer;
`;

const CharterButton = styled.button`
  padding: 4px 12px 4px 12px;
  border-radius: 15px;
  background-color: inherit;
  font-size: 10px;
  color: #2196F3;
  border: 1px solid #2196F3;
  margin: 20px 14px 0 0;
  cursor: pointer;
`;

const CharterImgArrow = styled.img`
  cursor: pointer;
`;

class Ticket extends React.Component {
  render() {
    const {data: { airlinesCompanyImg, ticketPrice, buyOn,
      timeCityDeparture, nameCityDeparture, dateCityDeparture,
      timeFlight, timeCityArrival, nameCityArrival, dateCityArrival,
    },
    } = this.props;
    return (
      <Card>
        <CardInfoBuy>
          <ButtonBuyTicket>Купить<br /> за {ticketPrice}</ButtonBuyTicket>
          <BuyOnCompany>на {buyOn}</BuyOnCompany>
        </CardInfoBuy>
        <BetweenLine />
        <CardInfo>
          <CardInfoTop>
            <div>
              <AirLineCompanyImg src={airlinesCompanyImg} alt="" />
            </div>
            <div>
              <CharterButton>
                ЧАРТЕР
              </CharterButton>
              <CharterImgArrow src={Arrow} alt="arrow" />
            </div>
          </CardInfoTop>
          <CardMainInfo>
            <Departure>
              <TimeText><PinnedImg src={Pinned} alt="" />{timeCityDeparture}</TimeText>
              <NameCity>{nameCityDeparture}</NameCity>
              <Text>{dateCityDeparture}</Text>
            </Departure>
            <SchemeFlight>
              <Flight>
                <div>
                  <img src={TakeOff} alt="" />
                </div>
                <TotalHours>Всего: {timeFlight}</TotalHours>
                <div>
                  <img src={Landing} alt="" />
                </div>
              </Flight>
              <FlightInput>
                <input type="radio" />
                <TimeLine />
                <input type="radio" />
              </FlightInput>
              <Airports>
                <div>VKO</div>
                <div>BCN</div>
              </Airports>
            </SchemeFlight>
            <Arrival>
              <TimeText>{timeCityArrival}</TimeText>
              <NameCity>{nameCityArrival}</NameCity>
              <Text>{dateCityArrival}</Text>
            </Arrival>
          </CardMainInfo>
          <CardInfoBetweenLine />
          <CardMainInfo>
            <Departure>
              <TimeText><PinnedImg src={Pinned} alt="pinned" />{timeCityDeparture}</TimeText>
              <NameCity>{nameCityDeparture}</NameCity>
              <Text>{dateCityDeparture}</Text>
            </Departure>
            <SchemeFlight>
              <Flight>
                <div>
                  <img src={TakeOff} alt="" />
                </div>
                <TotalHours>5 часов</TotalHours>
                <div>
                  <img src={Landing} alt="" />
                </div>
              </Flight>
              <FlightInput>
                <input type="radio" />
                <TimeLine />
                <input type="radio" />
              </FlightInput>
              <Airports>
                <div>
                  VKO
                </div>
                <div>
                  BCN
                </div>
              </Airports>
            </SchemeFlight>
            <Arrival>
              <TimeText>
                {timeCityArrival}
              </TimeText>
              <NameCity>
                {nameCityArrival}
              </NameCity>
              <Text>
                {dateCityArrival}
              </Text>
            </Arrival>
          </CardMainInfo>
        </CardInfo>
        <TicketOpenerSection>
          <TicketButtonOpener>
            <img src={ArrowBut} alt="" />
          </TicketButtonOpener>
        </TicketOpenerSection>
      </Card>
    );
  }
}

class TicketCard extends React.Component {
  render() {
    const data = this.props.data;
    const cardTemplate = data.map(function(item, index) {
      return (
        <div key={index}>
          <Ticket data={item} />
        </div>
      );
    });
    return (
      <div>
        {cardTemplate}
      </div>
    );
  }
}

class ShowMoreButton extends React.Component {
  render() {
    return (
      <ShowMore>
        ПОКАЗАТЬ ЕЩЕ 10 БИЛЕТОВ!
      </ShowMore>
    );
  }
}

export default class TicketsSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Show: '',
    };
    this.handleClickShow = this.handleClickShow.bind(this);
  }
  handleClickShow() {
    this.setState({
      Show: true,
    });
  }

  render() {
    return (
      <div>
        <TicketCard data={TICKETS_INFO} />
        <ShowMoreButton onClick={this.handleClickShow}>
          {this.state.Show}
        </ShowMoreButton>
      </div>
    );
  }
}