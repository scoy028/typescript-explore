// HOW TO RUN TYPESCRIPT (TS) FILES:
// tsc filename.ts
// node filename.js
var a = 5;
var b = 5;
var c = a + b;
console.log(c);
// any type *************************************
var myVariable = "This is a string.";
// built-in types *******************************
var num = 5;
var person = "Alex";
var isPresent = true;
// void =
// null =
// undefined =
// user-defined types ***************************
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var d = Color.Green;
var ColorChangeNumStart;
(function (ColorChangeNumStart) {
    ColorChangeNumStart[ColorChangeNumStart["Red"] = 1] = "Red";
    ColorChangeNumStart[ColorChangeNumStart["Green"] = 2] = "Green";
    ColorChangeNumStart[ColorChangeNumStart["Blue"] = 3] = "Blue";
})(ColorChangeNumStart || (ColorChangeNumStart = {}));
var e = ColorChangeNumStart.Green;
// class
var Car1 = /** @class */ (function () {
    function Car1(model, doors, isElectric) {
        this.model = model;
        this.doors = doors;
        this.isElectric = isElectric;
    }
    Car1.prototype.displayMake = function () {
        console.log("This car is " + this.model);
    };
    return Car1;
}());
var Prius = new Car1("Prius", 4, true);
Prius.displayMake();
// interface
var Car2 = {
    model: "Prius",
    make: "Toyota",
    display: function () { console.log('Hi'); } //void
};
var ICar2 = {
    model: "Prius",
    make: "Toyota",
    display: function () { console.log('heyy'); }
};
ICar2.display();
// array
var list = [1, 2, 3];
var list2 = [1, 2, 3];
// tuple
var x;
x = ['hello', 10];
// x = [10, 'hello'] // ERROR
console.log(x[0].substr(1));
// console.log(x[1].substr(1)) //ERROR
