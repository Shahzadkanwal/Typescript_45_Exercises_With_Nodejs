let age = 60;
//if the person is less then 2 years old,
//print the message that the person is a baby.

if (age < 2){
    console.log("the person is a baby.")
}
//if the person at least 2 years old but less then 4,
//print the message that the person is a toddler

else if(age >=2 && age < 4){
    console.log("the person is a toddler.")
}
//if the person is less then 4 yesrs old but less then 13,
//print the message that person is a kid

else if(age >=4 && age < 13){
    console.log("the person is a kid.")
}

//if the person at least 13 years old less then 20,
//print the message person is a teenager


else if(age >=13 && age < 20){
    console.log("the person is a teenager.")
}
//if the person at least 20 years old less then 65,
//print the message person is a adult 

else if(age >=20 && age < 65){
    console.log("the person is a adult.")
}
//if the person age is 65 or elder,
//print the message that the person is elder

else if(age >=65 && age > 65){
    console.log("the person is a elder.")
}