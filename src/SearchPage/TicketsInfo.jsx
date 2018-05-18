import React from 'react';
import styled from 'styled-components';

import Russia from './Images/Russia.png'


const TicketsInfoBlock = styled.div`
  display: flex;
  background-color: #ffffff;
`;








export default class TicketsInfo extends React.Component {
  render() {
    return (
      <div>


              <TicketsInfoBlock>


                <div>
                  <button>Купить за 7712</button>
                  <span>На clickavia</span>
                </div>
                <div>
                  <div>
                    <img src={Russia} alt=""/>
                    <button>чартер</button>
                  </div>
                  <span>00:05</span>
                  <span>Москва</span>
                  <span>24 февраля</span>
                </div>


              </TicketsInfoBlock>






      </div>
    )
  }
}