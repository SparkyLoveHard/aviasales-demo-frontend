import React from 'react';
import styled from 'styled-components';

import SubscribeLine from './Images/Rectangle 3.png';
import Twitter from './Images/sub-twitter.svg';
import Facebook from './Images/sub-facebook.svg';
import Vk from './Images/sub-vk.svg';
import Rss from './Images/sub-rss.svg';

const Line = styled.div`
  margin-top: 28px;
  height: 7px;
  width: 100%;
  background-image: url(${SubscribeLine});
`;

const SubscribeSection = styled.div`
  display: none;
  font-family: Roboto, sans-serif;
  margin: 32px 0 60px 0;
  @media screen and (min-width: 768px) {
    display: block;
    margin: 32px 0 24px 0;
  }
`;

const Title = styled.h4`
  font-family: Roboto, sans-serif;
  font-size: 16px;
  margin: 0 0 4px 0;
`;

const Text = styled.p`
  font-family: Roboto, sans-serif;
  font-size: 16px;
  margin: 0 0 20px 0;
  @media screen and (min-width: 992px) {
    margin-bottom: 0;
  }
`;

const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  margin-bottom: 24px;
  @media screen and (min-width: 992px) {
    margin-bottom: 0;
  }
`;

const Img = styled.img`
  width: 36px;
  height: 36px;
  cursor: pointer;
`;

const Input = styled.input`
  margin: 0 0 0 16px;
`;

const Button = styled.button`
  border: none;
  width: 100%;
  background-color: #FF8E41;
  color: white;
  cursor: pointer;
`;

const SubscribeForm = styled.div`
  display: flex;
  justify-content: center;
  height: 32px;
  width: 100%;
`;

const SubscribeLayout = styled.div`
  @media screen and (min-width: 992px) {
    display: flex;
    margin: 0 -8px 0 -8px;
  }
`;

const TextLayout = styled.div`
  text-align: center;
  @media screen and (min-width: 992px) {
    text-align: left;
  }
`;

const MediaBlock = styled.div`
  @media screen and (min-width: 992px) {
    display: flex;
  }
`;

const Subscribe = () => {
  return (
    <div>
      <Line />
      <SubscribeSection>
        <div className="container">
          <SubscribeLayout>
            <TextLayout className="col-lg-5 col-lg-offset-1">
              <Title>
                Хотите знать всё о скидках на авиабилеты?
              </Title>
              <Text>
                Вы можете подписаться на нашу рассылку
                <br />
                через соцсети или по
                электронной почте.
              </Text>
            </TextLayout>
            <div className="col-lg-5">
              <MediaBlock>
                <SocialMedia>
                  <div>
                    <Img src={Twitter} />
                  </div>
                  <div>
                    <Img src={Facebook} />
                  </div>
                  <div>
                    <Img src={Vk} />
                  </div>
                  <div>
                    <Img src={Rss} />
                  </div>
                </SocialMedia>
                <SubscribeForm>
                  <Input placeholder="Ваш email" />
                  <Button>
                    Подписаться
                  </Button>
                </SubscribeForm>
              </MediaBlock>
            </div>
          </SubscribeLayout>
        </div>
      </SubscribeSection>
    </div>
  );
};

export default Subscribe;
