import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";
import TicketsSection from "./TicketsSection";
import SearchHeader from './components/SearchHeader/SearchHeader';
import Footer from '../HomePage/Footer';

const SearchPageStyle = styled.div`
  background-color: #eaeaea;
`;

const FooterStyle = styled.div`
  margin-top: 40px;
  background-color: #FFFFFF;
`;

const SearchPage = () => {
  return (
    <SearchPageStyle>
      <SearchHeader/>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-xl-3">
            <NavBar />
          </div>
          <div className="col-lg-9 col-lg-offset-0 col-md-12 col-xl-7">
            <TicketsSection />
          </div>
        </div>
      </div>
      <FooterStyle>
        <Footer/>
      </FooterStyle>
     
    </SearchPageStyle>
  );
};

export default SearchPage;
