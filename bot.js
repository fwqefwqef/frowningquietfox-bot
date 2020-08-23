const Discord = require('discord.js');

const client = new Discord.Client({
  presence: {
    activity: {
      name: '!help',
      type: 'WATCHING'
    }
  }
});

client.on('ready', () => { // know if our bot is online
  console.log('logged in')
});

client.on('message', message => { // When the message a message is executed
    /*if (message.content === 'f' || message.content === 'F') { // if that message matches ping

       message.channel.send('F? F what? The letter before G? The letter after E? Did you know that in Fu the F  stands for “fuck?” So your reply is “fuck?” or F as in Flourine? Do you need some Special F for breakfast? F as in I can fuck you? Can I fuck you and feed you to hungry falcons? Falcons have an f in it. "F”? Are you fucking kidding me? I spent a decent portion of my life writing all of that and your response to me is "F”?Are you so mentally handicapped that the only letter you can comprehend is "F” - or are you just some fucking asshole who thinks that with such a short response, he can make a statement about how meaningless what was written was? Well, I\'ll have you know that what I wrote was NOT meaningless, in fact, I even had my written work proof-read by several professors of literature. Don\'t believe me? I doubt you would, and your response to this will probably be "F” once again. Do I give a fuck? No, does it look like I give even the slightest fuck about a single letter? I bet you took the time to type that one letter too, I bet you sat there and chuckled to yourself for 20 hearty seconds before pressing "send". You\'re so fucking pathetic. I\'m honestly considering directing you to a psychiatrist, but I\'m simply far too nice to do something like that. You, however, will go out of your way to make a fool out of someone by responding to a well-thought-out, intelligent, or humorous statement that probably took longer to write than you can last in bed with a chimpanzee. What do I have to say to you? Absolutely nothing. I couldn\'t be bothered to respond to such a worthless attempt at a response. Do you want "F” on your gravestone? Do you want people to remember you as the asshat who one day decided to respond to someone with a single letter? "Hey, look, everybody! It\'s that "f” guy!" That\'s who you are. You\'re going to be known as the "F” guy. How does it feel? Do you feel happy? Quite honestly, I don\'t care, which is why I\'m not even going to respond to you.');
		
       }*/
	if (!message.author.bot) {		

	if (message.content.toLowerCase() === ('!help')) { // if that message matches ping
		message.channel.send('```!shuckle,uturn,jojo,stall,dimrahpumpkin```');
       }   
    else if (message.content.toLowerCase() === ('!shuckle')) { // if that message matches ping

       message.channel.send('Shuckle is the worst pokemon.It\'s horrendously ugly and utterly useless. I hate it. What fucking niche does Shuckle have in BH? It just sits there and does nothing. I hate it. It provokes a deep rooted anger within me whenever I see it. I want to drive on over to the fucking pokemon headquarters and kill it. If this was the pokemon world, I\'d push it off a fucking cliff. Noobs just bring shuckle as if it\'s actually useful. It\'s not. Shuckle deserves to die. He deserves to have his smug little yellow face smashed in with a hammer. Oh wow, it\'s a fucking turtle with atrocious hp and horrendous typing, how fucking useful, I\'ll use it in every BH team I make. NO. STOP IT. It deserves to burn in hell. Why is it so goddamn smug. You\'re a fucking mold, you have no life goals, you will never accomplish anything in life apart from pissing me off. When you die noone will mourn. I hope you die');	   

	}
    else if (message.content.toLowerCase()===('!uturn') || message.content.toLowerCase()===('!u-turn')) { // if that message matches ping

       message.channel.send('Day 1035 of Gen 7 BH. All of my teams lose to U-turn. Whenever I load up a team on the BH ladder, I\'m terrified that I\'ll run into a U-turn team. Fearing the worst, I have taken every possible countermeasure. My teams are now built exclusively with 4x bug resists. But still, U-turn is too powerful for me. As soon as I see the Registeel hit my Ho-Oh for 3%, I know the game is over right there and just click X before all my Pokemon inevitably die. Skylake is telling me to adapt but I don\'t know if I can anymore. I tried running Flame Body on my Togekiss but it\'s only a 30% chance that I\'m even able to punish the move. I urge every one of you to get this move out of the metagame immediately, because I don\'t think I can take it any more.');	   

    }
    else if (message.content.toLowerCase()===('!jojo')) { // if that message matches ping

       message.channel.send('https://cdn.discordapp.com/attachments/570211056446734349/689243285633499224/ETPcXXCX0AAne8h.png');
    }
    else if (message.content.toLowerCase()===('!stall')) { // if that message matches ping

       message.channel.send('Alright, so I booted up PS today and saw this format called [Gen 8] Balanced Hackmons, so I whipped up a team really quick to hopefully farm some low Elo players before getting caught in 200 turn stall games (every high level BH player exclusively uses stall) when I came upon an issue. WHERE IS ZARUDE? This Pokemon got officially released so it can\'t get us in any trouble with Nintendo, and its design is super cool so I want to use it as a Simple Shift Gear + Power Trip sweeper. Now, I know all the keyboard warriors in the comments are going to be like \"lol loool rofl lmao it\'s an unreleased pokemon, you can\'t use it yet\" before going back to their 421 turn tournament games like the low IQ cretins they are. Newsflash, idiots, this format is called Balanced Hackmons. HACKMONS. IT SAYS IN THE NAME. This means that any Pokemon that can be obtained by hacking is allowed. JUST HACK INTO GAME FREAK HEADQUARTERS AND GET IT THERE. SERIOUSLY GUYS IT\'S NOT THAT COMPLICATED. This just makes me so mad, it ruins the integrity of the format and rewards the cheap stall users that just spam Teleport and Imposter, but the Smogon higher-ups do nothing about it. Anyway, I would appreciate it if the freethinkers that agree with this message dropped a \"Like\", \"Love\", or \"Haha\" Smogon reaction on this post to express solidarity.');
    }
    else if (message.content.toLowerCase()===('!dimrahpumpkin')) { // if that message matches ping

       message.channel.send('What\’s up gamers! So today I decided to hop on the [Gen 8] Balanced Hackmons ladder with an epic simple + no retreat spam team (fuck the smogon stall tryhards for banning shell smash) and I met this weird boomer avatar guy who was named rrrrgg or something and he had a stupid meta darm team lol, those tryhard fuckers are always fucking carried by darm and they cant bother to come up with an original team like me. Anyways I\’m 3 mons down and I finally got a kill with zekrom and he sent out a Gourgeist with poison heal and I was like \"ok noob lol, what are you gonna do?\" I clicked bolt beak cuz its my strongest move but he only took like 60% and he stole all of my boosts with broken spectral thief!!! Well whatever, i just kept clicking bolt beak expecting to finish him off easily, but he kept spamming spiky shield like a braindead stall fucker. he court changed my precious sticky web I set up with my truant ninjask and set up his own rocks while easily stalling me out wtf??!!! How is this balanced?? Now I was kinda angry so I pulled out my original no retreat Orbeetle (I named him Big Chungus lol) expecting to stored power sweep his entire team, and as I set up, HE USED FUCKING SPECTRAL THIEF AGAIN AND STOLE ALL MY BOOSTS AND I COULDNT DO ANYTHING ABOUT IT AND ARGHGUHG!!! I LOST TO THIS SAME FUCKING BRAINDEAD BOOMER 5 TIMES IN A ROW LIKE WTF I CANT DO ANYTHING AGAINST THAT GODDAMN PUMPKIN!!! I EVEN TRIED X-SCISSORING HIM TO DEATH BUT HE WOULD JUST KEEP CLICKING SPIKY SHIELD LIKE A WIMPY VIRGIN!!!1 I urge everyone on this forum to get Gourgeist out of the meta asap because it is uncompetitive and utterly broken. Thanks for your time.');
    }
    else if (message.content.toLowerCase()===('!smash')) { // if that message matches ping

       message.channel.send('I\’ve played mons for years and the whole time my favorite move has been smash. There have been dark times in my life, but being able to go play pokemans with my 6 shell smash mons has always got me through it. I am so happy for the chance to defend this move, think about it, there is no way that it is broken. This one time I used unaware spiritomb against a guy with smash mewtwo and his photon geyser was totally useless and I won that battle. I\’m pretty sure this is ironclad evidence that smash can in fact be walled and people simply aren\’t creative enough. People might get mad at me when I say they aren\’t creative, but it\’s true! I see uturn all the time which is clearly much more broken than allowing my 6 mons to Kio-Ken x2 smash on pretty much any turn they want. What u guys don’t see is that smash allows things to be balanced. Like Thanos said \“perfectly balanced, as all things should be.\” If we ban smash then we will have to name the tier unbalanced hackmons or stall mons, because smash is the only single offensive move in the game and getting rid of it will get rid of any prospect of a skillful offensive team. In conclusion, smash is pretty much the least bannable move and I\’m shocked you would even bring that up.');
	   
    }
    else if (message.content.toLowerCase()===('!dgz')) { // if that message matches ping
	   message.channel.send('\"DGZ should obviously be gone,\" typed the Smogon user in a sweat, struggling to hit every key properly due to the size of his fingers, the dust on his rarely-cleaned keyboard flying into a miniature gust around his line of vision. \"Don\'t no ban or I will sad react.\" As the likes began rolling in, the Smogon user scratches the itchy, scraggly hairs growing on his neck, smiling to himself as he realizes how he has saved the remainder of the Smogon population from being terrorized by the funny snowman on the internet. His pride swells as does his stomach from the Cheetos he has been consuming for the past several years. A true hero, covered in the orange dust of the battles he has fought behind his keyboard, he pats himself on the back for a job well done, his good deed of the day, and clicks on another link. The smell of sweaty socks in the air passes through his nostrils as he leaves a comment on another thread, repeating, possibly with slightly different wording, what everyone else in the thread has already said. As he sees the likes rolling into this new comment, and a cockroach crawls across the bed which he has not covered for a month, he prides himself in making a contribution of which other Smogon users approve in the form of reaction scores. And so another day passes as the Smogon user wheezes and climbs into his bed, happy to be a productive member of one of the finest, most intelligent online communities that has ever thrived in the history of the internet.');
    }
	
	}
       });

 
 
// THIS  MUST  BE  THIS  WAY

client.login("process.env.BOT_TOKEN");//where BOT_TOKEN is the token of our bot
