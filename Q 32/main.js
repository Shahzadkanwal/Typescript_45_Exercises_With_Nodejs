"use strict";
//array of current users
let current_users = ["husnain", "hamza", "usman", "adil", "raza"];
//array of new users
let new_users = ["hamna", "usman", "laiba", "Raza", "rohan"];
//
new_users.forEach(new_one_user => {
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase());
    if (our_condition) {
        console.log(`sorry ${new_one_user} is already taken`);
    }
    else {
        console.log(`this username ${new_one_user} is availabla`);
    }
});
