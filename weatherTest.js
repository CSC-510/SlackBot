var Forecast = require('forecast.io');
var options = {APIKey:process.env.FORECASTTOKEN};
var forecast = new Forecast(options);

getWeather();

function getWeather()
{
	var latitude = "48.208579"
	var longitude = "16.374124"
	forecast.get(latitude, longitude, function (err, res, data) 
	{
      if (err) throw err;

      //console.log('res: ' + JSON.stringify(res));
      //console.log('data: ' + JSON.stringify(data));
      var w = data.currently.summary + " and feels like " + data.currently.apparentTemperature;
      console.log(w)
   });
}
exports.getWeather = getWeather;