import React from 'react';

import { connect } from "react-redux";
//actions
import {addItem} from "./actions/action";
import {removeItem} from "./actions/removeItem";
//components
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = props=> {
  console.log("app.js", props);
  //Props contain state, actions for reducer, that are passed in using connect
  
  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.removeItem(item)
    
  };

  // const buyItem = item => {
  //   // dipsatch an action here to add an item
  //   props.addItem(item)
  // };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature ={removeFeature}/>
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} 
        buyItem={props.buyItem}/>
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps= state =>{
  console.log("mapping props", state)
  return{
      features: state.car.features,
      car: state.car,
      additionalFeatures: state.additionalFeatures,
      additionalPrice: state.additionalPrice
  }
}

export default connect(mapStateToProps,{addItem, removeItem})(App);
