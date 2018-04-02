import React from 'react';
import styled from 'styled-components';

import SubscribeLine from '../Images/Rectangle 3.png'
import Twitter from '../Images/sub-twitter.svg'
import Facebook from '../Images/sub-facebook.svg';
import Vk from '../Images/sub-vk.svg';
import Rss from '../Images/sub-rss.svg';

const Line = styled.img`
  height: 7px;
  width: 100%;
`;

const SubscribeSection = styled.div`
  display: none;
  font-family: Roboto,sans-serif;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

const SocialMediaSubscribe = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row;

  }
`;

const Title = styled.h3`
  text-align: center;
  font-size: 16px;
  @media screen and (min-width: 992px) {
    text-align: left;
  }
`;

const Text = styled.p`
  text-align: center;
  margin: 0;
  font-size: 16px;
  @media screen and (min-width: 992px) {
    text-align: left;
  }
`;

const Img = styled.img`
  height: 36px;
  width: 36px;
  margin: 0 0 0 0;
`;

const Input = styled.input`
  padding: 0;
  margin: 0;
`;

const Button = styled.button`
  background-color: #FF8E41;
  color: #ffffff;
`;


export default class Subscribe extends React.Component {
  render() {
    return (
      <SubscribeSection>
        <div>
          <Line src={SubscribeLine}/>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-lg-offset-1">
              <Title>Хотите знать всё о скидках на авиабилеты?</Title>
              <Text>Вы можете подписаться на нашу рассылку через соцсети или электронной почте.</Text>
            </div>
            <SocialMediaSubscribe className="col-lg-5">
              <div>
                <Img src={Twitter}/>
                <Img src={Facebook}/>
                <Img src={Vk}/>
                <Img src={Rss}/>
              </div>
              <div>
                <input type="text" placeholder="Ваш email"/><Button>Подписаться</Button>
              </div>
            </SocialMediaSubscribe>
          </div>
        </div>




      </SubscribeSection>
    )
  }
}