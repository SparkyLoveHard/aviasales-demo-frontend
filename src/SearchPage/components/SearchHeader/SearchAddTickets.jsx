import React from 'react';
import styled from 'styled-components';

export const PassengerTicketsLayout = styled.div`
  display: flex;
  width: 100%;
  margin: 0 0 2px 0;
  position: relative;
  @media screen and (min-width: 568px) {
    width: 50%;
  }
  @media screen and (min-width: 992px) {
    width: 22%;
  }
`;

export const PassengerTickets = styled.input`
  width: 100%;
  border: none;
  padding: 18px 0 18px 16px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  cursor: pointer;
  @media screen and (min-width: 568px) {
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: unset;
  }
  @media screen and (min-width: 992px) {
    margin: 0 2px 0 0;
    border-top-right-radius: 4px;
  }
`;

const TicketsSection = styled.div`
  position: absolute;
  width: 100%;
  background-color: #ffffff;
  top: 56px;
  border-radius: 4px;
  @media screen and (min-width: 992px) {
    width: 99%;
  }
`;

const TicketOperatorPlus = styled.button`
  font-size: 14px;
  border: 0;
  background-color: inherit;
  color: #DBDBDB;
  border-right: 1px solid #DBDBDB;
  padding: 4px;
  cursor: pointer;
`;

const TicketOperatorMinus = TicketOperatorPlus.extend`
  border-left: 1px solid #DBDBDB;
  border-right: none;
  cursor: pointer;
`;

const TicketValue = styled.span`
  font-size: 14px;
  margin: 0 7px 0 7px;
  padding: 0 0 0 0;
  border: 0;
  background-color: 0;
`;

const Str = styled.div`
  border-radius: 4px;
  border: 1px solid #DBDBDB;
`;

const Line = styled.div`
  background-color: #DBDBDB;;
  margin: 20px 16px 0 16px;
  height: 2px;
`;

const BusinessClassCheckBox = styled.div`
  display: flex;
  margin: 16px;
`;
const BusinessClass = styled.span`margin-left:6px;`;

const AgeText = styled.span`
  font-size: 14px;
  color: #4A4A4A;
`;

const TicketString = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px;
`;

const Extra = styled.span`
  position: absolute;
  font-size: 12px;
  margin: 18px 0 0 16px;
  left: 0;
  color: #A0B0B9;
`;

class TicketsToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ticketValue: 1
    }
    this.plusClick = this.plusClick.bind(this);
    this.minusClick = this.minusClick.bind(this);
  }
  minusClick = () => {
    if(this.state.ticketValue <= 0) {return 0}
    else {this.setState({ticketValue: this.state.ticketValue - 1})}
  }

  plusClick = () => {
    this.setState({
      ticketValue: this.state.ticketValue + 1
    })
  }

  render() {
    return (
      <TicketString>
        <AgeText>{this.props.text}<Extra>{this.props.extra}</Extra></AgeText>
        <Str>
          <TicketOperatorPlus onClick={this.minusClick}>&minus;</TicketOperatorPlus>
          <TicketValue>{this.state.ticketValue}</TicketValue>
          <TicketOperatorMinus onClick={this.plusClick}>&#43;</TicketOperatorMinus>
        </Str>
      </TicketString>
    )
  }
}

class TicketsComponent extends React.Component {
  render() {
    return (
      <TicketsSection>
        <TicketsToggle text="Взрослые"/>
        <TicketsToggle text="Дети до 12 лет"/>
        <TicketsToggle text="Дети до 2 лет" extra="Без места"/>
        <Line />
        <BusinessClassCheckBox>
          <input className="Input" type="checkbox" />
          <label className="Label" htmlFor="three_transplantation" />
          <BusinessClass>Бизнес-класс</BusinessClass>
        </BusinessClassCheckBox> 
      </TicketsSection>
    )
  }
} 

export default class SearchAddTickets extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      show: true
    }
    this.handleClickShow = this.handleClickShow.bind(this);
  }

  handleClickShow = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }))
  }
  
  render() {
    return (
      <PassengerTicketsLayout>
        <PassengerTickets placeholder={"1 пассажир, эконом"} onClick={this.handleClickShow}/>
        {this.state.show && <TicketsComponent/>}
      </PassengerTicketsLayout>
    )
  }
}