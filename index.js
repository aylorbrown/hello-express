//http module 
const http = require('http');
const PORT = 3000; // variable for the port 

const express = require('express');
const app = express();
// app is result of calling express 

// call createServer 
const server = http.createServer(app);

//homepage?
app.get('/', (req, res) => {
    console.log(`Got a request!`);
    res.send(`Hello Express!`);
});



// have server listen 
// two variables, second is a function 
server.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});