const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();

client.on('ready', () => {
	console.log('Client is ready!');
});

client.on('message', message => {

	const args = message.content.slice(prefix.length).split(' ');
	const command = args.shift().toLowerCase();

	if (!message.content.startsWith(prefix) || message.author.bot) {return;}
	else if (command === 'args-info') {
		if (!args.length) {
			return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
		}

		message.channel.send(`Command name: ${command}\nArguments: ${args}`);
	}
});

client.login(token);