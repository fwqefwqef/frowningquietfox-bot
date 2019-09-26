const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => { // know if our bot is online

    console.log('I am ready!');

});

 

client.on('message', message => { // When the message a message is executed

    if (message.content === 'f' || message.content === 'F') { // if that message matches ping

       message.reply('F? F what? The letter before G? The letter after E? Did you know that in Fu the F  stands for “fuck?” So your reply is “fuck?” or F as in Flourine? Do you need some Special F for breakfast? F as in I can fuck you? Can I fuck you and feed you to hungry falcons? Falcons have an f in it. "F”? Are you fucking kidding me? I spent a decent portion of my life writing all of that and your response to me is "F”?Are you so mentally handicapped that the only letter you can comprehend is "F” - or are you just some fucking asshole who thinks that with such a short response, he can make a statement about how meaningless what was written was? Well, I\'ll have you know that what I wrote was NOT meaningless, in fact, I even had my written work proof-read by several professors of literature. Don\'t believe me? I doubt you would, and your response to this will probably be "F” once again. Do I give a fuck? No, does it look like I give even the slightest fuck about a single letter? I bet you took the time to type that one letter too, I bet you sat there and chuckled to yourself for 20 hearty seconds before pressing "send". You\'re so fucking pathetic. I\'m honestly considering directing you to a psychiatrist, but I\'m simply far too nice to do something like that. You, however, will go out of your way to make a fool out of someone by responding to a well-thought-out, intelligent, or humorous statement that probably took longer to write than you can last in bed with a chimpanzee. What do I have to say to you? Absolutely nothing. I couldn\'t be bothered to respond to such a worthless attempt at a response. Do you want "F” on your gravestone? Do you want people to remember you as the asshat who one day decided to respond to someone with a single letter? "Hey, look, everybody! It\'s that "f” guy!" That\'s who you are. You\'re going to be known as the "F” guy. How does it feel? Do you feel happy? Quite honestly, I don\'t care, which is why I\'m not even going to respond to you.');
		
		var delayInMilliseconds = 100; //0.1 second
		setTimeout(function() {
			message.reply('Goodbye, and good luck with your future as that guy who said "F”. Alright listen up motherfucker, and get your comfy seat because we\'re gonna be here a while. Do you really think you can just get away with "f" as a message? What if someone did that to you, huh? Do you think you would like it? Making an entire paragraph to get a fuckin\' one letter response of the sixth letter in the alphabet, you think that\'s fuckin\' funny, jackass? Do you want your crush to respond back with "f” after you spill your feelings out like this? (Take me back, Emma.) Huh? What if I did it to you? F. Did you fuckin\' like that? What, did you just jizz in your pants because someone disregarded your entire effort of writing this ENTIRE paragraph FROM HAND in about fifteen minutes? That just makes me feel fucking rejected just like my ex. (Take me back, Roxanne.) f. What\'re you, fuckin\' gay? Can I have a response that actually MEANS something instead of just shitfacing our "conversation" with the spam of "f?”. Now occasionally with questions or something it\'s reasonable, but doing it to any fucking response they say. "We\'re having a nuclear crisis, you have fifteen minutes to evacuate." You\'re the type of person that would fuckin\' say "f” to that, you limp dick hypocrite. You think you can get away with this, right? You think it\'s SOOOOOO funny to do this shit, but I can guarantee that you\'ll be taken out back and shot soon. You\'re fucking dead, "f”ucker.');
		}, delayInMilliseconds);	   

       }
	   
    if (message.content.includes('69')) { // if that message matches ping
		message.reply('HAHAHAHA fucking hilarious! Get it? It\'s the sex number, therefore it\'s funny! Except it\'s not fucking funny, how much of a braindead person do you have to be to find the number sixty-nine funny? How old are you people? Get a fucking grip on reality you mongoloid bastards. This is why i fucking despise meme culture sometimes, it promotes braindead humor for 3 year olds. "Nice nice nice" shut the fuck up you prick, repeating a word is not funny either. Holy fuck i\'d actually punch someone in the face IRL for acting like such a retard.');
       }
    if (message.content.toLowerCase() === 'oof' || message.content.toLowerCase() === 'oof 100') { // if that message matches ping

       message.reply('Shut the fuck up you absolute lobotomite. You think adding your poorly edited Skyrim makes this funny? What a joke. Get a grip on reality, stop saying "oof" during a serious conversation just because your two braincells cant ever send signals to eachother to form a response. Honestly pathetic. Oh guys look at me Im so funny OOF 100! Its so funny and quirky because its a roblox noise right guys? Hahah skyrim reference!! Shut the fuck up you absolute fucking dusty toilet. I would flush you down the drain in an instant.');	   

       }
    if (message.content.toLowerCase() === 'fortnite bad') { // if that message matches ping

       message.reply('DUHHHHH FORTNITE BAD DUHHHH BRORTNITE BRAD!!1!1 IS THAT ALL YOU DEPRESSED FUCKS CAN SAY? FORTNITE FORTNITE EMOJI INSTA BAD EMOJI EMOJI BAD BAD!!1!1 I FEEL LIKE IM IN A FUCKING ASYLUM FULL OF DEMENTIA RIDDEN OLD PEOPLE WHO CAN DO NOTHING BUT REPEAT THE SAME FUCKING WORDS ON LOOP LIKE A BROKEN FUCKING RECORD');	   

       }
    if (message.content.toLowerCase().includes('gun')) { // if that message matches ping

       message.reply('I\'m so proud of my daughter for stopping a bank robbery today. The robbers went in and held their AK-47s up, telling everyone to put their hands in the air. My daughter (only 3 years old!) stood her ground, faced them directly in the eye, and simply said "If you\'re being mugged, just say no. Your robbers cannot legally take any of your possessions." Almost instantaneously, the robbers collapsed to the floor, suffering from a bipolar seizure. Everyone clapped and she was given position as senator of the state of Florida, as well as invited by the Democratic National Convention to run for President in 2020. What an unbelievable event! I\'m so blessed by God to have such a wonderful child.');	   

       }
});

 
 
// THIS  MUST  BE  THIS  WAY

client.login(process.env.BOT_TOKEN);//where BOT_TOKEN is the token of our bot
