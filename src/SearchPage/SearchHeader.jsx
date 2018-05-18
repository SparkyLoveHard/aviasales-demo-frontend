import React from 'react';
import styled from 'styled-components';

import {HeaderStyle} from "../HomePage/Header";
import {DepartureLayout} from "../HomePage/Header";
import {CityOfDeparture} from "../HomePage/Header";
import {ArrivalLayout} from "../HomePage/Header";
import {CityOfArrival} from "../HomePage/Header";
import {ThereLayout} from "../HomePage/Header";
import {There} from "../HomePage/Header";
import {BackLayout} from "../HomePage/Header";
import {Back} from "../HomePage/Header";
import {PassengerTicketsLayout} from "../HomePage/Header";
import {PassengerTickets} from "../HomePage/Header";
import {LogoImg} from "../HomePage/Header";
import {ButtonFindTickets} from "../HomePage/Header"
import logo from '../Images/aviasales.png';




const LogoImgSearch = LogoImg.extend`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

const DepartureLayoutSearch = DepartureLayout.extend`

`;

const CityOfDepartureSearch = CityOfDeparture.extend`

`;

const PassengerTicketsLayoutSearch = PassengerTicketsLayout.withComponent('div').extend`
  display: flex;
  width: 25%;
  
  @media screen and (min-width: 568px){
    width: 25%;
  }
  @media screen and (min-width: 992px){
    width: 22%;
  }
`;

const PassengerTicketsSearch = PassengerTickets.extend`
  display: flex;
  width: 100%;
  
`;


const ButtonFindTicketsSearch = ButtonFindTickets.withComponent("button").extend`
  display: flex;
  width: 100%;
  font-size: 20px;
  padding: 0 0 0 0;
  margin: 0;
  text-align: center;
  align-items: center;
  @media screen and (min-width: 566px){
    padding: 0;
  }
  @media screen and (min-width: 768px){
    padding: 0 26px 0 26px;
    margin: 0 0 0 2px;
  }
  @media screen and (min-width: 992px){
    padding: 0;
  }
`;

const ButtonSearch = styled.div`
  display: flex;
  width: 25%;
  margin: 0 0 2px 0;
  @media screen and (min-width: 992px){
    width: 100%;
  }
`;

const FirstMain = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const SecondMain = styled.div`
  display: flex;
  flex-wrap: wrap;

`;
const Inputs = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ButDiv = styled.div`
  display: flex;
  flex-wrap: wrap;

`;



export default class SearchHeader extends React.Component {
  render() {
    return (
      <HeaderStyle>
        <LogoImgSearch src={logo}/>
          <div className="container">
            <div className="row">
              <FirstMain className="col-md-12">
                <div className='row'>
                  <Inputs className="col-md-offset-0">
                    <DepartureLayoutSearch>
                      <CityOfDepartureSearch placeholder="Москва"/>
                    </DepartureLayoutSearch>
                    <ArrivalLayout>
                      <CityOfArrival placeholder="Город прибытия"/>
                    </ArrivalLayout>
                    <ThereLayout>
                      <There placeholder="Туда"/>
                    </ThereLayout>
                    <BackLayout>
                      <Back placeholder="Обратно"/>
                    </BackLayout>
                    <PassengerTicketsLayoutSearch>
                      <PassengerTicketsSearch>
                        <option>1 пассажир, эконом</option>
                      </PassengerTicketsSearch>
                    </PassengerTicketsLayoutSearch>
                  </Inputs>
                  <ButtonSearch className="col-md-offset-0">
                    <ButtonFindTicketsSearch>Найти билеты</ButtonFindTicketsSearch>
                  </ButtonSearch>
                </div>
              </FirstMain>






            </div>
          </div>
      </HeaderStyle>
    )
  }
}