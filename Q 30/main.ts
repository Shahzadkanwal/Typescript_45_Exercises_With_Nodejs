
let userNames = ["husnain","hamza","usman","Admin","raza"];

userNames.forEach(oneUser =>{
    if(oneUser === "Admin"){
    console.log(`Hello ${oneUser},would you like to see a status repot?`);
    }else{
        console.log(`Hello ${oneUser}, thank you for logging again.`);
    }
})