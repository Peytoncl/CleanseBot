const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NzI3NzMxNjQ0NzQ4MDA1NDA2.Xv2qHQ.iCUBaNkVGqM_5z_6qSKvP38EeyY';
var profanities = require('profanities')
const db = require('quick.db');

client.on('ready', () =>{
	console.log('This bot is online!')
	client.user.setStatus('online')
	client.user.setActivity(';help', { type: 'LISTENING'})
})

client.on('message', msg=>{
	if(msg.content.toLowerCase() == ';donate'){
	msg.channel.send('https://streamlabs.com/botcleanse/tip')
	}
})

client.on('message', msg=>{
	if(msg.content.toLowerCase() == ';twitter'){
	msg.channel.send('https://twitter.com/botCleanse')
	}
})

client.on('message', msg=>{
	if(msg.content.toLowerCase() == ';help'){
	const moneyEmbed = new Discord.MessageEmbed();
	moneyEmbed.setAuthor(msg.author.username)
	moneyEmbed.setColor("#425f8f")
	moneyEmbed.addField(`;donate`)
	moneyEmbed.addField(`;twitch`)
	moneyEmbed.addField(`;discord`)
	moneyEmbed.addField(`demon dog`)
	moneyEmbed.addField(`;help`)
	moneyEmbed.addField(`;help admin (Only for admins)`)

	msg.channel.send(moneyEmbed);   
	}
})

client.on('message', msg=>{
	if(msg.content.toLowerCase() == ';help admin' && msg.member.hasPermission("ADMINISTRATOR")) {
	const Embed = new Discord.MessageEmbed();
	Embed.setAuthor(msg.author.username)
	Embed.setColor("#FF0000")
	Embed.addField(`;nuke`)

	msg.channel.send(Embed);   
	}
	else if(msg.content.toLowerCase() == ';help admin' && !msg.member.hasPermission("ADMINISTRATOR")) {
		let number = Math.random();
		if (number > 0 && number < .5) {
			msg.reply('No')

			return;
		}
		else if (number > .5 && number < 1) {
			msg.reply('You lack intelligence to run that command')

			return;
		}
		}
})

client.on('message', msg=>{
	if(msg.content.toLowerCase() == ';nuke' && msg.member.hasPermission("ADMINISTRATOR")){
	msg.channel.send('https://tenor.com/view/explosion-nuke-boom-nuclear-gif-5791468')
	msg.channel.send('https://tenor.com/view/explosion-nuke-boom-nuclear-gif-5791468')
	msg.channel.send('https://tenor.com/view/explosion-nuke-boom-nuclear-gif-5791468')
	msg.channel.send('https://tenor.com/view/explosion-nuke-boom-nuclear-gif-5791468')
	}
	else if(msg.content.toLowerCase() == ';nuke' && !msg.member.hasPermission("ADMINISTRATOR")){
		let number = Math.random();
		if (number > 0 && number < .5) {
			msg.reply('No')

			return;
		}
		else if (number > .5 && number < 1) {
			msg.reply('You lack intelligence to run that command')

			return;
		}
		}
})

client.on('message', msg=>{
	if(msg.content.toLowerCase() == ';discord'){
	msg.channel.send('https://discord.gg/RV5vAtR')
	}
})

client.on('message', msg=>{
	if(msg.content.toLowerCase() == ';twitch'){
	msg.channel.send('https://www.twitch.tv/botcleanse')
	}
})

