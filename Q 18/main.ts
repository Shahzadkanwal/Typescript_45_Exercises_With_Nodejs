//. store the location in a array,make sure the array is not in alphabetical order

let places : string[] = ["islamabad","peshawar","multan","karachi","lahore"];

//. print your array in its original order
console.log("original order:", places);

//. print your array in alphabetical order without modifying the actual list
console.log("Alphabatical order:",[...places].sort());

//. show that your array is still in its original order by printing it
console.log("original order:", places);

//print your array in reverse Alphabatical order without changing the order of original list
console.log("Reverse Alphabatical order:",[...places].sort().reverse());

//show that your array is still in its original order by printing it again
console.log("original order:", places);

//. reverse the order of your list,print the array to show that its order has changed
console.log("Reverse order:", places.reverse());

//. reverse the order of your list again print the list to show its back to its orginal order
console.log("original order:", places.reverse());

//sort your array so its stored to alphabatical order print the array to show that its order
console.log("Alphabatical order:",places.sort());

//. sort to change your array so its stored in reverse alphabatical order.print the list 
//to show that its order has changed
console.log("Reverse Alphabatical order:",places.sort().reverse());