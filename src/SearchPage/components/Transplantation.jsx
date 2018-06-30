import React from 'react';
import styled from 'styled-components'

const TransplantationBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px 0 16px;
`;
const TransplantationText = styled.p`
  margin: 0;
  font-family: Roboto,sans-serif;
  font-size: 12px;
`;
const CheckBox = styled.input`
 
`;
const Label = styled.label`
  display: flex;
`;

const CheckMark = styled.span`
  
`;

export default class Transplantation extends React.Component {
  render() {
    const TransplantationName = (props) => {
      return (
        <TransplantationBlock>
          <Label className='container-s'>
            <CheckBox type="checkbox"/><TransplantationText>{props.name}</TransplantationText>
            <CheckMark className='checkmark' for='input'/>
          </Label>
        </TransplantationBlock>
      )
    };


    return (
      <div>
        <TransplantationName name="Все"/>
        <TransplantationName name="Без пересадок"/>
        <TransplantationName name="1 пересадка"/>
        <TransplantationName name="2 пересадки"/>
        <TransplantationName name="3 пересадки"/>
      </div >
    )
  }
}











