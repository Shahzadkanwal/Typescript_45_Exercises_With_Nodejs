let guestList: string[] = ["Shahzad ali","Shayan","Sheraz"];


let absentGuest = "Shahzad ali";

let newGuest  = "Ahmed ali";

guestList[0] = newGuest;

for (let i= 0; i< guestList.length; i++) {

    console.log("Dear Mr\n",guestList[i],"\nit is our pleasure to invite you to dinner \n Thank You ");}

console.log(absentGuest , "is not coming to the dinner");