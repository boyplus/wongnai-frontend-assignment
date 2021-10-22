import React, { Fragment } from 'react';
import '../../css/trip/trip.css';
import '../../css/App.css';

const Trip = ({ trip }) => {
  const newLineRex = /\r?\n\n/;
  const spiltedDescription = trip.description.split(newLineRex);


  return <div className="trip-container">
    <div className="left-content">
      <div className="center-cropped">
        <img src={trip.photos[0]} alt={`${trip.title} preview`} width="200" height="auto" />
      </div>
    </div>
    <div className="right-content">
      <h3 className="trip-header">{trip.title}</h3>
      <p className="grey">{spiltedDescription[0]} {spiltedDescription.length === 1 ? <a href="" className="light-blue">อ่านต่อ</a> : null}</p>
      <br />
      <p className="grey">
        {spiltedDescription.length > 1 ?
          <Fragment>
            {spiltedDescription[1]?.substring(0, 30) + ' .... '}
            <a href="" className="light-blue">อ่านต่อ</a>
          </Fragment> : null}

      </p>
      <p className="grey">
        หมวด {trip.tags.map((tag, index) => {
          return index === trip.tags.length - 2 ? <span className="mg-l-5">และ</span> : <span className="link mg-l-5">{tag}</span>
        })}

      </p>
    </div>
  </div >
}

export default Trip;