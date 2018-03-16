import React,{Component} from 'react';
import Header from './Header';
import MostPopular from "./MostPopular";
import CityCards from "./CityCards";
import Special from "./Special";
import HowBuy from "./HowBuy";
import Footer from "./Footer";
import BestPrice from "./BestPrice";




export default class HomePage extends Component {
  render(){
    return (
        <div>
          <Header/>
          <MostPopular/>
          <CityCards/>
          <BestPrice/>
          <Special/>
          <HowBuy/>
          <Footer/>
        </div>
    )
  }
}
