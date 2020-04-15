import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import {addItem  }from '../actions/action';

const AdditionalFeatures = props => {
  const buyItem = item => {
    // dipsatch an action here to add an item
    props.addItem(item)
  };
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} buyItem={buyItem} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default AdditionalFeatures;
