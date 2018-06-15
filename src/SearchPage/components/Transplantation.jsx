import React from 'react';
import styled from 'styled-components';
import arrow from '../Images/ArrowNav.svg';
import {Title} from "../NavBar";
import {TitleArrow} from "../NavBar";
import {TitleBlock} from "../NavBar";
import {TitleText} from "../NavBar";

const TransplantationSection = styled.div`
  font-family: Roboto,sans-serif;
`;

const CheckBoxes = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
`;

const TransplantationAndPrice = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 16px 0 16px;
`;



class TransplantationToggle extends React.Component{
  render(){
    return (
    <div>
      <CheckBoxes>
        <TransplantationAndPrice>
          <div>
            <input type="checkbox"/><span>Все</span>
          </div>
          <div>77770 r</div>
        </TransplantationAndPrice>
        <TransplantationAndPrice>
          <div>
            <input type="checkbox"/><span>Без пересадок</span>
          </div>
          <div>77770 r</div>
        </TransplantationAndPrice>
        <TransplantationAndPrice>
          <div>
            <input type="checkbox"/><span>1 пересадка</span>
          </div>
          <div>77770 r</div>
        </TransplantationAndPrice>
        <TransplantationAndPrice>
          <div>
            <input type="checkbox"/><span>2 пересадки</span>
          </div>
          <div>77770 r</div>
        </TransplantationAndPrice>
        <TransplantationAndPrice>
          <div>
            <input type="checkbox"/><span>3 пересадки</span>
          </div>
          <div>77770 </div>
        </TransplantationAndPrice>
      </CheckBoxes>
    </div>
    )
  }
}


export default class Transplantation extends React.Component {
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
      <TransplantationSection>
        <TitleBlock>
          <Title onClick={this.toggle}>
            <TitleArrow src={arrow}/> <TitleText>ПЕРЕСАДКИ</TitleText>
          </Title>
          {this.state.toggle && <TransplantationToggle/>}
        </TitleBlock>
      </TransplantationSection>
    )
  }
}











