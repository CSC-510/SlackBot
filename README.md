# Slack bot

We will write a simple slack bot that will tell us the current weather.

We will use [botkit](https://github.com/howdyai/botkit) for helping connect with slack, and [forecast.io](https://developer.forecast.io/) for weather info.

### Prereq

Install code.

```bash
git clone https://github.com/CSC-510/SlackBot
cd SlackBot
npm install
```

1. Update code with slack token. You will need to create your own slack team for and get a bot token for debugging purpose.

   Currently, you cannot all use the class slack team because there is a limit in
   current users:
   
   > You should only be able to create 16 connections from the same API token.  
     Unfortunately, that's a general limit across all of Slack's RTM APIs.

2. Update code with forecast.io token. Warning you may also want to create your own forecast.io token (first 1000 api calls are free), meaning about 10 calls per student... which will probably run out.


### Running the bot

Your goal is to be able to run your bot and get the current weather:

![image](https://cloud.githubusercontent.com/assets/742934/18172392/2e9a333c-7033-11e6-8dcd-81df6031b0ab.png)

```javascript
// example for calling weather api
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
   });
}
```

### Enhance your bot.

See if you can extend the bot to be able to get the current location as part of a conversation. If you get that working, add some other crazy ideas!
