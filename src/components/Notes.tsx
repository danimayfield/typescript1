//  ****   NOTES    ****
// ! Defining an object:
// type Person = {
//   name: string;
  // ! Use the | operator to define something that might have more than one type:
  // ! Use the ? operator on the variable to define a variable that is optional
//   age?: number | string;
// };

// let person1: Person = {
//   name: "hello",
// };
// let person2: Person = {
//   name: "zak",
//   age: 27,
// };
// ! An array of types is the Type[]:
// let lotsOfPeople: Person[] = [person1, person2];

// ! Defining a function looks like this:
// ! void = returns undefined | never = returns nothing | any = returns anything
// const printName = (name: string):void => {
//  console.log(name)
// }
// printName("Dani")

// Can also define a function like:
// type String = (name:string) => void;
// const printString = (fn:String) => console.log(fn)
// printString("zak") // <--- why doesn't this work????

// ! Used to describe data shapes i.e. objects/method objects. Whereas types are used to describe a type of data i.e. union, primitive, intersection, tuple, function, complex types...etc.
// interface Sport {
//   name: string;
//   years: number;
// }
// ! using extends allows this interface to include everything in the Sport interface within the Athlete interface
// interface Athlete extends Sport {
//   name: string;
//   luckyNo: number;
// }
//  ! Declaration merging is possible with interfaces, where you define the same interface twice and it will merge the properties within it:
// interface Car {
//   make: string;
// }
// interface Car {
//   model: string;
// }
// const vehicle: Car = {
//   make: "Ford",
//   model: "Explorer",
// }

// ! when defining the function you do React.xxxx
// ! You can use .FC for a functional component | .ReactNode supports all types (seems too vague to me, should prob be more specific)

const Notes = () => {
  return (
    <div>Notes</div>
  )
}

export default Notes