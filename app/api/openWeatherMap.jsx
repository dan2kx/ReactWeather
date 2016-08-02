var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=773a4187e1acd23c5e9aaf11bfa2c41e&q=London,uk';

module.exports = {
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${location}`;

  return axios.get(requestUrl).then(function(res){
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      }
      else {
        return res.data.main.temp;
      }
    }, function(res) {
      throw new Error(res.data.message);
    });
  }
}
