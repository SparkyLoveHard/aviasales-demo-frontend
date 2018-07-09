import React from 'react';
import styled from 'styled-components';

const TransplantationBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px 0 16px;
`;

const Text = styled.p`
  margin: 0 0 0 6px;
  font-size: 10px;
`;

const AllCheckBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0 18px 0;
`;

export default class Transplantation extends React.Component {
  render() {
    function HowManyTransplants(props) {
      return (
        <Text>
          {props.text}
        </Text>
      );
    }
    return (
      <TransplantationBlock>
        <AllCheckBox>
          <CheckBoxContainer>
            <input className="Input" id="all" type="checkbox" />
            <label className="Label" htmlFor="all" />
            <HowManyTransplants text="Все" />
          </CheckBoxContainer>
          <CheckBoxContainer>
            <input className="Input" id="no_transplantation" type="checkbox" />
            <label className="Label" htmlFor="no_transplantation" />
            <HowManyTransplants text="Без Пересадок" />
          </CheckBoxContainer>
          <CheckBoxContainer>
            <input className="Input" id="one_transplantation" type="checkbox" />
            <label className="Label" htmlFor="one_transplantation" />
            <HowManyTransplants text="1 Пересадка" />
          </CheckBoxContainer>
          <CheckBoxContainer>
            <input className="Input" id="two_transplantation" type="checkbox" />
            <label className="Label" htmlFor="two_transplantation" />
            <HowManyTransplants text="2 Пересадки" />
          </CheckBoxContainer>
          <CheckBoxContainer>
            <input className="Input" id="three_transplantation" type="checkbox" />
            <label className="Label" htmlFor="three_transplantation" />
            <HowManyTransplants text="3 Пересадки" />
          </CheckBoxContainer>
        </AllCheckBox>
      </TransplantationBlock>
    );
  }
}