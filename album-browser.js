//http module 
const http = require('http');
const PORT = 3000; // variable for the port 

const express = require('express');
const albums = require('/albums.js');
const app = express();
// app is result of calling express 
// call createServer 
const server = http.createServer(app);


app.use(express.static('public'));



//homepage
app.get('/', (req, res) => {
    console.log(`Got a request!`);
    res.send(`Hello Express!`);
});

app.get('/albums', (req, res) => {
    const albumsList = [];
    for (let album of albums.getAlbums ()) {
        console.log(album.title);

        res.write(`
        <p>
            <a href="/albums/${album.ID}">
            ${album.title}
            </a>
        </p>
        `)
    }
    res.end();
});

// register route handler 
// :albumID is a *placeholder
app.get('/albums/:albumID', (req, res) => {
    // express put your 
    // res.send(`You want: ${req.params.albumID}`);
    const songs = albums.getSongsForAlbum(req.params.albumID);
    res.send(songs);
});

// /albums/42/songs
app.get('/albums/:albumID/songs', (req, res) => {
    // send back "the songs for album 42"
    // res.send(`The songs from ${req.params.albumID}`);
    const songs = albums.getSongsForAlbum(req.params.albumID);
    res.send(songs);
});


// /albums/42/songs/3
app.get('/albums/:albumID/songs/:songID(\\d+)', (req, res) => {
    // send back "song 3 on album 42 "
     // res.send(`Song ${req.params.songID} on album ${req.params.albumID} `)
    const songs = albums.getSongsForAlbum(req.params.albumID);
    for (let song of songs) {
        // the values in req.params will *always* 
        // be strings 
        // intentionally using "loose" comparison 
        // strict comparison => ===
        if (song.id == req.params.songID) {
            res.write(song.title);
        }
    }
    res.end();
});

// add a catch-all
// - order matters, if this route handler is run by express, 
// that means nothing above matched, goes at end of file 
// - '*' will match anything
// - res had methods.....
app.get('*') , (req, res) => {
    console.log(`Redirecting, because no page here!`)
    res.redirect('/');
}




// have server listen 
// two variables, second is a function 
server.listen(PORT, () => {
    console.log(`listening on ${PORT}`);
});