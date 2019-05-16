// HOW TO RUN TYPESCRIPT (TS) FILES:
// tsc filename.ts
// node filename.js

let a = 5
let b = 5
let c = a + b
console.log(c)

// any type *************************************
let myVariable: any = "This is a string."

// built-in types *******************************
let num: number = 5
let person: string = "Alex"
let isPresent: boolean = true
// void =
// null =
// undefined =

// user-defined types ***************************
// enum

  enum Color {Red, Green, Blue}
  let d: Color = Color.Green

  enum ColorChangeNumStart {Red = 1, Green, Blue}
  let e: ColorChangeNumStart = ColorChangeNumStart.Green

// class

  class Car1 {
    //fields
    model: String
    doors: Number
    isElectric: Boolean

    constructor(model: String, doors: Number, isElectric: Boolean) {
      this.model = model
      this.doors = doors
      this.isElectric = isElectric
    }

    displayMake(): void {
      console.log(`This car is ${this.model}`)
    }
  }

  const Prius = new Car1("Prius", 4, true)
  Prius.displayMake()

// interface

  const Car2 = {
    model: "Prius", //String
    make: "Toyota", //String
    display: () => { console.log('Hi') } //void
  }

  // ===>

  interface ICar {
    model: String,
    make: String,
    display(): void
  }

  const ICar2: ICar = {
    model: "Prius",
    make: "Toyota",
    display: () => { console.log('heyy') }
  }

  ICar2.display()

// array

  let list: number[] = [1, 2, 3]
  let list2: Array<number> = [1, 2, 3]

// tuple

  let x: [string, number]
  x = ['hello', 10]
  // x = [10, 'hello'] // ERROR

  console.log(x[0].substr(1))
  // console.log(x[1].substr(1)) //ERROR
