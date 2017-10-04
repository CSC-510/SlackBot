# Slack bot
[![Build Status](https://travis-ci.org/CSC-510/SlackBot.svg?branch=master)](https://travis-ci.org/CSC-510/SlackBot)
[![Greenkeeper badge](https://badges.greenkeeper.io/CSC-510/SlackBot.svg)](https://greenkeeper.io/)
[![dependencies Status](https://david-dm.org/CSC-510/SlackBot/status.svg)](https://david-dm.org/CSC-510/SlackBot)
[![devDependencies Status](https://david-dm.org/CSC-510/SlackBot/dev-status.svg)](https://david-dm.org/CSC-510/SlackBot?type=dev)

We will write a simple slack bot that will tell us the current weather.

We will use [botkit](https://github.com/howdyai/botkit) for helping connect with slack, and [forecast.io](https://developer.forecast.io/) for weather info.

### Prereq

Install code.

```bash
git clone https://github.com/CSC-510/SlackBot
cd SlackBot
npm install
```

1. Create a new slack team. You may want to use this team for your fellow project teammates.

   Currently, you cannot all use the class slack team because there is a limit in
   current users:
   
   > You should only be able to create 16 connections from the same API token.  
     Unfortunately, that's a general limit across all of Slack's RTM APIs.

2. Create a bot team member. Click [/services/new/bot](https://my.slack.com/services/new/bot). For more information about bot-users, see [documentation](https://api.slack.com/bot-users).

3. Copy slack bot token.

4. Get [forecast.io token](https://darksky.net/dev). First 1000 api calls are free.

5. Update your environment variables.

   You do not want to store sensitive information like api tokens in public locations. Instead, you can store these in configuration files or environment variables.
   
   In windows, you can run:
   ```
   setx FORECASTTOKEN "<forecast.io.token>"
   setx SLACKTOKEN "<slack-token>"
   # You will then need to close the cmd window and reopen.
   ```
   In other systems, you can set them in your shell, like in `.bash_profile`:
   ```
   # Edit .bash_profile to have:
   export FORECASTTOKEN="<token>"
   export SLACKTOKEN="<slacktoken>"
   # Then reload
   $ source ~/.bash_profile
   ```

   Confirm you have properly set your tokens. Run `node envTest.js`. You should see your tokens properly printed out.

### Running the bot

Your goal is to be able to run your bot and get the current weather:

![image](https://cloud.githubusercontent.com/assets/742934/18172392/2e9a333c-7033-11e6-8dcd-81df6031b0ab.png)

* If you can run `node bot.js` and it outputs something and waits, that's good.
* Check if you have a green light in your slack team for your bot. If not, make sure you properly registered bot. 
* See if you can get to have the bot reply to a message. Make sure bot is invited to that channel.

### Getting weather

Lets' make a call to the weather API. See the code inside weatherTest.js. You can run `node weatherTest.js` and confirm you can properly read the weather information.

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

### Understanding Callbacks...

Let's integrate the weather call with our bot reply. But wait. There is a problem. These function calls run asychronously. That means if we did the following, it would not work...

```
w = getWeather();
bot.reply(w)
```

Instead, we need to introduce a callback to the getWeather function, which is telling it what fuction to callback when weather information is ready:

```
getWeather(callback)
{
  onWeather(function(w)
  {
    callback(w);
  });
}
```

### Enhance your bot.

See if you can extend the bot to be able to get the current location as part of a conversation. If you get that working, add some other crazy ideas!
