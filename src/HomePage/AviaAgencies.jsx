import React from 'react';
import styled from 'styled-components';

import ArrowImgLeft from '../Images/Arrow-left-agencies.png';
import ArrowImgRight from '../Images/Arrow-right-agencies.png';

import Aeroflot from '../Images/Russian-agency.png';
import Sseven from '../Images/Sseven-agency.png.png';
import OneTwoTrip from '../Images/One-two-trip.png';
import KoreanAir from '../Images/Korean-agency.png';
import ElAl from '../Images/El-al.png';



const AviaAgenciesSection = styled.div`
  font-family: Roboto, sans-serif;
  @media screen and (min-width: 320px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

const Title = styled.h2`
  color: #5C5C5C;
  font-size: 32px;
  text-align: center;
  margin: 0;
`;

const AgenciesSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const ArrowLeft = styled.img`
  
`;
const ArrowRight = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const FirstImg = styled.div`
  margin: 0 0 38px 0;
`;

export default class AviaAgencies extends React.Component{
  render() {
    return (
      <AviaAgenciesSection>
        <Title>Дешевые авиабилеты от крупнейших авиакомпаний и агентств</Title>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12">
              <div className="row">

                <div className="col-md-1">
                  <img src={ArrowImgLeft} alt=""/>
                </div>
                <AgenciesSection className="col-md-8 col-md-offset-1">
                  <FirstImg>
                    <img src={Aeroflot} alt=""/>
                  </FirstImg>
                  <div>
                    <img src={Sseven} alt=""/>
                  </div>
                  <div>
                    <img src={OneTwoTrip} alt=""/>
                  </div>
                  <div>
                    <img src={KoreanAir} alt=""/>
                  </div>
                  <div>
                    <img src={ElAl} alt=""/>
                  </div>

                </AgenciesSection>
                <div className="col-md-offset-1 col-md-1">
                  <ArrowRight>
                    <img src={ArrowImgRight} alt=""/>
                  </ArrowRight>
                </div>

              </div>
            </div>
          </div>
        </div>

      </AviaAgenciesSection>
    )
  }
}