var request = require('request-json')
var client = request.newClient('https://api.bitfinex.com/v1/')
client.get('pubticker/btcusd', function(err, res, body) {
    return console.log("$" + body.last_price);
});
