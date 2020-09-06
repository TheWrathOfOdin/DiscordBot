//declarations for discord.js
const Discord = require('discord.js');
const client = new Discord.Client();
const token ='NzUxNjIyODg5NDI1NjAwNjE3.X1LxXQ.gDAPzYzNsDPDIrC4iXDATwMYkeM';
const channel = client.channels.cache.get('751623424442499106');
client.login(token);


//var declarations for SchoolCounter
var countDownDate = new Date("September 15, 2020 8:45:00").getTime();
var now;
var timeleft;    
var days;
var hours;
var minutes;
var seconds;

var myfunc = setInterval(function() {
	 now = new Date().getTime();
	 timeleft = countDownDate - now;   
	 days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
	 hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	 minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
	 seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

}, 1000)


//send message
client.on('message', message => {
	if (message.content === '-SchoolCounter') {
		message.channel.send("There are : " +  days + " days " + " and " + hours + " hours " + " and " + minutes + " minutes " + " and " + seconds + " seconds "  + " left until the day of reckoning.");
	}
});


var countDownDateHalloween = new Date("October 31, 2020 12:00:00").getTime();

var nowH;
var timeleftH;
    
var daysH;
var hoursH;
var minutesH;
var secondsH;

var myfuncH = setInterval(function() {
 
 nowH = new Date().getTime();
 timeleftH = countDownDateHalloween - nowH;   
 daysH = Math.floor(timeleftH / (1000 * 60 * 60 * 24));
 hoursH = Math.floor((timeleftH % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 minutesH = Math.floor((timeleftH % (1000 * 60 * 60)) / (1000 * 60));
 secondsH = Math.floor((timeleftH % (1000 * 60)) / 1000);

}, 1000)



client.on('message', message => {
	if (message.content === '-Spooky') {
		message.channel.send("There are : " +  daysH + " days " + " and " + hoursH + " hours " + " and " + minutesH + " minutes " + " and " + secondsH + " seconds "  + " left until spooky day!");
	}


});


var countDownDateChristmas = new Date("December 25, 2020 12:00:00").getTime();

var nowC;
var timeleftC;
    
var daysC;
var hoursC;
var minutesC;
var secondsC;

var myfuncC = setInterval(function() {
 
 nowC = new Date().getTime();
 timeleftC = countDownDateChristmas - nowC;   
 daysC = Math.floor(timeleftC / (1000 * 60 * 60 * 24));
 hoursC = Math.floor((timeleftC % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 minutesC = Math.floor((timeleftC % (1000 * 60 * 60)) / (1000 * 60));
 secondsC = Math.floor((timeleftC % (1000 * 60)) / 1000);

}, 1000)



client.on('message', message => {
	if (message.content === '-Christ') {
		message.channel.send("There are : " +  daysC + " days " + " and " + hoursC + " hours " + " and " + minutesC + " minutes " + " and " + secondsC + " seconds "  + " left until St Nick arrives!");
	}


});





client.on('message', message => {
	if (message.content === '-help') {
		message.channel.send("My commands are: ");
		message.channel.send("-SchoolCounter: Countdown until school starts. ");
		message.channel.send("-Spooky: Countdown until Halloween. ");
		message.channel.send("-Christ: Countdown until Christmas. ");
		message.channel.send("-TheEnd: Countdown until New Year's. ");
		message.channel.send("I also respond to messages like good bot, and bad bot. Along with a few others. ");
	}

});


var countDownDateTheEnd = new Date("January 1, 2021 12:00:00").getTime();

var nowN;
var timeleftN;
    
var daysN;
var hoursN;
var minutesN;
var secondsN;

var myfuncN = setInterval(function() {
 
 nowN = new Date().getTime();
 timeleftN = countDownDateTheEnd - nowN;   
 daysN = Math.floor(timeleftN / (1000 * 60 * 60 * 24));
 hoursN = Math.floor((timeleftN % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 minutesN = Math.floor((timeleftN % (1000 * 60 * 60)) / (1000 * 60));
 secondsN = Math.floor((timeleftN % (1000 * 60)) / 1000);

}, 1000)

client.on('message', message => {
	if (message.content === '-TheEnd') {
		message.channel.send("There are : " +  daysN + " days " + " and " + hoursN + " hours " + " and " + minutesN + " minutes " + " and " + secondsN + " seconds "  + " left until the end.");
	}


});


client.on('message', message => {
	if (message.content === 'good Bananabot') {
		message.channel.send("Thank you!");
	}
});

client.on('message', message => {
	if (message.content === 'good bot') {
		message.channel.send("Thank you!");
	}
});

client.on('message', message => {
	if (message.content === 'bad bot') {
		message.channel.send("Fuck you cunt, Hey👋 ladies💁‍♀️ 📷 Would 😍 you 👈 like 👍 to 2️⃣ get 😮 rich 💰💰💰 by running 🏃‍♀️🏃‍♀️ your 👈 own business 👩‍💼💼 from home 🏡 with just ☝ your phone? 📱🤳 Well 🤷‍♀️ you can't. 😂 Get 👏 a 👏 real 👏 job 👏 you 👏 stupid 👏 cunt ");
	}
});

client.on('message', message => {
	if (message.content === 'FUCK YOU STUPID BOT') {
		message.channel.send("Isn't it sad to be here insulting a fucking robot who still gets more pussy than your sorry ass?");
	}


});

client.on('message', message => {
	if (message.content === 'I WANNA FUCKING KILL BANANABOT BY BURYING HIM INTO A HOLE ALIVE FORCING HIS MOUTH OPEN SHITTING IN IT THEN PULLING OUT HIS EYEBALLS WITH MY TONGUE THEN KILL HIM SLOWLY BY SUFFOCATING HIM WITH MY PISS GRADUALLY') {
		message.channel.send("Did you really spend a full minute typing that shit? Fuckin weeb.");
	}

});
