import React, { Fragment } from 'react';
import '../../css/trip/trip.css';
import '../../css/App.css';

const Trip = ({ trip, changeKeyword }) => {
  const newLineRex = /\r?\n\n/;
  const spiltedDescription = trip.description.split(newLineRex);

  const readMore = <a href={trip.url} target="__blank" className="light-blue">อ่านต่อ</a>

  return <div className="trip-container">

    <div className="left-content content">
      <div className="main-img center-cropped">
        <img src={trip.photos[0]} alt={`${trip.title} preview`} width="200" height="100%" />
      </div>
    </div>

    <div className="right-content content">
      <div>

        <h3 className="trip-header">
          <a href={trip.url} target="__blank" className="un-style-link">{trip.title}</a>
        </h3>

        <p className="grey">{spiltedDescription[0]} {spiltedDescription.length === 1 ? readMore : null}</p>
        <br />
        <p className="grey">
          {spiltedDescription.length > 1 ?
            <Fragment>
              {spiltedDescription[1]?.substring(0, 30) + ' .... '}
              {readMore}
            </Fragment> : null}

        </p>
        <p className="grey">
          หมวด {trip.tags.map((tag, index) => {
            return index === trip.tags.length - 2 ?
              <span className="mg-l-5" key="and">และ</span>
              :
              <span key={tag} className="underline link mg-l-5" onClick={() => changeKeyword(tag)}>{tag}</span>
          })}
        </p>
      </div>

      <div className="photos">
        {trip.photos.slice(1, 4).map((photo) => {
          return <div className="center-cropped photo" key={photo}>
            <img src={photo} alt={`${trip.title} preview`} width="120" height="100%" />
          </div>
        })}
      </div>

    </div>
  </div >
}

export default Trip;