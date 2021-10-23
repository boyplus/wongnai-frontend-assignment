import axios from 'axios';
const createRecord = async () => {
  try {
    const data = {
      "records": [
        {
          "fields": {
            "Date": new Date() + "",
          }
        }
      ]
    }
    await axios.post(
      "https://api.airtable.com/v0/appg0zfjMWKyaSCdI/Table%201",
      data,
      { headers: { "Authorization": "Bearer key52bGKU8vPfnEP7", 'Content-Type': 'application/json' } }
    )
  } catch (error) {

  }
}
export default createRecord;