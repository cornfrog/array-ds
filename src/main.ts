import MyArray from "./MyArray.js";

const numbers = new MyArray<number>();

numbers.push(1);
numbers.push(2);
numbers.push(4);
numbers.push(5);

for(let i: number = 0; i < numbers.length; i++){
    console.log(`numbers[${i}] - ${numbers.atIndex(i)}`);
}

numbers.insertAt(3,2);
console.log();

for(let i: number = 0; i < numbers.length; i++){
    console.log(`numbers[${i}] - ${numbers.atIndex(i)}`);
}

console.log(`Numbers Array Type: ${numbers.getType()}`);

console.log(`Numbers values: ${numbers.getValues()}`);