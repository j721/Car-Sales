import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
//import actions 
import { addFeature, removeFeature, addTotal }from './actions/action';

import { connect } from 'react-redux'

const App = props => {

  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.removeFeature(item)
    props.addTotal(-item.price)
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    props.addFeature(item)
    props.addTotal(item.price)
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} additionalPrice={props.additionalPrice} />
        <AddedFeatures 
        addFeature={props.addFeature}
        removeFeature={removeFeature}
        car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures 
          buyItem = {buyItem}
        additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};


function mapStateToProps(state) {
  return{
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice,
  }
}

export default connect(mapStateToProps, {addFeature,removeFeature,addTotal})(App);