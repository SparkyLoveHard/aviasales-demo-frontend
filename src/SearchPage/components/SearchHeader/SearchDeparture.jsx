import React from 'react';
import styled from 'styled-components';
import {DepartureLayout, LayoutArrow, CityOfDeparture, Mow, ImgSearchLayout, ArrowImg} from '../../../HomePage/components/Departure';
import BlueArrowRight from '../../../HomePage/Images/Arrow-right-icon.png.png';
import BlueArrowLeft from  '../../../HomePage/Images/Arrow-left-icon.png';
const SearchDepartureLayout = styled(DepartureLayout)`

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

const SearchLayoutArrow = styled(LayoutArrow)`
  display: flex;
  flex-direction: column;
  margin: 0 16px 0 0;
  align-items: center;
`;

const SearchCityOfDeparture = styled(CityOfDeparture)`
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
const SearchMow = styled(Mow)`
  margin: 0 12px 0 0;
  font-family: Roboto, sans-serif;
  font-size: 16px;
  color: #a0b0b9;
`;

const SearchImgSearchLayout = styled(ImgSearchLayout)`
  display: flex;
  position: absolute;
  right: 0;
  bottom: 0;
  top: 0;
  margin: 20px 0;
`;
const SearchArrowImg = styled(ArrowImg)`
	display: flex;
`;

export default class SearchDeparture extends React.Component {
  render() {
    return (
        <SearchDepartureLayout>
					<SearchCityOfDeparture placeholder="Москва" />
					<SearchImgSearchLayout>
          <SearchMow>MOW</SearchMow>
          <SearchLayoutArrow>
            <SearchArrowImg src={BlueArrowLeft} alt="" />
            <SearchArrowImg src={BlueArrowRight} alt="" />
          </SearchLayoutArrow>
        </SearchImgSearchLayout>
      </SearchDepartureLayout>
    )
  }
}


