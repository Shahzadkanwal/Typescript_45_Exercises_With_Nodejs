type car = {
    manufacturer : string
    model : string
    [key : string] : any;
}

function creat_car(manufacturer :string,model :string,optional : Record<string,any>):car{
    return{
        manufacturer,
        model,
        ...optional
    }
}

const my_car : car = creat_car("Toyota","Corolla",{Color : "Black",Year : "2024"});
console.log(my_car);