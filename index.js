

const http = require('http');
const port = 3000;
const fs = require('fs');
http.createServer(function(req, res){
    if(req.url === '/') {
        res.write('hello world');
        res.end();
    } else if (req.url === '/about') {
        
        res.end();
        console.log('URL страницы: ' + req.url);
    
    }else if (req.url === '/contact') {
        
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
        
    }else {
        res.write('Page not found');
        res.end();
    }
    
}).listen(port, function(){
    console.log('Server at http://localhost:3000');
});