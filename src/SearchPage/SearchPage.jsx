import React from 'react';
import styled from 'styled-components';



import Footer from "../HomePage/Footer";
import SearchHeader from "./SearchHeader";
import NavBar from "./NavBar";
import TicketsInfo from "./TicketsInfo";

const SearchPageStyle = styled.div`
  background-color: #EAEAEA;
`;


export default class SearchPage extends React.Component {
  render() {
    return (
      <SearchPageStyle>
        <SearchHeader/>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <NavBar/>
            </div>
            <div className="col-lg-7">
              <TicketsInfo/>
            </div>
          </div>
        </div>
        <Footer/>
      </SearchPageStyle>
    )
  }
}





