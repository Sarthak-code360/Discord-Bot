//Required discord.js package
const Discord = require("discord.js");

//Create a new client using the new keyword 
const client = new Discord.Client();

const {
    token
} = require("./token.json");
//Create arrey for clean code
const stringArray = ["ready","reconnecting","disconnect","message",".hello",".help",".wah",".nice",".bye",".abe",".baap",".lol",".gaali",".shh",".bkl",".ohh",".who",".ugh",".thanks",".kaise",".swag"];

//Display a message when the bot comes online
client.on(stringArray[0], () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

// reconnecting event
client.on(stringArray[1], () => {
    console.log(`This bot is reconnecting: ${client.user.tag}`);
});

//disconnect event  
client.on(stringArray[2], () => {
    console.log(`This bot is now disconnected: ${client.user.tag}`);
});

//Check for new messages              
client.on(stringArray[3], msg => {
    const toLower = msg.content.toLowerCase();

   //send back a reply when the specific command has been written by a user.
   //console.log(msg.content);
   if (toLower === stringArray[4]){
       msg.reply("Hey there, What's uppp!!!https://media.giphy.com/media/Cmr1OMJ2FN0B2/giphy.gif");
   }

   // .help command
   else if (toLower === stringArray[5]){
       msg.reply("The bot has following commands ->\n.hello\n.help");
   }

   else if (toLower === stringArray[6]){
       msg.reply("https://gph.is/g/ZY0x0bA");
   }

   else if (toLower === stringArray[7]){
    msg.reply("http://gph.is/1W4D3Zo");
    }

    else if (toLower === stringArray[8]){
        msg.reply("https://media.giphy.com/media/fWgQH01z4rjwrZckyM/giphy.gif");
    }

    else if (toLower === stringArray[9]){
        msg.reply("Iss bsdwale ka kaya karu mai.....\najib chutiya hai\nmaar be nahi sakta pyar jo karta hai mujhse");
    }

    else if (toLower === stringArray[10]){
        msg.reply("Ha malum hai chal apne baap ko mat sikha");
    }

    else if (toLower === stringArray[11]){
        msg.reply("https://gph.is/g/EGq6znZ");
    }

    else if (toLower === stringArray[12]){
        msg.reply("Gaali konse khana pasand karoge\nDiscuss kar le ??");
    }

    else if (toLower === stringArray[13]){
        msg.reply("Chop Bokachoda");
    }

    else if (toLower === stringArray[14]){
        msg.reply("Tu jara sa bhen ka loda hai kaya ?");
    }

    else if (toLower === stringArray[15]){
        msg.reply("http://gph.is/16tAKUv");
    }

    else if (toLower === stringArray[16]){
        msg.reply("https://gph.is/g/Zr0jDOw");
    }

    else if (toLower === stringArray[17]){
        msg.reply("https://media.giphy.com/media/chVRlpAL9RTPvS1b46/giphy.gif");
    }

    else if (toLower === stringArray[18]){
        msg.reply("https://media.giphy.com/media/d68IdpvmAHohx5NMEV/giphy.gif");
    }

    else if (toLower === stringArray[19]){
        msg.reply("https://media.giphy.com/media/8UHPtWoPXwf6EZN9iC/giphy.gif");
    }

    else if (toLower === stringArray[20]){
        msg.reply("https://media.giphy.com/media/jqU7hkTdqgEcP6C3h1/giphy.gif");
    }
});

//log in the bot using your token (password)
client.login(token);