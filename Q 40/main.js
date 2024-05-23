"use strict";
//define the make_album function
function make_album(artist_name, album_title, tracks) {
    let album = {
        artist: artist_name,
        title: album_title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
//calling three functions and creating 3 veriable with diffrent values
let album1 = make_album("kanwal", "album title 1");
let album2 = make_album("shahzad", "album title 2");
//calling a make_album function with third perameters
let album3 = make_album("shayan", "album title 2", 10);
//printing the variables
console.log(album1);
console.log(album2);
console.log(album3);
