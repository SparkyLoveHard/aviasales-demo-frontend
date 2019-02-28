import React from 'react';
import styled from 'styled-components';
import Arrow from './Images/ArrowButton.svg';
import Transplantation from './components/Transplantation';
import DepartureAndArrival from './components/DepartureAndArrival';
import Baggage from './components/Baggage';
import TravelTime from './components/TravelTime';
import DurationOfTransplantation from './components/DurationOfTransplantation';
import Airlines from './components/Airlines';
import Airports from './components/Airports';
import AirportTransplantation from './components/AirportTransplantation';
import Agencies from './components/Agencies';

const ToggleBlock = styled.div`
  border-bottom: 1px solid #dddddd;
`;

const TitleText = styled.div`
  margin: 0;
  font-size: 12px;
`;

const TitleBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 0 16px 16px;
  cursor: pointer;
`;

const ArrowImg = styled.img`
  margin-right: 6px;
`;

class ToggleBlockShape extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      ToggleAndRotate: [
        {Toggle: true},
        {Rotate: 0}
      ]
    }  
    this.handleCLick = this.handleCLick.bind(this);
  }

  handleCLick = () => {
    this.setState(prevState => ({
      Toggle: !prevState.Toggle
    }))
    let RotateOpen = this.state.Rotate + 90;
    const RotateClose = this.state.Rotate - 90;
    if (RotateOpen >= 90) { RotateOpen = +90; }
    this.setState({
      Rotate: RotateOpen ? RotateClose : RotateOpen
    })
  }
  render() {
    let text = this.props.text;
    let ToggleComponent = this.props.component;
    return (
      <ToggleBlock>
        <TitleBlock onClick={this.handleCLick}>
          <ArrowImg src={Arrow} /><TitleText>{text}</TitleText>
        </TitleBlock>
        <div>
          {this.state.Toggle && ToggleComponent}
        </div>
      </ToggleBlock>
    )
  }
}

export default class ToggleClickBlock extends React.Component {
  render() {
    let _Transplantation = <Transplantation />,
    _DepartureAndArrival = <DepartureAndArrival/>, 
    _Baggage = <Baggage/>,
    _TravelTime  = <TravelTime/>,
    _DurationOfTransplantation = <DurationOfTransplantation/>,
    _Airlines = <Airlines/>,
    _Airports = <Airports/>,
    _AirportTransplantation = <AirportTransplantation/>,
    _Agencies = <Agencies/>;
    return (
      <div>
        <ToggleBlockShape src={Arrow} onClick={this.handleCLick} text="ПЕРЕСАДКИ"  component={_Transplantation}/>
        <ToggleBlockShape src={Arrow} onClick={this.handleCLick} text="ВРЕМЯ ВЫЛЕТА И ПРИБЫТИЯ"  component={_DepartureAndArrival}/>
        <ToggleBlockShape src={Arrow} onClick={this.handleCLick} text="БАГАЖ"  component={_Baggage}/>
        <ToggleBlockShape src={Arrow} onClick={this.handleCLick} text="ДЛИТЕЛЬНОСТЬ ПЕРЕСАДКИ" component={_DurationOfTransplantation}/>
        <ToggleBlockShape src={Arrow} onClick={this.handleCLick} text="ВРЕМЯ В ПУТИ"  component={_TravelTime}/>
        <ToggleBlockShape src={Arrow} onClick={this.handleCLick} text="АВИАКОМПАНИИ"  component={_Airlines}/>
        <ToggleBlockShape src={Arrow} onClick={this.handleCLick} text="АЭРОПОРТЫ"  component={_Airports}/>
        <ToggleBlockShape src={Arrow} onClick={this.handleCLick} text="АЭРОПОР ПЕРЕСАДКИ" component={_AirportTransplantation}/>
        <ToggleBlockShape src={Arrow} onClick={this.handleCLick} text="АГЕНСТВА"  component={_Agencies}/>
      </div>
    )
  }
}