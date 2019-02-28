import React from 'react';
import styled from 'styled-components';
import BlueArrowLeft from '../Images/Arrow-left-icon.png';
import BlueArrowRight from '../Images/Arrow-right-icon.png.png';

export const DepartureLayout = styled.div`
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

export const LayoutArrow = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 16px 0 0;
  align-items: center;
`;

export const CityOfDeparture = styled.input`
  width: 100%;
  padding: 18px 0 18px 16px;
  border: none;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  @media screen and (min-width: 568px) {
    margin: 0 2px 0 0;
    border-top-right-radius: unset;
  }
  @media screen and (min-width: 992px) {
    border-bottom-left-radius: 4px;
  }
`;

export const Mow = styled.span`
  margin: 0 12px 0 0;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  color: #a0b0b9;
`;

export const ImgSearchLayout = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  bottom: 0;
  top: 0;
  margin: 20px 0;
`;

export const ArrowImg = styled.img`
  display: flex;
`;

const Departure = () => {
  return (
    <DepartureLayout>
      <CityOfDeparture placeholder="Москва" />
      <ImgSearchLayout>
        <Mow>MOW</Mow>
        <LayoutArrow>
          <ArrowImg src={BlueArrowLeft} alt="" />
          <ArrowImg src={BlueArrowRight} alt="" />
        </LayoutArrow>
      </ImgSearchLayout>
    </DepartureLayout>
  )
}

export default Departure;