"use strict";
let userNames = ["husnain", "hamza", "usman", "admin", "raza"];
userNames = [];
if (userNames.length === 0) {
    console.log("your array is empty we need to find some users!");
}
else {
    userNames.forEach(oneUser => {
        if (oneUser === "Admin") {
            console.log(`Hello ${oneUser},would you like to see a status repot?`);
        }
        else {
            console.log(`Hello ${oneUser}, thank you for logging again.`);
        }
    });
}
