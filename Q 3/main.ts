let personName = "shaHZad aLi";

console.log("lowecase:" , personName.toLowerCase());

console.log("Uppercase:" , personName.toUpperCase());

console.log("titlecase:" , personName.split(" ").map( item => item.charAt(0).toUpperCase()
+ item.slice(1).toLowerCase()).join(" "));