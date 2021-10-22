import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import * as qs from 'query-string';

import PopupMessage from './PopupMessage';
import Trips from './trip/Trips';
import TextBottomBorderInput from './TextBottomBorderInput';

import api from '../axios';

import '../css/home.css';

const Home = (props) => {
  const params = qs.parse(props.location.search);
  const [trips, setTrips] = useState([]);
  const [keyword, setKeyword] = useState(params.keyword ? params.keyword : '');

  const fetchTrips = async () => {
    try {
      const tripsResult = (await api.get('/trips', { params: { keyword } })).data;
      setTrips(tripsResult);

    } catch (error) {

    }
  }

  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
    props.history.push({
      pathname: '/',
      search: `?keyword=${e.target.value}`
    });
  }

  useEffect(() => {
    fetchTrips();
  }, [keyword]);

  return <div className="home">
    <div className="container">
      <h1 className="light-blue space big center">เที่ยวไหนดี</h1>
      <div className="input-container">
        <TextBottomBorderInput value={keyword} onChange={handleKeywordChange}></TextBottomBorderInput>
      </div>
      <Trips trips={trips}></Trips>
      <PopupMessage message='test'></PopupMessage>
    </div>
  </div >
}

export default withRouter(Home);
