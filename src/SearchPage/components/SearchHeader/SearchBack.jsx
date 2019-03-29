import React from 'react';
import styled from 'styled-components';
import { BackInput,BackLayout,CalendarImgLayout, Calendar, CalendarImg } from '../../../HomePage/components/Back';
import CalendarIcon from '../../../HomePage/Images/minicalendar.png';
const SearchBackInput = styled(BackInput)`
  width: 100%;
  border: none;
  padding: 18px 0 18px 16px;
		@media screen and (min-width: 568px) {
		margin: 0 2px 0 0;
		}
`;

const SearchBackLayout = styled(BackLayout)`
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

const SearchCalendarImg = styled(CalendarImg)``;

const SearchBack = () => {
    return (
        <SearchBackLayout>
        <SearchBackInput placeholder="Обратно" />
        <SearchCalendarImgLayout>
          <SearchCalendar>
            <SearchCalendarImg src={CalendarIcon} alt="" />
          </SearchCalendar>
        </SearchCalendarImgLayout>
      </SearchBackLayout>
    )
}

export default SearchBack;