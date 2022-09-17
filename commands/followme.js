    const http              =   require('http');

module.exports = {
    name : "followme",
    execude(client, channel, tags, message){
        client.say(channel, `Je kan me live volgen via : https://www.boann.eu/flights`);
        /*var options = {
          host: 'www.boann.eu',
          path: '/libraries/callback/callback_msfs.php?action=get_flights'         
        };

        callback = function(response) {
          var str = '';

          //another chunk of data has been received, so append it to `str`
          response.on('data', function (chunk) {
            str += chunk;
          });

          //the whole response has been received, so we just print it out here
          response.on('end', function () {
            console.log( JSON.parse(str) );
          });
        }

        http.request(options, callback).end();*/


    }   
}