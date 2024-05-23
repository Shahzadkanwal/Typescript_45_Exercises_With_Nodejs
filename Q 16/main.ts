let guestList: string[] = ["Shahzad ali","Shayan","Sheraz"];


let absentGuest = "Shahzad ali";

let newGuest  = "Ahmed ali";

guestList[0] = newGuest;

console.log(" Good news , we found a bigger dinner table so we invite 3 more guest");

guestList.unshift("hamid");
guestList.splice(2,0,"kashif");
guestList.push("azeem");

for (let i= 0; i< guestList.length; i++) {

    console.log("Dear Mr\n",guestList[i],"\nit is our pleasure to invite you to dinner \n Thank You ");}