//https://www.youtube.com/watch?v=7uSjKbAUHXg


require('dotenv').config();
const fs                =   require('fs');
const http              =   require('http');
const tmi               =   require('tmi.js');

//require                 =   require("esm")(module/*, options */)


const client = new tmi.Client({
    options: { debug: true },
    identity: {
        username: process.env.TWITCH_USERNAME,
        password: process.env.SECRET_KEY //https://twitchapps.com/tmi/
    },
    channels: [ process.env.TWITCH_USERNAME ]
});




client.connect().catch(console.error);
client.on('message', (channel, tags, message, self) => {
    // !discord
    if(self) return;
    
    //boodstrap
    const getdata               = message.split(process.env.PRIFIX)[1];
    const data                  = getdata.split(' ')[0];
    
    console.log(data);


    if(!data) return;
    const commandFiles      = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));    
    for(const file of commandFiles) {
        if(`${data}.js` === file){
            const command           = require(`./commands/${file}`);  
            command.execude(client, channel, tags, message);              
        }
    }


});