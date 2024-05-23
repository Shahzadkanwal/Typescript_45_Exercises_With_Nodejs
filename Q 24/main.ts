
//test for equality and inequality of string
console.log("equality test",("shahzad" as string)==="shahzad");
console.log("inequality test",("shahzad" as string)==="shayan");

//test using lowercase function
console.log("LowerCase","SHAHZAD".toLowerCase()==="shahzad");

//numerical tests

console.log("Equality test:",10 === 10);//equal to
console.log("Ineqality test",(10 as number) !== 9);//inequal to
console.log("greater then tests",20 > 10);//greater then
console.log("less then tests",10 < 20);//less then
console.log("greater then and equals to test",10 >= 10);
console.log("less then equals to test",10 <= 20);

//tests using "and" and "or" operator

console.log("and operator test", true && true);

console.log("or operator test", true || true);

//test weather an iten is in a array

const car = [1,2,3];
console.log("test number" ,car.includes(1));

//test weather an iten is not in a array


const car1 = [1,2,3];
console.log("test number" ,!car.includes(5));
