import React from 'react';
import styled from 'styled-components';

import Krasnodar from '../Images/krasnodar.png';
import Sochi from '../Images/sochi.jpg';
import SaintPetersburg from '../Images/saintpetersburg.jpg';
import MineralnieVodi from '../Images/mineralnievodi.jpg';
import Simferopol from '../Images/simferopol.jpg';
import Barcelona from '../Images/barcelona.jpg';

import RussianFlag from '../Images/russiaflag.png';
import SpainFlag from '../Images/spainflag.png';
import Footer from "./Footer";


const Img = styled.img`
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  width: 100%;
  height: 176px;
`;

const Card = styled.div`
  background-color: red;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 75, 93, 0.12);
`;

const FlagImg = styled.img`
  display: none;
    @media screen and (min-width: 768px) {
      display:block;
      margin: 20px 18px 0 24px; 
      border-radius: 50%;
      height: 30px;
      width: 30px;
    }
`;

const CardDescription = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LeftDescription = styled.div`
  display: flex;
  flex-direction: column;
`;

const RightDescription = styled.div`
  display: flex;
  flex-direction: column;
`;
const LeftColumn = styled.div`
  display: flex;
`;

const City = styled.div`
  font-family: Roboto,sans-serif;
  font-size: 16px;
  margin: 16px 0 4px 0;
`;
const Country = styled.div`
  font-family: Roboto, sans-serif;
  font-size: 12px;
  margin: 0 0 12px 0;
`;
const Price = styled.div`
  margin: 18px 0 4px 0;
  font-family: Roboto,sans-serif;
  font-size: 14px;
`;
const Date = styled.div`
  font-size: 12px;
  font-family: Roboto,sans-serif;
`;

const CityAndCountry = styled.div``;

const CityCards = () => (
    <div>
      <Card className="col-xs-12 col-md-10 col-md-offset-1 col-lg-6 ">
        <Img src={Krasnodar}/>
        <CardDescription>
          <LeftDescription>
            <LeftColumn>
              <FlagImg src={RussianFlag}/>
              <CityAndCountry>
                <City>Kras</City>
                <Country>RUS</Country>
              </CityAndCountry>
            </LeftColumn>
          </LeftDescription>
          <RightDescription>
            <Price>1337</Price>
            <Date>27 marta</Date>
          </RightDescription>
        </CardDescription>
      </Card>
    </div>
);

export default CityCards