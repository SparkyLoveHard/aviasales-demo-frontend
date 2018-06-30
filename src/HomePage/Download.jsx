import React from 'react';
import styled from 'styled-components';

import Android from './Images/android.png';
import Apple from './Images/apple.png';
import Windows from './Images/windows.png';
import Phone from './Images/iphone-big.png';
import Star from './Images/star.png';
import HalfStar from './Images/half-star.png';

const Section = styled.div`
  background: linear-gradient(137.4deg, #00b0de 4.18%, #196ebd 104.18%);
  font-family: Roboto, sans-serif;
  position: relative;
  overflow: hidden;
  @media screen and (min-width: 768px) {
    overflow: visible;
    height: 282px;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin: 24px 0 0 0;
  text-align: center;
  color: #ffffff;
  @media screen and (min-width: 768px) {
    text-align: left;
    font-size: 32px;
    margin: 46px 0 0 0;
  }
  @media screen and (min-width: 992px) {
    margin: 66px 0 0 0;
  }
`;

const PhoneImg = styled.img`
  width: 162px;
  height: 213px;
  @media screen and (min-width: 768px) {
    height: 312px;
    width: 236px;
  }
`;

const PhoneText = styled.div`
  color: #fff;
  font-size: 14px;
  margin: 0 0 0 8px;
  cursor: pointer;
`;

const PhoneLayout = styled.div`
  position: absolute;
  padding: 136px 0 0 0;
  @media screen and (min-width: 768px) {
    position: relative;
    bottom: 30px;
    padding: 0;
  }
`;

const DownloadLinks = styled.div`
  display: flex;
  flex-direction: column;
  padding: 56px 0 56px 16px;
  justify-content: left;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    padding: 56px 0 56px 0;
  }
  @media screen and (min-width: 992px) {
    padding: 48px 0 68px 0;
  }
`;

const DownloadLink = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 0 20px 0;
  cursor: pointer;
  &:nth-last-child(1) {
    margin: 0;
  }
  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;

const DownloadPhone = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: left;
    flex-direction: column;
  }
`;

const Line = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: flex;
    height: 28px;
    border: 0.5px #ffffff solid;
    margin: 0 20px 0 20px;
  }
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  padding: 18px 0 0 0;
  justify-content: center;
  color: #ffffff;
  @media screen and (min-width: 768px) {
    padding: 20px 0 0 0;
    justify-content: left;
  }
`;

const Stars = styled.div`
  margin: 0 6px 0 0;
`;

const Download = () => {
  return (
    <Section>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-lg-3 col-lg-offset-1">
            <PhoneLayout className="">
              <PhoneImg src={Phone} />
            </PhoneLayout>
          </div>
          <DownloadPhone className="col-md-8">
            <Title>
              Скачай мобильное приложение Aviasales.ru
            </Title>
            <Rating className="">
              <Stars>
                <img src={Star} alt="" />
              </Stars>
              <Stars>
                <img src={Star} alt="" />
              </Stars>
              <Stars>
                <img src={Star} alt="" />
              </Stars>
              <Stars>
                <img src={Star} alt="" />
              </Stars>
              <Stars>
                <img src={HalfStar} alt="" />
              </Stars>
              <span>
                Более 103 000 оценок
              </span>
            </Rating>
            <div className="row">
              <div className="col-xs-offset-6 col-xs-6 col-md-offset-0 col-md-12">
                <DownloadLinks>
                  <DownloadLink>
                    <div>
                      <img src={Apple} alt="Apple" />
                    </div>
                    <PhoneText>
                      iPhone или iPad
                    </PhoneText>
                  </DownloadLink>
                  <Line />
                  <DownloadLink>
                    <img src={Android} alt="Android" />
                    <PhoneText>
                      Android
                    </PhoneText>
                  </DownloadLink>
                  <Line />
                  <DownloadLink>
                    <img src={Windows} alt="Windows Phone" />
                    <PhoneText>
                      Windows Phone
                    </PhoneText>
                  </DownloadLink>
                </DownloadLinks>
              </div>
            </div>
          </DownloadPhone>
        </div>
      </div>
    </Section>
  );
};

export default Download;
