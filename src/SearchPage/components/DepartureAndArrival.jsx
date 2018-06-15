import React from 'react';
import styled from 'styled-components';
import {TitleBlock} from '../NavBar'
import {Title} from '../NavBar'
import {TitleText} from '../NavBar'
import {TitleArrow} from '../NavBar'
import arrow from '../Images/ArrowNav.svg';

const TEST = styled.div``;

class DepartureAndArrivalToggle extends React.Component {
  render(){
    return(
      <div>
        TEST OPEN
      </div>
    )
  }
}

export default class DepartureAndArrival extends React.Component {
  state = {
    toggle: false
  };

  toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    })
  };

  render() {
    return (
      <div>
        <TitleBlock>
          <Title onClick={this.toggle}>
            <TitleArrow src={arrow}/> <TitleText>ВРЕМЯ ВЫЛЕТА И ПРИБЫТИЯ</TitleText>
          </Title>
          {this.state.toggle && <DepartureAndArrivalToggle/>}
        </TitleBlock>
      </div>
    )
  }
}
