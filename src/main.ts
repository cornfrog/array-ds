import MyArray from "./MyArray.js";

// // Working with Booleans 
// {
//     //initializing arrays
//     const blankBoolArray = new MyArray<boolean>();               // initialized as { items: [], length: 0 }
//     const initBoolArray = new MyArray<boolean>([true, false]);   // initialized as { items: [true, false], length: 2 }
//     console.log("blankBoolArray[] initialized: ",blankBoolArray);
//     console.log("initBoolArray[] initialized: ", initBoolArray);
//     console.log();
    
//     // adding values to blankBoolArray
//     console.log("Adding Items to blankBoolArray: ");
//     blankBoolArray.push(true);
//     blankBoolArray.push(false);
//     blankBoolArray.push(true);
//     blankBoolArray.push(false);
//     console.log("Items added to blankBoolArray...");
//     console.log(blankBoolArray);
//     console.log();
    
//     // accessing indexes of blankBoolArray
//     console.log("blankBoolArray values: ");
//     console.log(`blankBoolArray[0]: ${blankBoolArray.atIndex(0)}`);
//     console.log(`blankBoolArray[1]: ${blankBoolArray.atIndex(1)}`);
//     console.log(`blankBoolArray[2]: ${blankBoolArray.atIndex(2)}`);
//     console.log(`blankBoolArray[3]: ${blankBoolArray.atIndex(3)}`);
//     console.log(`blankBoolArray[4]: ${blankBoolArray.atIndex(4)}`); // returns undefined
//     console.log();

//     // removing items from blankBoolArray
//     console.log("Removing items from blankBoolArray: ");
//     console.log(`Current Length: ${blankBoolArray.length}`);
//     console.log(`Popped Item: ${blankBoolArray.pop()} - Length: ${blankBoolArray.length}`);
//     console.log(`Popped Item: ${blankBoolArray.pop()} - Length: ${blankBoolArray.length}`);
//     console.log(`Popped Item: ${blankBoolArray.pop()} - Length: ${blankBoolArray.length}`);
//     console.log(`Popped Item: ${blankBoolArray.pop()} - Length: ${blankBoolArray.length}`);
//     console.log(`Popped Item: ${blankBoolArray.pop()} - Length: ${blankBoolArray.length}`);
//     console.log(blankBoolArray);
//     console.log();
// }
// // Working with Numbers
// {
//     //initializing arrays
//     const numbers = new MyArray<number>(); 
//     console.log("numbers[] initialized: ", numbers);
//     console.log();

//     // adding items to numbers
//     console.log("Adding items to numbers:");
//     numbers.push(1);
//     numbers.push(2);
//     numbers.push(3);
//     numbers.push(4);
//     console.log("Items added to numbers...");
//     console.log(numbers);
//     console.log();

//     // accessing index values in numbers 
//     console.log("numbers values:");
//     console.log(`numbers[0]: ${numbers.atIndex(0)}`);
//     console.log(`numbers[1]: ${numbers.atIndex(1)}`);
//     console.log(`numbers[2]: ${numbers.atIndex(2)}`);
//     console.log(`numbers[3]: ${numbers.atIndex(3)}`);
//     console.log(`numbers[4]: ${numbers.atIndex(4)}`);   // returns undefined
//     console.log();

//     // removing items from numbers
//     console.log("Removing items from numbers:");
//     console.log(`Current Length: ${numbers.length}`);
//     console.log(`Popped: ${numbers.pop()} - Length: ${numbers.length}`);
//     console.log(`Popped: ${numbers.pop()} - Length: ${numbers.length}`);
//     console.log(`Popped: ${numbers.pop()} - Length: ${numbers.length}`);
//     console.log(`Popped: ${numbers.pop()} - Length: ${numbers.length}`);
//     console.log(`Popped: ${numbers.pop()} - Length: ${numbers.length}`);
//     console.log(numbers);
//     console.log();

// }

// // Working with Strings 
// {
//     // initializing names
//     const names = new MyArray<string>();
//     console.log("names[] initialized: ", names);
//     console.log();

//     // adding items to names
//     console.log("Adding items to names:");
//     names.push("Corey Pierce");
//     names.push("Nick deRis");
//     names.push("Marlon Sanchez");
//     names.push("Nick Kwiat");
//     console.log("Items added to names...");
//     console.log(names);
//     console.log();

//     // accessing index values
//     console.log("names values: ")
//     console.log(`names[0]: ${names.atIndex(0)}`);
//     console.log(`names[1]: ${names.atIndex(1)}`);
//     console.log(`names[2]: ${names.atIndex(2)}`);
//     console.log(`names[3]: ${names.atIndex(3)}`);
//     console.log(`names[4]: ${names.atIndex(4)}`);
//     console.log();

//     // removing items from names
//     console.log(`Current Length: ${names.length}`);
//     console.log(`Popped: ${names.pop()} - Length: ${names.length}`);
//     console.log(`Popped: ${names.pop()} - Length: ${names.length}`);
//     console.log(`Popped: ${names.pop()} - Length: ${names.length}`);
//     console.log(`Popped: ${names.pop()} - Length: ${names.length}`);
//     console.log(`Popped: ${names.pop()} - Length: ${names.length}`);
//     console.log();


// }
// // Working with Custom Objects
// {
//     // demo interface and objects 
//     interface Person {
//         firstName: string;
//         lastName: string;
//         isDev: boolean;
//     }

//     const corey: Person = { 
//         firstName: "Corey",
//         lastName: "Pierce",
//         isDev: true
//     }

//     const marlon: Person = { 
//         firstName: "Marlon",
//         lastName: "Sanchez",
//         isDev: true
//     }

//     const nickD: Person = { 
//         firstName: "Nick",
//         lastName: "deRis",
//         isDev: true
//     }

//     const nickK: Person = { 
//         firstName: "Nick",
//         lastName: "Kwait",
//         isDev: true
//     }

//     // initializing people
//     const people = new MyArray<Person>();
//     console.log("people[] initialized: ", people);
//     console.log()

//     // adding items to people
//     console.log("Adding items to people:");
//     people.push(corey);
//     people.push(marlon);
//     people.push(nickD);
//     people.push(nickK);
//     console.log("Items added to people...");
//     console.log(people);
//     console.log()
    
//     // accessing index values
//     console.log("people values: ");
//     console.log("people[0]:", people.atIndex(0));
//     console.log("people[1]:", people.atIndex(1));
//     console.log("people[2]:", people.atIndex(2));
//     console.log("people[3]:", people.atIndex(3));
//     console.log("people[4]:", people.atIndex(4));

//     // removing items from people
//     console.log("Removing items from people:");
//     console.log(`Current Length: ${people.length}`);
//     console.log("Popped: ", people.pop() , ` - Length: ${people.length}`);
//     console.log("Popped: ", people.pop() , ` - Length: ${people.length}`);
//     console.log("Popped: ", people.pop() , ` - Length: ${people.length}`);
//     console.log("Popped: ", people.pop() , ` - Length: ${people.length}`);
//     console.log("Popped: ", people.pop() , ` - Length: ${people.length}`);
//     console.log()
// }

