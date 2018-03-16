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

`;
const CompassBlock = styled.div`
  display: flex;
  justify-content: center;
`;

const PopularCities = styled.h2`
  font-family: Roboto, sans-serif;
  font-size: 14px;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

const Img = styled.img`
 padding: 14px;
 background-color: black;
 border-radius: 50%;
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
                  <Card>
                    <Img src={World}/>
                    <Text>КУДА<br/> УГОДНО</Text>
                  </Card>
                  <Card>
                    <Img src={Palm}/>
                    <Text>СОЛНЦЕ<br/> И МОРЕ</Text>
                  </Card>
                  <Card>
                    <Img src={Shopping}/>
                    <Text>ШОПИНГ,<br/> ГОРОД</Text>
                  </Card>
                  <Card>
                    <Img src={Culture}/>
                    <Text>КУЛЬТУРА<br/> И ИСТОРИЯ</Text>
                  </Card>
                  <Card>
                    <Img src={NightLife}/>
                    <Text>НОЧНАЯ<br/> ЖИЗНЬ</Text>
                  </Card>
                  <Card>
                    <Img src={Children}/>
                    <Text>ОТДЫХ<br/> С ДЕТЬМИ</Text>
                  </Card>
                </div>
              </div>
        </div>






    )
  }
}


