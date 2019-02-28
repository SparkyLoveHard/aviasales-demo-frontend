import React from 'react';
import styled from 'styled-components';

export const ArrivalLayout = styled.div`
  display: flex;
  width: 100%;
  margin: 0 0 2px 0;
  @media screen and (min-width: 568px) {
    width: 50%;
  }
  @media screen and (min-width: 992px) {
    width: 22%;
  }
`;

export const CityOfArrival = styled.input`
  width: 100%;
  border: none;
  padding: 18px 0 18px 16px;
  @media screen and (min-width: 568px) {
    border-top-right-radius: 4px;
  }
  @media screen and (min-width: 992px) {
    margin: 0 2px 0 0;
    border-top-right-radius: unset;
  }
`;

function Arrival() {
  return (
    <ArrivalLayout>
      <CityOfArrival placeholder="Город прибытия" />
    </ArrivalLayout>
  )
}

export default Arrival;