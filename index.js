//http module 
const http = require('http');
const PORT = 3000; // variable for the port 

const express = require('express');
const app = express();
// app is result of calling express 

// call createServer 
const server = http.createServer(app);

//homepage
app.get('/', (req, res) => {
    console.log(`Got a request!`);
    res.send(`Hello Express!`);
});

app.get('/albums', (req, res) => {
    console.log(`Got a request!`);
    res.send(`A List of Albums!!`);
});

// register route handler 
// :albumID is a *placeholder
app.get('/albums/:albumID', (req, res) => {
    // express put your 
    res.send(`You want: ${req.params.albumID}`);
});

// /albums/42/songs
app.get('/albums/:albumID/songs', (req, res) => {
    // send back "the songs for album 42"
    res.send(`The songs from ${req.params.albumID}`);
});


// /albums/42/songs/3
app.get('/albums/:albumID/songs/:songID', (req, res) => {
    // send back "song 3 on album 42 "
    res.send(`Song ${req.params.songID} on album ${req.params.albumID} `)
});

// add a catch-all




// have server listen 
// two variables, second is a function 
server.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});