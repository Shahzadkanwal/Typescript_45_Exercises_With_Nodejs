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
//define the array of magician names
let magician_names = ["Abid", "Kashif", "usama"];
//making a copy of original array through .slice() function
let copy_magician_names = magician_names.slice();
//modified the copy of array include "The Great" their names
let copy_great_magicians = make_great(copy_magician_names);
//show both arrays original and copy
//original
console.log("original array\n");
show_magicians(magician_names);
//copy
console.log("\ncopy array\n");
show_magicians(copy_great_magicians);
