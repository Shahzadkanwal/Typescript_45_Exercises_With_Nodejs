"use strict";
//define a function to show megician names
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
;
//function to make magician grat through .map
function make_great(magicians) {
    return magicians.map(name => `The Great ${name}`);
}
//define the array of megician names
let magicians_names = ["Abid", "Kashif", "usama"];
//call make great function to modify magician names
let great_magician = make_great(magicians_names);
show_magicians(great_magician);
