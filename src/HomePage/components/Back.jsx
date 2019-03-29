import React from 'react';
import styled from 'styled-components';
import CalendarIcon from '../Images/minicalendar.png';

export const BackInput = styled.input`
  width: 100%;
  border: none;
  padding: 18px 0 18px 16px;
@media screen and (min-width: 568px) {
  margin: 0 2px 0 0;
}
`;

export const BackLayout = styled.div`
  display: flex;
  width: 50%;
  margin: 0 0 2px 0;
  position: relative;
  @media screen and (min-width: 568px) {
    width: 25%;
  }
  @media screen and (min-width: 992px) {
    width: 17%;
  }
`;

export const CalendarImgLayout = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  bottom: 0;
  top: 0;
  margin: 17px 0 0 0;
`;
export const Calendar = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 16px 0 0;
  align-items: center;
`;

export const CalendarImg = styled.img``;

const Back = () => {
    return (
        <BackLayout>
        <BackInput placeholder="Обратно" />
        <CalendarImgLayout>
          <Calendar>
            <CalendarImg src={CalendarIcon} alt="" />
          </Calendar>
        </CalendarImgLayout>
      </BackLayout>
    )
}

export default Back;