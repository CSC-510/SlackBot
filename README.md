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

1. Create a new slack team.

   Currently, you cannot all use the class slack team because there is a limit in
   current users:
   
   > You should only be able to create 16 connections from the same API token.  
     Unfortunately, that's a general limit across all of Slack's RTM APIs.

2. Create a bot team member. Click [/services/new/bot](https://my.slack.com/services/new/bot). For more information about bot-users, see [documentation](https://api.slack.com/bot-users).

3. Copy slack bot token.

4. Get forecast.io token. Warning you may also want to create your own forecast.io token (first 1000 api calls are free), meaning about 10 calls per student... which will probably run out.

5. Update your environment variables.

   You do not want to store sensitive information like api tokens in public locations. Instead, you can store these in configuration files or environment variables.
   
   In windows, you can run:
   ```
   setx FORECASTTOKEN "<forecast.io.token>"
   setx ALTCODETOKEN "<slack-token>"
   # You will then need to close the cmd window and reopen.
   ```
   In other systems, you can set them in your shell, like in `.bash_profile`:
   ```
   # Edit .bash_profile to have:
   export FORECASTTOKEN="<token>"
   export ALTCODETOKEN="<slacktoken>"
   # Then reload
   $ source ~/.bash_profile
   ```
   
### Running the bot

Your goal is to be able to run your bot and get the current weather:

![image](https://cloud.githubusercontent.com/assets/742934/18172392/2e9a333c-7033-11e6-8dcd-81df6031b0ab.png)

* If you can run `node bot.js` and it outputs something and waits, that's good.
* Check if you have a green light in your slack team for your bot. If not, make sure you properly registered bot. 
* See if you can get to have the bot reply to a message. Make sure bot is invited to that channel.
* Finally, see if you can change the code to now get weather information:

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
