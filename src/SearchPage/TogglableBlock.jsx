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
  transform: rotate(-90deg);
`;

export default class ToggleClickBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ToggleOnTransplantation: true,
      ToggleDepartureArrival: true,
      ToggleBaggage: false,
      ToggleDuration: false,
      ToggleTravelTime: true,
      ToggleAirlines: true,
      ToggleAirports: false,
      ToggleTransplantationT: false,
      ToggleAgencies: false,
      RotateTransplantation: -90,
      RotateDepartureArrival: -90,
      RotateBaggage: -90,
      RotateDuration: -90,
      RotateTravelTime: -90,
      RotateAirlines: -90,
      RotateAirports: -90,
      RotateTransplantationT: -90,
      RotateAgencies: -90,
    };
    this.handleToggleTransplantation = this.handleToggleTransplantation.bind(this);
    this.handleToggleDepartureArrival = this.handleToggleDepartureArrival.bind(this);
    this.handleToggleBaggage = this.handleToggleBaggage.bind(this);
    this.handleToggleTravelTime = this.handleToggleTravelTime.bind(this);
    this.handleToggleDuration = this.handleToggleDuration.bind(this);
    this.handleToggleAirlines = this.handleToggleAirlines.bind(this);
    this.handleToggleAirports = this.handleToggleAirports.bind(this);
    this.handleToggleTransplantationT = this.handleToggleTransplantationT.bind(this);
    this.handleToggleAgencies = this.handleToggleAgencies.bind(this);
  }

  handleToggleTransplantation() {
    this.setState(prevState => ({ ToggleOnTransplantation: !prevState.ToggleOnTransplantation }));
    let RotateOpen = this.state.RotateTransplantation + 90;
    const RotateClose = this.state.RotateTransplantation - 90;
    if (RotateOpen >= 90) { RotateOpen = +90; }
    this.setState({ RotateTransplantation: RotateOpen ? RotateClose : RotateOpen });
  }

  handleToggleDepartureArrival() {
    this.setState(prevState => ({ ToggleDepartureArrival: !prevState.ToggleDepartureArrival }));
    let RotateOpen = this.state.RotateDepartureArrival + 90;
    const RotateClose = this.state.RotateDepartureArrival - 90;
    if (RotateOpen >= 90) { RotateOpen = +90; }
    this.setState({ RotateDepartureArrival: RotateOpen ? RotateClose : RotateOpen });
  }

  handleToggleBaggage() {
    this.setState(prevState => ({ ToggleBaggage: !prevState.ToggleBaggage }));
    let RotateOpen = this.state.RotateBaggage + 90;
    const RotateClose = this.state.RotateBaggage - 90;
    if (RotateOpen >= 90) { RotateOpen = +90; }
    this.setState({ RotateBaggage: RotateOpen ? RotateClose : RotateOpen });
  }

  handleToggleDuration() {
    this.setState(prevState => ({ ToggleDuration: !prevState.ToggleDuration }));
    let RotateOpen = this.state.RotateDuration + 90;
    const RotateClose = this.state.RotateDuration - 90;
    if (RotateOpen >= 90) { RotateOpen = +90; }
    this.setState({ RotateDuration: RotateOpen ? RotateClose : RotateOpen });
  }

  handleToggleTravelTime() {
    this.setState(prevState => ({ ToggleTravelTime: !prevState.ToggleTravelTime }));
    let RotateOpen = this.state.RotateTravelTime + 90;
    const RotateClose = this.state.RotateTravelTime - 90;
    if (RotateOpen >= 90) { RotateOpen = +90; }
    this.setState({ RotateTravelTime: RotateOpen ? RotateClose : RotateOpen });
  }

  handleToggleAirlines() {
    this.setState(prevState => ({ ToggleAirlines: !prevState.ToggleAirlines }));
    let RotateOpen = this.state.RotateAirlines + 90;
    const RotateClose = this.state.RotateAirlines - 90;
    if (RotateOpen >= 90) { RotateOpen = +90; }
    this.setState({ RotateAirlines: RotateOpen ? RotateClose : RotateOpen });
  }

  handleToggleAirports() {
    this.setState(prevState => ({ ToggleAirports: !prevState.ToggleAirports }));
    let RotateOpen = this.state.RotateAirports + 90;
    const RotateClose = this.state.RotateAirports - 90;
    if (RotateOpen >= 90) { RotateOpen = +90; }
    this.setState({ RotateAirports: RotateOpen ? RotateClose : RotateOpen });
  }

  handleToggleTransplantationT() {
    this.setState(prevState => ({ ToggleTransplantationT: !prevState.ToggleTransplantationT }));
    let RotateOpen = this.state.RotateTransplantationT + 90;
    const RotateClose = this.state.RotateTransplantationT - 90;
    if (RotateOpen >= 90) { RotateOpen = +90; }
    this.setState({ RotateTransplantationT: RotateOpen ? RotateClose : RotateOpen });
  }

  handleToggleAgencies() {
    this.setState(prevState => ({ ToggleAgencies: !prevState.ToggleAgencies }));
    let RotateOpen = this.state.RotateAgencies + 90;
    const RotateClose = this.state.RotateAgencies - 90;
    if (RotateOpen >= 90) { RotateOpen = +90; }
    this.setState({ RotateAgencies: RotateOpen ? RotateClose : RotateOpen });
  }

  render() {
    function Title(props) {
      return (
        <TitleText>
          {props.title}
        </TitleText>
      );
    }
    return (
      <div>
        <ToggleBlock>
          <TitleBlock onClick={this.handleToggleTransplantation}>
            <ArrowImg style={{ transform: `rotate(${this.state.RotateTransplantation}deg)` }} src={Arrow} />
            <TitleText>
              <Title title="ПЕРЕСАДКИ" />
            </TitleText>
          </TitleBlock>
          {this.state.ToggleOnTransplantation && <Transplantation />}
        </ToggleBlock>
        <ToggleBlock>
          <TitleBlock onClick={this.handleToggleDepartureArrival}>
            <ArrowImg style={{ transform: `rotate(${this.state.RotateDepartureArrival}deg)` }} src={Arrow} />
            <Title title="ВРЕМЯ ВЫЛЕТА И ПРИБЫТИЯ" />
          </TitleBlock>
          {this.state.ToggleDepartureArrival && <DepartureAndArrival />}
        </ToggleBlock>
        <ToggleBlock>
          <TitleBlock onClick={this.handleToggleBaggage}>
            <ArrowImg style={{ transform: `rotate(${this.state.RotateBaggage}deg)` }} src={Arrow} />
            <TitleText>
              <Title title="БАГАЖ" />
            </TitleText>
          </TitleBlock>
          {this.state.ToggleBaggage && <Baggage />}
        </ToggleBlock>
        <ToggleBlock>
          <TitleBlock onClick={this.handleToggleDuration}>
            <ArrowImg style={{ transform: `rotate(${this.state.RotateDuration}deg)` }} src={Arrow} />
            <TitleText>
              <Title title="ДЛИТЕЛЬНОСТЬ ПЕРЕСАДКИ" />
            </TitleText>
          </TitleBlock>
          {this.state.ToggleDuration && <DurationOfTransplantation />}
        </ToggleBlock>
        <ToggleBlock>
          <TitleBlock onClick={this.handleToggleTravelTime}>
            <ArrowImg style={{ transform: `rotate(${this.state.RotateTravelTime}deg)` }} src={Arrow} />
            <TitleText>
              <Title title="ВРЕМЯ В ПУТИ" />
            </TitleText>
          </TitleBlock>
          {this.state.ToggleTravelTime && <TravelTime />}
        </ToggleBlock>
        <ToggleBlock>
          <TitleBlock onClick={this.handleToggleAirlines}>
            <ArrowImg style={{ transform: `rotate(${this.state.RotateAirlines}deg)` }} src={Arrow} />
            <TitleText>
              <Title title="АВИАКОМПАНИИ" />
            </TitleText>
          </TitleBlock>
          {this.state.ToggleAirlines && <Airlines />}
        </ToggleBlock>
        <ToggleBlock>
          <TitleBlock onClick={this.handleToggleAirports}>
            <ArrowImg style={{ transform: `rotate(${this.state.RotateAirports}deg)` }} src={Arrow} />
            <TitleText>
              <Title title="АЭРОПОРТЫ" />
            </TitleText>
          </TitleBlock>
          {this.state.ToggleAirports && <Airports />}
        </ToggleBlock>
        <ToggleBlock>
          <TitleBlock onClick={this.handleToggleTransplantationT}>
            <ArrowImg style={{ transform: `rotate(${this.state.RotateTransplantationT}deg)` }} src={Arrow} />
            <TitleText>
              <Title title="АЭРОПОРТ ПЕРЕСАДКИ" />
            </TitleText>
          </TitleBlock>
          {this.state.ToggleTransplantationT && <AirportTransplantation />}
        </ToggleBlock>
        <ToggleBlock>
          <TitleBlock onClick={this.handleToggleAgencies}>
            <ArrowImg style={{ transform: `rotate(${this.state.RotateAgencies}deg)` }} src={Arrow} />
            <TitleText>
              <Title title="АГЕНСТВА" />
            </TitleText>
          </TitleBlock>
          {this.state.ToggleAgencies && <Agencies />}
        </ToggleBlock>
      </div>
    );
  }
}
