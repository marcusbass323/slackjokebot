const SlackBot = require('slackbots');
const axios = require('axios');

const bot = new SlackBot({
    token: 'xoxb-512921113825-512789053568-zS2MCRX7QoHJfvFJVhTQQaFv',
    name: 'Ytumamatambienbot'
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

//ERROR HANDLER
bot.on('error', (err) => console.log(err));

//MESSAGE HANDLER
bot.on('mesage', (data) => {
    if (data.type !== 'message') {
        return;
    }
    handleMessage(data.text);
});

//DATA RESPONSE
function handleMessage(message) {
    if (message.includes(' chucknorris')) {
        chuckJoke();
    } else if (message.includes(' yomomma')) {
        yomommajoke()
    } else if (message.includes(' random')) {
        randomjoke()
    } else if (message.includes(' help')) {
        runHelp();
    }
}

//TELL A CHUCK NORRIS JOKE
axios.get('http://api.icndb.com/jokes/random')
    .then(res => {
        const joke = res.data.value.joke;
        
        const params = {
            icon_emoji: ':laughing:'
        };
        
        bot.postMessageToChannel(
            'general',
            `${joke}`,
            params
        );
        
    });

//TELL A YO MOMMA JOKE
axios.get('http://api.yomomma.info')
.then(res => {
    const joke = res.data.joke;
    
    const params = {
        icon_emoji: ':laughing:'
    };
    
    bot.postMessageToChannel(
        'general',
        `${joke}`,
        params
    );
    
});

//TELL A RANDOM JOKE
function randomJoke() {
    const rand = Math.floor(Math.random() * 2);
    if (rand === 1) {
        chuckJoke(); 
    } else if (rand === 2) {
        yomommajoke();
    }

}

//SHOW COMMANDS FROM HELP
function runHelp() {
    const params = {
        icon_emoji: ':question:'
    };

    bot.postMessageToChannel(
        'general',
        `Type yomomma, random or chucknorris to get a joke `,
        params
    );
};