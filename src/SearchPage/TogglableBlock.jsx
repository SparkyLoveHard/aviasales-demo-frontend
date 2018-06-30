import React from "react";
import styled from "styled-components";

import Arrow from "./Images/ArrowButton.svg";
import Transplantation from "./components/Transplantation";
import Baggage from "./components/Baggage";

const ToggleBlock = styled.div`
  border-bottom: 1px solid #dddddd;
`;

const TitleText = styled.p`
  margin: 0;
  font-size: 12px;
`;

const TitleBlock = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 0 16px 16px;
  cursor: pointer;
`;

const ArrowImg = styled.img`
  margin-right: 6px;
  transform: rotate(-90deg);
`;

export default class ToggleClickBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ToggleTransplantation: false,
      ToggleBaggage: false,
      Rotate: -90
    };

    this.handleToggleTransplantation = this.handleToggleTransplantation.bind(
      this
    );
    this.handleToggleBaggage = this.handleToggleBaggage.bind(this);
    this.handleRotateTransplantation = this.handleRotateTransplantation.bind(this);
  }
  handleToggleTransplantation() {
    this.setState({
      ToggleTransplantation: !this.state.ToggleTransplantation
    });
  }
  handleToggleBaggage() {
    this.setState({
      ToggleBaggage: !this.state.ToggleBaggage
    });
  }

  handleRotateTransplantation() {
    let RotateOpen = this.state.Rotate + 90;
    let RotateClose = this.state.Rotate - 90;
    if (RotateOpen >= 90) {
      RotateOpen = +90;
    }
    this.setState({
      Rotate: RotateOpen ? RotateClose : RotateOpen
    });
  }

  render() {
    let Rotate = this.state.Rotate;

    return (
      <div>
        <ToggleBlock>
          <div>
            <TitleBlock onClick={this.handleRotateTransplantation}>
              <ArrowImg
                style={{ transform: `rotate(${Rotate}deg)` }}
                src={Arrow}
              />
              <TitleText>пересадки</TitleText>
            </TitleBlock>
          </div>

          {this.state.ToggleTransplantation && <Transplantation />}
        </ToggleBlock>
      </div>
    );
  }
}
