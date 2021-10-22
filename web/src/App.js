import React, { useEffect, useState } from 'react';
import PopupMessage from './components/PopupMessage';
import Trips from './components/trip/Trips';
import TextBottomBorderInput from './components/TextBottomBorderInput';
import api from './axios'

import './App.css';

const App = () => {
  const [trips, setTrips] = useState([]);
  const [keyword, setKeyword] = useState('');

  const fetchTrips = async () => {
    try {
      const tripsResult = (await api.get('/trips', { params: { keyword } })).data;
      setTrips(tripsResult);
    } catch (error) {

    }
  }

  useEffect(() => {
    fetchTrips();
  }, [keyword])

  return <div className="App">
    <div className="container">
      <h1 className="light-blue space big center">เที่ยวไหนดี</h1>
      <div className="input-container">
        <TextBottomBorderInput value={keyword} onChange={(e) => setKeyword(e.target.value)}></TextBottomBorderInput>
      </div>
      <Trips trips={trips}></Trips>
      <PopupMessage message='test'></PopupMessage>
    </div>

  </div >
}

export default App;
