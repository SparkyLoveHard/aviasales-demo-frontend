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

const Title = styled.h4`
  font-family: Roboto,sans-serif;
  margin: 0;
  font-size: 16px;
`;

const Text = styled.p`
  font-family: Roboto,sans-serif;
  margin: 0;
  font-size: 16px;
`;

const MediaBlock = styled.div`
  @media screen and (min-width: 992px) {
    display: flex;
    flex-direction: row;
  }
`;

const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`;

const Img = styled.img`

`;

const Input = styled.input`
  width: 190px;
`;

const Button = styled.button`
  width: 140px;
`;

export default class Subscribe extends React.Component {
  render() {
    return (
      <div>
        <Line/>
        <SubscribeSection>
          <div className="container">
            <div className="row">
              <div className="center-md col-md-offset-3 col-md-6 lg col-lg-4 start-lg">
                <Title>Хотите знать всё о скидках на авиабилеты?</Title>
                <Text>Вы можете подписаться на нашу рассылку через соцсети или по электронной почте.</Text>
              </div>
              <div className="center-md col-md-offset-3 col-md-6 col-lg-5">
                <MediaBlock>
                  <SocialMedia>
                    <Img src={Twitter}/>
                    <Img src={Facebook}/>
                    <Img src={Vk}/>
                    <Img src={Rss}/>
                  </SocialMedia>
                  <div>
                    <Input/>
                    <Button>Подписаться</Button>
                  </div>
                </MediaBlock>
              </div>
            </div>
          </div>
        </SubscribeSection>
      </div>
    )
  }
}