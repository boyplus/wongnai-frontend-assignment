import React from 'react';
import Trip from './Trip';

const Trips = ({ trips, changeKeyword }) => {
  return <div className="trips-container">
    {trips.map((trip) => <Trip key={trip.eid} trip={trip} changeKeyword={changeKeyword}></Trip>)}
  </div>
}

export default Trips;