const SlackBot = require('slackbots');
const axios = require('axios');

const bot = new SlackBot({
    token: 'xoxb-512921113825-512789053568-b3j0YcgC3DHGFF3L7so0LBSy',
    name: 'jokebot'
});

//START THE BOT UP
bot.on('start', () => {
    const params = {
        icon_emoji: ':smiley:'
    }

    bot.postMessageToChannel(
        'general',
        'The cohort clown is here!',
        params
    );
});