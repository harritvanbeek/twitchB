const https             = require('https');

module.exports = {
    name : "metar",
    execude(client, channel, tags, message){
        const location = message.split(' ')[1];  
        const URI = 'https://metar.vatsim.net/metar.php?id='+location;
       
        
        https.get(URI, (response)=> {
            let data = "";
            response.on('data', (chunk) =>{
                data += chunk;
            });

            response.on('end', () =>{
                client.say(channel, data);                
                client.say(channel, "of kijk op https://metar-taf.com/nl/"+location);                
            });
        });
        
    }   
}