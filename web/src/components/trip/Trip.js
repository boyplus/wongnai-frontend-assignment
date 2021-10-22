import React from 'react';
import '../../css/trip/trip.css';
import '../../App.css';

const Trip = ({ trip }) => {

  const getFirstLineDescription = () => {
    console.log(trip.description.split(/\r?\n\n/));
    return trip.description.split(/\r?\n\n/)[0];
  }
  const getSecondLineDescription = () => {
    return trip.description.split(/\r?\n\n/)[1];
  }


  return <div className="trip-container">
    <div className="left-content">
      <div className="center-cropped">
        <img src={trip.photos[0]} alt={`${trip.title} preview`} width="200" height="auto" />
      </div>
    </div>
    <div className="right-content">
      <h3 className="trip-header">{trip.title}</h3>
      <p className="grey">{getFirstLineDescription()}</p>
      <br />
      <p className="grey">{getSecondLineDescription()}</p>
    </div>
  </div>
}

export default Trip;