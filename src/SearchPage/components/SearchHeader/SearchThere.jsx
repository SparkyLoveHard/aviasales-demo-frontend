import React from 'react';
import styled from 'styled-components';
import {ThereLayout, ThereInput, CalendarImgLayout, Calendar, CalendarImg} from '../../../HomePage/components/There';
import CalendarIcon from '../../../HomePage/Images/minicalendar.png';
export const SearchThereLayout = styled(ThereLayout)`
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

export const SearchThereInput = styled(ThereInput)`
  width: 100%;
  margin: 0 2px 0 0;
  border: none;
  padding: 18px 0 18px 16px;
  @media screen and (min-width: 568px) {
    border-bottom-left-radius: 4px;
  }
  @media screen and (min-width: 992px) {
    border-bottom-left-radius: unset;
  }
`;

const SearchCalendarImgLayout = styled(CalendarImgLayout)`
  display: flex;
  position: absolute;
  right: 0;
  bottom: 0;
  top: 0;
  margin: 17px 0 0 0;
`;
const SearchCalendar = styled(Calendar)`
  display: flex;
  flex-direction: column;
  margin: 0 16px 0 0;
  align-items: center;
`;

const SearchCalendarImg = styled(CalendarImg);

const There = () => {
  return (
    <SearchThereLayout>
      <SearchThereInput placeholder="Туда" />
      <SearchCalendarImgLayout>
        <SearchCalendar>
          <SearchCalendarImg src={CalendarIcon} alt="Calendar" />
        </SearchCalendar>
      </SearchCalendarImgLayout>
    </SearchThereLayout>
  )
}

export default There;