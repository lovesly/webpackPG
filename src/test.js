// setup node --inspect, attach in launch.json
// attach the debugging process to another port, so that you can debug it with chrome
// 详情，参考 狼书卷1
const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('Hello Node.js\n');
}).listen(3000, "127.0.0.1");

console.log('Server running at http://127.0.0.1:3000');