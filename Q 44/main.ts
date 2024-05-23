//define the function with a rest perameter that accept item arguments representing our sandwich
function makeSandwich(...items: string[]){
    console.log("\nmakig a sandwich with the following items: \n");
    items.forEach(singleitem => console.log(singleitem));
    console.log("\nNow Enjoy Sandwich")
}
// call the fuction three times with three arguments
makeSandwich("chicken","mayo","egg","cheese");

makeSandwich("bread","butter");

makeSandwich("bread","chicken","butter","egg","mayo","onion","tomato")