import React from 'react';
import '../../css/trip/trip.css';

const Trip = ({ trip }) => {
  return <div className="trip-container">
    <div className="left-content">
      <div className="center-cropped">
        <img src={trip.photos[0]} alt={`${trip.title} preview`} width="200" height="auto" />
      </div>
    </div>
    <div className="right-content">
      <h3 className="trip-header">{trip.title}</h3>
      <p>{trip.description}</p>
    </div>
  </div>
}

export default Trip;