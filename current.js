
const request = require('request');

request('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=3',
    function (err, res, body) {
   
    let currArr = JSON.parse(body);
   
    
    console.log(currArr);
}
    )
