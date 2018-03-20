import React from 'react';
import styled from 'styled-components';

import Mobile from '../Images/iphone-big.png'
import Android from '../Images/android.png'
import Apple from '../Images/apple.png'
import Windows from '../Images/windows.png'



const MobileImg = styled.img`
  bottom: 40px;
`;

const Img = styled.img`
  margin: 0;
  position: relative;
`;

const Title = styled.h3`
  margin: 0;
`;

const DownloadSection = styled.div`

  background: linear-gradient(137.4deg, #00b0de 4.18%, #196ebd 104.18%);
`;

export default class Download extends React.Component {
    render(){
      return (
        <DownloadSection>


        </DownloadSection>
      )
    }
};