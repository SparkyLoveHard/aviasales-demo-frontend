import React,{Component} from 'react';
import styled from 'styled-components';

import Compass from '../Images/Group.svg';

import World from "../Images/world.svg";
import Palm from "../Images/palm.svg";
import Shopping from "../Images/shopping.svg";
import Culture from "../Images/culture.svg";
import NightLife from "../Images/nightlife.svg";
import Children from "../Images/children.svg";


const CompassImg = styled.img`
  margin: 40px 0 0 0;
  @media screen and (min-width: 768px) {
    margin: 56px 0 0 0;
  }
`;
const CompassBlock = styled.div`
  display: flex;
  justify-content: center;
`;

const PopularCities = styled.h2`
  margin: 24px 0 32px 0;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    margin: 20px 0 56px 0;
  }
`;

const Img = styled.img`
 margin-bottom: 12px;
 padding: 14px;
 background-color: #ffffff;
 border-radius: 50%;
 box-shadow: 0 4px 16px rgba(74, 74, 74, 0.12);
`;
const Text = styled.p`
  text-align: center;
  color: #00ACE2;
  font-family: Roboto,sans-serif;
  font-size: 12px;
  padding: 0;
  margin: 0;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const Path = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 46px 0;
  @media screen and (min-width: 768px) {
    margin: 0 0 60px 0;
  }
`;

export default class MostPopular extends Component {
  render() {
    return (
      <div>
        <CompassBlock>
          <CompassImg src={Compass}/>
        </CompassBlock>
        <PopularCities>Популярные направления перелетов из города Москва</PopularCities>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-10 col-md-offset-1 col-lg-6 col-lg-offset-3">
              <Path>
                <div className='col-xs-4 col-md-2'>
                  <Card>
                    <Img src={World}/>
                    <Text>КУДА<br/> УГОДНО</Text>
                  </Card>
                </div>
                <div className='col-xs-4 col-md-2'>
                  <Card>
                    <Img src={Palm}/>
                    <Text>СОЛНЦЕ<br/> И МОРЕ</Text>
                  </Card>
                </div>
                <div className='col-xs-4 col-md-2'>
                  <Card>
                    <Img src={Shopping}/>
                    <Text>ШОПИНГ,<br/> ГОРОД</Text>
                  </Card>
                </div>
                <div className='col-xs-4 col-md-2'>
                  <Card>
                    <Img src={Culture}/>
                    <Text>КУЛЬТУРА<br/> И ИСТОРИЯ</Text>
                  </Card>
                </div>
                <div className='col-xs-4 col-md-2'>
                  <Card>
                    <Img src={NightLife}/>
                    <Text>НОЧНАЯ<br/> ЖИЗНЬ</Text>
                  </Card>
                </div>
                <div className='col-xs-4 col-md-2'>
                  <Card>
                    <Img src={Children}/>
                    <Text>ОТДЫХ<br/> С ДЕТЬМИ</Text>
                  </Card>
                </div>
              </Path>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

