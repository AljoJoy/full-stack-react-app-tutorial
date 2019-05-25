const request = require('request-promise');

const API_KEY = '9bb19cd93746f58348a0335191b8cbee';

class Weather{
    static retrieveByCity (city, callback) {
        request({
          uri: `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=imperial`,
          json: true
        }).then((res) => {
          callback(res);
        }).catch((err) => {
          console.log(err);
          callback({ error: 'Could not reach OpenWeatherMap API.' });
        });
      }
}

module.exports = Weather;