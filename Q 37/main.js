"use strict";
//making a function
function make_shirt(size = "large", printMessage = "i love typescript") {
    console.log(`creating a ${size} shirt with the ${printMessage} prints on shirt`);
}
//calling a function by defualt values
make_shirt();
//calling a funtion now with medium size with defualt message
make_shirt("medium");
//calling a function now with small size and also diffrent message 
make_shirt("small", "i love javascript");
