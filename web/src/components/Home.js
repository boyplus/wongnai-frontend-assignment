import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import * as qs from 'query-string';
import { useAlert } from "react-alert";

import Trips from './trip/Trips';
import TextBottomBorderInput from './TextBottomBorderInput';

import api from '../axios';
import createRecord from '../utils/createRecord';

import '../css/home.css';

const Home = (props) => {
  const alert = useAlert();

  const params = qs.parse(props.location.search);
  const [trips, setTrips] = useState([]);
  const [keyword, setKeyword] = useState(params.keyword ? params.keyword : '');

  const fetchTrips = async () => {
    try {
      const tripsResult = (await api.get('/trips', { params: { keyword } })).data;
      setTrips(tripsResult);
    } catch (error) {
      alert.show('เกิดข้อผิดพลาด');
    }
  }

  const handleChangeKeyword = (newKeyword) => {
    setKeyword(newKeyword);
    props.history.push({
      pathname: '/',
      search: `?keyword=${newKeyword}`
    });
  }



  useEffect(() => {
    fetchTrips();
  }, [keyword]);

  useEffect(() => {
    createRecord();
  }, [])

  return <div className="home">
    <div className="container">
      <h1 className="light-blue space big center">เที่ยวไหนดี</h1>
      <div className="input-container">
        <TextBottomBorderInput
          value={keyword}
          onChange={(e) => handleChangeKeyword(e.target.value)}
          placeholder='หาที่เที่ยวแล้วไปกัน...'
        >
        </TextBottomBorderInput>
      </div>
      <Trips trips={trips} changeKeyword={handleChangeKeyword}></Trips>
    </div>
  </div >
}

export default withRouter(Home);