client.on('message', msg=>{
		let message = msg.content.toLowerCase()
		if (message.includes('cunt') && msg.author.username != 'Cleanse' && msg.author.tag != '7821' && msg.author.tag != '3438' && msg.author.username != 'NOT Cleanse' && msg.author.tag != '1844') {
			msg.reply('Cleanse does not approve!')
			msg.delete()
			return;
		}
		else if (message.includes('bitch') && msg.author.username != 'Cleanse' && msg.author.tag != '7821' && msg.author.tag != '3438' && msg.author.username != 'NOT Cleanse' && msg.author.tag != '1844') {
			msg.reply('Cleanse does not approve!')
			msg.delete()
			return;
		}
		else if (message.includes('shit') && msg.author.username != 'Cleanse' && msg.author.tag != '7821' && msg.author.tag != '3438' && msg.author.username != 'NOT Cleanse' && msg.author.tag != '1844') {
			msg.reply('Cleanse does not approve!')
			msg.delete()
			return;
		}
		else if (message.includes('b i t c h') && msg.author.username != 'Cleanse' && msg.author.tag != '7821' && msg.author.tag != '3438' && msg.author.username != 'NOT Cleanse' && msg.author.tag != '1844') {
			msg.reply('Cleanse does not approve!')
			msg.delete()
			return;
		}
		else if (message.includes('c u n t') && msg.author.username != 'Cleanse' && msg.author.tag != '7821' && msg.author.tag != '3438' && msg.author.username != 'NOT Cleanse' && msg.author.tag != '1844') {
			msg.reply('Cleanse does not approve!')
			msg.delete()
			return;
		}	
		else if (message.includes('s h i t') && msg.author.username != 'Cleanse' && msg.author.tag != '7821' && msg.author.tag != '3438' && msg.author.username != 'NOT Cleanse' && msg.author.tag != '1844') {
			msg.reply('Cleanse does not approve!')
			msg.delete()
			return;
		}	
		else if (message.includes('fuck') && msg.author.username != 'Cleanse' && msg.author.tag != '7821' && msg.author.tag != '3438' && msg.author.username != 'NOT Cleanse' && msg.author.tag != '1844') {
			msg.reply('Cleanse does not approve!')
			msg.delete()
			return;
		}
		else if (message.includes('f u c k') && msg.author.username != 'Cleanse' && msg.author.tag != '7821' && msg.author.tag != '3438' && msg.author.username != 'NOT Cleanse' && msg.author.tag != '1844') {
			msg.reply('Cleanse does not approve!')
			msg.delete()
			return;
		}		
		else if (message.includes('ass') && msg.author.username != 'Cleanse' && msg.author.tag != '7821' && msg.author.tag != '3438' && msg.author.username != 'NOT Cleanse' && msg.author.tag != '1844') {
			msg.reply('Cleanse does not approve!')
			msg.delete()
			return;
		}	
		else if (message.includes('a s s') && msg.author.username != 'Cleanse' && msg.author.tag != '7821' && msg.author.tag != '3438' && msg.author.username != 'NOT Cleanse' && msg.author.tag != '1844') {
			msg.reply('Cleanse does not approve!')
			msg.delete()
			return;
		}	
		else if (message.includes('damn') && msg.author.username != 'Cleanse' && msg.author.tag != '7821' && msg.author.tag != '3438' && msg.author.username != 'NOT Cleanse' && msg.author.tag != '1844') {
			msg.reply('Cleanse does not approve!')
			msg.delete()
			return;
		}	
		else if (message.includes('nigger') && msg.author.username != 'Cleanse' && msg.author.tag != '7821' && msg.author.tag != '3438' && msg.author.username != 'NOT Cleanse' && msg.author.tag != '1844') {
			msg.reply('Cleanse does not approve!')
			msg.delete()
			return;
		}	
		else if (message.includes('n i g g e r') && msg.author.username != 'Cleanse' && msg.author.tag != '7821' && msg.author.tag != '3438' && msg.author.username != 'NOT Cleanse' && msg.author.tag != '1844') {
			msg.reply('Cleanse does not approve!')
			msg.delete()
			return;
		}	
		else if (message.includes('nigga') && msg.author.username != 'Cleanse' && msg.author.tag != '7821' && msg.author.tag != '3438' && msg.author.username != 'NOT Cleanse' && msg.author.tag != '1844') {
			msg.reply('Cleanse does not approve!')
			msg.delete()
			return;
		}	
		else if (message.includes('n i g g a') && msg.author.username != 'Cleanse' && msg.author.tag != '7821' && msg.author.tag != '3438' && msg.author.username != 'NOT Cleanse' && msg.author.tag != '1844') {
			msg.reply('Cleanse does not approve!')
			msg.delete()
			return;
		}	
		else if (message.includes('faggot') && msg.author.username != 'Cleanse' && msg.author.tag != '7821' && msg.author.tag != '3438' && msg.author.username != 'NOT Cleanse' && msg.author.tag != '1844') {
			msg.reply('Cleanse does not approve!')
			msg.delete()
			return;
		}	
		else if (message.includes('f a g g o t') && msg.author.username != 'Cleanse' && msg.author.tag != '7821' && msg.author.tag != '3438' && msg.author.username != 'NOT Cleanse' && msg.author.tag != '1844') {
			msg.reply('Cleanse does not approve!')
			msg.delete()
			return;
		}	
		else if (message.includes('fag') && msg.author.username != 'Cleanse' && msg.author.tag != '7821' && msg.author.tag != '3438' && msg.author.username != 'NOT Cleanse' && msg.author.tag != '1844') {
			msg.reply('Cleanse does not approve!')
			msg.delete()
			return;
		}	
		else if (message.includes('f a g') && msg.author.username != 'Cleanse' && msg.author.tag != '7821' && msg.author.tag != '3438' && msg.author.username != 'NOT Cleanse' && msg.author.tag != '1844') {
			msg.reply('Cleanse does not approve!')
			msg.delete()
			return;
		}	
		else if (message.includes('nihger') && msg.author.username != 'Cleanse' && msg.author.tag != '7821' && msg.author.tag != '3438' && msg.author.username != 'NOT Cleanse' && msg.author.tag != '1844') {
			msg.reply('Cleanse does not approve!')
			msg.delete()
			return;
		}	
		else if (message.includes('niggger') && msg.author.username != 'Cleanse' && msg.author.tag != '7821' && msg.author.tag != '3438' && msg.author.username != 'NOT Cleanse' && msg.author.tag != '1844') {
			msg.reply('Cleanse does not approve!')
			msg.delete()
			return;
		}	
		else if (message.includes('niigger') && msg.author.username != 'Cleanse' && msg.author.tag != '7821' && msg.author.tag != '3438' && msg.author.username != 'NOT Cleanse' && msg.author.tag != '1844') {
			msg.reply('Cleanse does not approve!')
			msg.delete()
			return;
		}	
		else if (message.includes('slut') && msg.author.username != 'Cleanse' && msg.author.tag != '7821' && msg.author.tag != '3438' && msg.author.username != 'NOT Cleanse' && msg.author.tag != '1844') {
			msg.reply('Cleanse does not approve!')
			msg.delete()
			return;
		}
		else if (message.includes('hore') && msg.author.username != 'Cleanse' && msg.author.tag != '7821' && msg.author.tag != '3438' && msg.author.username != 'NOT Cleanse' && msg.author.tag != '1844') {
			msg.reply('Cleanse does not approve!')
			msg.delete()
			return;
		}
		else if (message.includes('whore') && msg.author.username != 'Cleanse' && msg.author.tag != '7821' && msg.author.tag != '3438' && msg.author.username != 'NOT Cleanse' && msg.author.tag != '1844') {
			msg.reply('Cleanse does not approve!')
			msg.delete()
			return;
		}
		else if (message.includes('ass') && msg.author.username != 'Cleanse' && msg.author.tag != '7821' && msg.author.tag != '3438' && msg.author.username != 'NOT Cleanse' && msg.author.tag != '1844') {
			msg.reply('Cleanse does not approve!')
			msg.delete()
			return;
		}
		else if (message.includes('penis') && msg.author.username != 'Cleanse' && msg.author.tag != '7821' && msg.author.tag != '3438' && msg.author.username != 'NOT Cleanse' && msg.author.tag != '1844') {
			msg.reply('Cleanse does not approve!')
			msg.delete()
			return;
		}
		else if (message.includes('dick') && msg.author.username != 'Cleanse' && msg.author.tag != '7821' && msg.author.tag != '3438' && msg.author.username != 'NOT Cleanse' && msg.author.tag != '1844') {
			msg.reply('Cleanse does not approve!')
			msg.delete()
			return;
		}
		else if (message.includes('shiiit') && msg.author.username != 'Cleanse' && msg.author.tag != '7821' && msg.author.tag != '3438' && msg.author.username != 'NOT Cleanse' && msg.author.tag != '1844') {
			msg.reply('Cleanse does not approve!')
			msg.delete()
			return;
		}
		else if (message.includes('v a g i n a') && msg.author.username != 'Cleanse' && msg.author.tag != '7821' && msg.author.tag != '3438' && msg.author.username != 'NOT Cleanse' && msg.author.tag != '1844') {
			msg.reply('Cleanse does not approve!')
			msg.delete()
			return;
		}
		else if (message.includes('shitter') && msg.author.username != 'Cleanse' && msg.author.tag != '7821' && msg.author.tag != '3438' && msg.author.username != 'NOT Cleanse' && msg.author.tag != '1844') {
			msg.reply('Cleanse does not approve!')
			msg.delete()
			return;
		}
		else if (message.includes('cum') && msg.author.username != 'Cleanse' && msg.author.tag != '7821' && msg.author.tag != '3438' && msg.author.username != 'NOT Cleanse' && msg.author.tag != '1844') {
			msg.reply('Cleanse does not approve!')
			msg.delete()
			return;
		}
		else if (message.includes('sex') && msg.author.username != 'Cleanse' && msg.author.tag != '7821' && msg.author.tag != '3438' && msg.author.username != 'NOT Cleanse' && msg.author.tag != '1844') {
			msg.reply('Cleanse does not approve!')
			msg.delete()
			return;
		}
		else if (message.includes('kum') && msg.author.username != 'Cleanse' && msg.author.tag != '7821' && msg.author.tag != '3438' && msg.author.username != 'NOT Cleanse' && msg.author.tag != '1844') {
			msg.reply('Cleanse does not approve!')
			msg.delete()
			return;
		}
		else if (message.includes('seggs') && msg.author.username != 'Cleanse' && msg.author.tag != '7821' && msg.author.tag != '3438' && msg.author.username != 'NOT Cleanse' && msg.author.tag != '1844') {
			msg.reply('Cleanse does not approve!')
			msg.delete()
			return;
		}
		else if (message.includes('controller player') && msg.author.username != 'Cleanse' && msg.author.tag != '7821' && msg.author.tag != '3438' && msg.author.username != 'NOT Cleanse' && msg.author.tag != '1844') {
			msg.reply('Cleanse does not approve!')
			msg.delete()
			return;
		}
})

client.on('message', msg=>{
	if(msg.content.toLowerCase() == 'demon dog') {
		let number = Math.random();
		if (number > .8 && number < .9) {
			msg.channel.send('https://imgur.com/XExZxy7') 

			return;
		}
		else if (number > .9 && number < 1) {
			msg.channel.send('https://imgur.com/ZLm4EQ1') 

			return;
		}	
		else if (number > .7 && number < .8) {
			msg.channel.send('https://imgur.com/NmnZKmD') 
		
			return;
		}
		else if (number > .6 && number < .7) {
			msg.channel.send('https://imgur.com/iPIh9eu') 
			
			return;
		}
		else if (number > .5 && number < .6) {
			msg.channel.send('https://imgur.com/NmnZKmD') 
		
			return;
		}		
		else {
			msg.channel.send('https://imgur.com/ddg5Lws')
	
		}	
	}
})

client.login(token);