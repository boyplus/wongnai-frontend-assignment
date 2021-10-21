import React from 'react';
import Trip from './Trip';

const Trips = ({ trips }) => {
  return <div className="trips-container">
    {trips.map((trip) => <Trip key={trip.eid} trip={trip}></Trip>)}
  </div>
}

export default Trips;