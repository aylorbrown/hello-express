// albums model 

const albumsData = require('albumsData.json');

function getAlbums() {
    return data.albums;
}

function getSongsForAlbum(albumID) {
    // return data.albums.find(album => album.ID == albumID).songs;
    const theAlbum = data.albums.find((anAlbum) => {
        // is the album i'm currently visiting, the one we want?
        // if(anAlbum.ID == albumID) {
             // i need to return true or false 
        //     return true;
        // } else {
        //     return false;
        // }
        return anAlbum.id == albumID;
    });
    return theAlbum.songs;
}

module.exports = {
    getAlbums, 
    getSongsForALbum
};
