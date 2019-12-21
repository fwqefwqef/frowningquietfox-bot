const Discord = require('discord.js');

const client = new Discord.Client();


client.on('ready', () => { // know if our bot is online

    console.log('I am ready!');

});

 

client.on('message', message => { // When the message a message is executed
	
	
    /*if (message.content === 'f' || message.content === 'F') { // if that message matches ping

       message.reply('F? F what? The letter before G? The letter after E? Did you know that in Fu the F  stands for “fuck?” So your reply is “fuck?” or F as in Flourine? Do you need some Special F for breakfast? F as in I can fuck you? Can I fuck you and feed you to hungry falcons? Falcons have an f in it. "F”? Are you fucking kidding me? I spent a decent portion of my life writing all of that and your response to me is "F”?Are you so mentally handicapped that the only letter you can comprehend is "F” - or are you just some fucking asshole who thinks that with such a short response, he can make a statement about how meaningless what was written was? Well, I\'ll have you know that what I wrote was NOT meaningless, in fact, I even had my written work proof-read by several professors of literature. Don\'t believe me? I doubt you would, and your response to this will probably be "F” once again. Do I give a fuck? No, does it look like I give even the slightest fuck about a single letter? I bet you took the time to type that one letter too, I bet you sat there and chuckled to yourself for 20 hearty seconds before pressing "send". You\'re so fucking pathetic. I\'m honestly considering directing you to a psychiatrist, but I\'m simply far too nice to do something like that. You, however, will go out of your way to make a fool out of someone by responding to a well-thought-out, intelligent, or humorous statement that probably took longer to write than you can last in bed with a chimpanzee. What do I have to say to you? Absolutely nothing. I couldn\'t be bothered to respond to such a worthless attempt at a response. Do you want "F” on your gravestone? Do you want people to remember you as the asshat who one day decided to respond to someone with a single letter? "Hey, look, everybody! It\'s that "f” guy!" That\'s who you are. You\'re going to be known as the "F” guy. How does it feel? Do you feel happy? Quite honestly, I don\'t care, which is why I\'m not even going to respond to you.');
		
       }*/
	if (!message.author.bot) {
	
	if ((message.content === ('h'))) { // if that message matches ping
       message.reply('https://imgur.com/a/nHSXeuz');
       }   
	if ((message.content === ('!help'))) { // if that message matches ping
		message.reply('h, noremakes,shuckle,deod,uturn');
       }   
    if ((message.content === ('!noremakes'))) { // if that message matches ping
       message.reply('What if no Sinnoh remakes? We :memecat:');
       }   
    if (message.content.toLowerCase() === ('!shuckle')) { // if that message matches ping

       message.reply('Shuckle is the worst pokemon.It\'s horrendously ugly and utterly useless. I hate it. What fucking niche does Shuckle have in BH? It just sits there and does nothing. I hate it. It provokes a deep rooted anger within me whenever I see it. I want to drive on over to the fucking pokemon headquarters and kill it. If this was the pokemon world, I\'d push it off a fucking cliff. Noobs just bring shuckle as if it\'s actually useful. It\'s not. Shuckle deserves to die. He deserves to have his smug little yellow face smashed in with a hammer. Oh wow, it\'s a fucking turtle with atrocious hp and horrendous typing, how fucking useful, I\'ll use it in every BH team I make. NO. STOP IT. It deserves to burn in hell. Why is it so goddamn smug. You\'re a fucking mold, you have no life goals, you will never accomplish anything in life apart from pissing me off. When you die noone will mourn. I hope you die');	   

	}
    if ((message.content.toLowerCase()===('!deod') || message.content.toLowerCase()===('!deoxys-defense'))) { // if that message matches ping

       message.reply('Okay so I was just peacefully walking down the road as I usually do, minding my own business. Then all of a sudden a little disgusting 8-year old disabled kid suddenly logged in to PS on his phone, and started using DeoD in BH! I was furious! But I calmed down and got a hold of myself. Even though using DeoD is a horrible crime, he was only a child and mentally ill at that. But then he found a replay of Simple Smash DeoD sweeping, and he showed his mum! My entire body was shaking!!! How dare he offend me like that and spread pure evil into the world? So I walked over to him, and punched him so hard he was doing the wormdance on the ground. And then I shouted "DEOD BAD CRESSELIA GOOD!!!!" and then I trampled him to death while shitting profusely all over his corpse. Now obviously I expected that everyone would applause me for hindering the spread of evil and for doing gods work, but for some weird reason everyone just started screaming, and after a couple of minutes the police arrived and they arrested me?!?! What is happening??? The trial will begin soon, so I just wanna know, Am I The Asshole?');	   

       }
    if ((message.content.toLowerCase()===('!uturn') || message.content.toLowerCase()===('!u-turn'))) { // if that message matches ping

       message.reply('Day 1035 of Gen 7 BH. All of my teams lose to U-turn. Whenever I load up a team on the BH ladder, I\'m terrified that I\'ll run into a U-turn team. Fearing the worst, I have taken every possible countermeasure. My teams are now built exclusively with 4x bug resists. But still, U-turn is too powerful for me. As soon as I see the Registeel hit my Ho-Oh for 3%, I know the game is over right there and just click X before all my Pokemon inevitably die. Skylake is telling me to adapt but I don\'t know if I can anymore. I tried running Flame Body on my Togekiss but it\'s only a 30% chance that I\'m even able to punish the move. I urge every one of you to get this move out of the metagame immediately, because I don\'t think I can take it any more.');	   

    }
	   
	}
       });

 
 
// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
