import React from 'react';
import styled from 'styled-components';

import Footer from "../HomePage/Footer";
import SearchHeader from "./SearchHeader";
import NavBar from "./NavBar";
import TicketsSection from "./TicketsSection";

const SearchPageStyle = styled.div`
  background-color: #EAEAEA;
`;



export default class SearchPage extends React.Component {
  render() {
    return (
      <SearchPageStyle>

        <div className="container">
          <div className='row'>
            <div className="col-lg-3 col-xl-3">
              <NavBar/>
            </div>
            <div className="col-lg-9 col-lg-offset-0 col-md-12 col-xl-7">
              <TicketsSection/>
            </div>
          </div>
        </div>

      </SearchPageStyle>
    )
  }
}





