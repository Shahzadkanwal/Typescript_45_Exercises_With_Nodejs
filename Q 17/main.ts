let guestList: string[] = ["Shahzad ali","Shayan","Sheraz"];


let absentGuest = "Shahzad ali";

let newGuest  = "Ahmed ali";

guestList[0] = newGuest;


guestList.unshift("hamid");
guestList.splice(2,0,"kashif");
guestList.push("azeem");


console.log("sorry we can't arrenge the biggest dinner table so only two guest are invited");

while(guestList.length > 2 ){
 
let removeguest = guestList.pop();
console.log(removeguest, "\nsorry you are not invited to dinner");

}

for (let i= 0; i< guestList.length; i++) {

    console.log("Dear Mr\n",guestList[i],"\nyou are still invited to dinner \n Thank You ");}

guestList.splice(0,2);
console.log(guestList);