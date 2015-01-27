require('request-json').newClient('https://api.bitfinex.com/v1/')
  .get('pubticker/btcusd', function(err, res, body) {
    return console.log("$" + body.last_price);
  });
