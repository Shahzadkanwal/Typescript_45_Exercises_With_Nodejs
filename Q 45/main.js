"use strict";
function creat_car(manufacturer, model, optional) {
    return Object.assign({ manufacturer,
        model }, optional);
}
const my_car = creat_car("Toyota", "Corolla", { Color: "Black", Year: "2024" });
console.log(my_car);
