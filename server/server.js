const http = require('http')
http.createServer((req, res) => {

  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end('<html><body>res: <span id="res"></span></body><script>window.fetch("/hello").then((res) => res.json()).then((obj) => document.getElementById("res").textContent = obj.result)</script></html>')
  }

  if (req.url === '/hello') {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ result: 'hello' }))
  }

}).listen(3000)
