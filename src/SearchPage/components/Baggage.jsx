import React from 'react';

import {Title} from "../NavBar";
import {TitleArrow} from "../NavBar";
import {TitleBlock} from "../NavBar";
import {TitleText} from "../NavBar";
import arrow from '../Images/ArrowNav.svg';


const BaggageToggle = () => {
  return (
    <div>
      BAGAGE
    </div>
  )
};

export default class Baggage extends React.Component {
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
            <TitleArrow src={arrow}/> <TitleText>ПЕРЕСАДКИ</TitleText>
          </Title>
          {this.state.toggle && <BaggageToggle/>}
        </TitleBlock>
      </div>
    )
  }
}