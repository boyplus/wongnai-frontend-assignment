const express = require('express');
const axios = require('axios');

const app = express();

const JSON_SERVER_URL = 'http://localhost:9000'

app.get('/api/trips', async (req, res) => {
  try {
    let { keyword } = req.query;
    if (!keyword) keyword = ''
    const trips = (await axios.get(`${JSON_SERVER_URL}/trips`)).data
    const filteredTrips = trips.filter((trip) => trip.title.includes(keyword) || trip.description.includes(keyword) || trip.tags.includes(keyword));
    res.send(filteredTrips);
  } catch (error) {
    res.status(500).send(error)
  }
});

app.use(express.static('../web/build'));
const path = require('path');
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`API gateway listen on port ${PORT}`);
})