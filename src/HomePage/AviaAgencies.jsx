import React from 'react';
import styled from 'styled-components';

import ArrowImgLeft from './Images/Arrow-left-agencies.png';
import ArrowImgRight from './Images/Arrow-right-agencies.png';
import Aeroflot from './Images/Russian-agency.png';
import Sseven from './Images/Sseven-agency.png.png';
import OneTwoTrip from './Images/One-two-trip.png';
import KoreanAir from './Images/Korean-agency.png';
import ElAl from './Images/El-al.png';

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
  color: #5c5c5c;
  font-size: 32px;
  text-align: center;
  margin: 0;
`;

const AgenciesSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 24px 0 24px 0;
    
`;

const ImgLayout = styled.div`
  margin: 0 32px 24px 0;
  &:nth-last-child(1) {
    margin: 0 0 24px 0;
  }
`;

const ArrowRight = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Layout = styled.div`
  align-items: center;
`;

const CarouselButtons = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonNext = styled.div`
  border-radius: 50%;
  width: 10px;
  height: 10px;
  border: 1px solid #818181;
  margin-right: 8px;
  cursor: pointer;
  &:nth-last-child(1) {
    margin-right: 0;
  }
`;

const AviaAgencies = () => {
  return (
    <AviaAgenciesSection>
      <Title>
        Дешевые авиабилеты от крупнейших авиакомпаний и агентств
      </Title>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Layout className="row">
              <div className="col-md-1">
                <div>
                  <img src={ArrowImgLeft} alt="" />
                </div>
              </div>
              <div className="col-md-10">
                <AgenciesSection>
                  <ImgLayout>
                    <img src={Aeroflot} alt="" />
                  </ImgLayout>
                  <ImgLayout>
                    <img src={Sseven} alt="" />
                  </ImgLayout>
                  <ImgLayout>
                    <img src={OneTwoTrip} alt="" />
                  </ImgLayout>
                  <ImgLayout>
                    <img src={KoreanAir} alt="" />
                  </ImgLayout>
                  <ImgLayout>
                    <img src={ElAl} alt="" />
                  </ImgLayout>
                </AgenciesSection>
              </div>
              <div className="col-md-1">
                <ArrowRight>
                  <img src={ArrowImgRight} alt="" />
                </ArrowRight>
              </div>
            </Layout>
          </div>
        </div>
        <CarouselButtons>
          <ButtonNext />
          <ButtonNext />
          <ButtonNext />
        </CarouselButtons>
      </div>
    </AviaAgenciesSection>
  );
};

export default AviaAgencies;
