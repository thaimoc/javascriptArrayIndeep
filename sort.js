// Array.prototype.sort();

var items = ['Shane', 'Sally', 'Issac'];

items.sort();

console.log(items);
// Output:: [ 'Issac', 'Sally', 'Shane' ]

var items = [10, 30, 2, 20];

items.sort();

console.log(items);
// Output:: [ 10, 2, 20, 30 ]
// Tip:: the sort function will convert integer to string before converting process

var items = [10, 30, 2, 20];

items.sort((a, b) => a - b);

console.log(items);
// Output:: [ 2, 10, 20, 30 ]

var items = [10, 30, 2, 20];

items.sort((a, b) => b - a);

console.log(items);
// Output:: [ 30, 20, 10, 2 ]
