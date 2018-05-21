import React from 'react';
import styled from 'styled-components';
import arrow from './ArrowNav.svg';

const TransplantationSection = styled.div`
  font-family: Roboto,sans-serif;
`;

export const Title = styled.div`
  display: flex;
  margin: 0 0 0 0;
  padding: 16px 0 16px 0;
  cursor: pointer;
  border-bottom: 1px solid #DDDDDD;
`;

export const TitleArrow = styled.img`
  margin: 0 0 0 16px;
`;


export const TitleText = styled.h3`
  margin: 0;
  font-size: 12px;
  color: #5B5B5C;
  padding: 0 0 0 6px;
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

class TransplantationToggle extends React.Component {
  render() {
    return (
      <div>
        <CheckBoxes>
          <TransplantationAndPrice>
            <div>
              <input type="checkbox"/><span>Все</span>
            </div>
            <div>
              77770 r
            </div>
          </TransplantationAndPrice>
          <TransplantationAndPrice>
            <div>
              <input type="checkbox"/><span>Без пересадок</span>
            </div>
            <div>
              77770 r
            </div>
          </TransplantationAndPrice>
          <TransplantationAndPrice>
            <div>
              <input type="checkbox"/><span>1 пересадка</span>
            </div>
            <div>
              77770 r
            </div>
          </TransplantationAndPrice>
          <TransplantationAndPrice>
            <div>
              <input type="checkbox"/><span>2 пересадки</span>
            </div>
            <div>
              77770 r
            </div>
          </TransplantationAndPrice>
          <TransplantationAndPrice>
            <div>
              <input type="checkbox"/><span>3 пересадки</span>
            </div>
            <div>
              77770 r
            </div>
          </TransplantationAndPrice>
        </CheckBoxes>
      </div>
    )
  }
}

export default class Transplantation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show: true};
    this.toggleDiv = this.toggleDiv.bind(this);
  }

  toggleDiv = () => {
    const {show} = this.state;
    this.setState({show: !show})
  };

  render() {
    return (
      <TransplantationSection>
        <Title onClick={this.toggleDiv}>
         <TitleArrow src={arrow}/><TitleText>ПЕРЕСАДКИ</TitleText>
        </Title>
        {this.state.show && <TransplantationToggle/>}
      </TransplantationSection>
    )
  }
}










