const http = require("http");
const server = http.createServer((req, res) => {
  //to change url to loc.../home
  //req obj
  //console.log(req);
  if (req.url === "/") {
    res.end("Welcome home");
  } else if (req.url === "/about") {
    res.end("about us");
  } else {
    res.end(`
    <h1>Oops!</h1>
    <p>unknown page</p>
    <a href='/'>go home</a>
  `); //only one res() allowed
  }
});
server.listen(5000); //arbitrary val: port no
//code doesn't exit: why
//yk web server listens to reqs
//open browser and search localhost:5000
