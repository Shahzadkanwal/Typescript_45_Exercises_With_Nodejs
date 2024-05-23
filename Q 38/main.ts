//describe a function
function describe_city (city : string ,country : string = "Pakistan"){
    console.log(`${city} is in ${country}`);
}

//calling the functions
describe_city("karachi");

describe_city("lahore");

describe_city("peshawar");

describe_city("berlin","Germany");