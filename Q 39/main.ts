//creating a function with perameters which return values in string

function city_country(city: string ,country : string) : string{
 return`${city},${country}`;
}

//calling function and prind the return value

console.log(city_country("Karachi", "Pakistan"));

console.log(city_country("Tokyo", "Japan"));

console.log(city_country("Berlin", "Germany"));