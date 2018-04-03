import React from 'react';
import styled from 'styled-components';

import Android from '../Images/android.png'
import Apple from '../Images/apple.png'
import Windows from '../Images/windows.png'



const DownloadBlock = styled.div`
  
`;

const DownloadImg = styled.img`
  margin: 0 8px 0 0;
`;

const DownloadApp = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Section = styled.div`
  background: linear-gradient(137.4deg, #00b0de 4.18%, #196ebd 104.18%);
`;
const Text = styled.p`
  font-family: Roboto, sans-serif;
  font-size: 14px;
  margin: 0;
  color: #ffffff;
`;
export default class Download extends React.Component {
    render(){
      return (
        <Section>

        </Section>
      )
    }
};