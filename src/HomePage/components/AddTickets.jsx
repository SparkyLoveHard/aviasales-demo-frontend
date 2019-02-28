import React from 'react';
import styled from 'styled-components';

const PassengerTicketsLayout = styled.div`
  display: flex;
  width: 100%;
  margin: 0 0 2px 0;
  @media screen and (min-width: 568px) {
    width: 50%;
  }
  @media screen and (min-width: 992px) {
    width: 22%;
  }
`;

const PassengerTickets = styled.input`
  width: 100%;
  border: none;
  padding: 18px 0 18px 16px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  @media screen and (min-width: 568px) {
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: unset;
  }
  @media screen and (min-width: 992px) {
    margin: 0 2px 0 0;
    border-top-right-radius: 4px;
  }
`;

const Affff = styled.div`
  position: relative;
  z-index: 500;
`;

class TicketsToggle extends React.Component {
  render() {
    return (
      <Affff>
          sad
      </Affff>
    )
  }
}

export default class AddTickets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
    this.handleClickShow = this.handleClickShow.bind(this);
  }

  handleClickShow = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }))
  }
  
  render() {
    return (
      <React.Fragment>
        <PassengerTicketsLayout>
          <PassengerTickets placeholder="1 пассажир, эконом" onClick={this.handleClickShow}/>
          {this.state.show && <TicketsToggle/>}
        </PassengerTicketsLayout>
      </React.Fragment>
    )
  }
}








