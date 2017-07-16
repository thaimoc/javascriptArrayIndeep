
// Array.prototype.slice();

var items = [1, 2, 3, 4, 5];
var copy = items.slice();

copy[1] = 9;
copy.push(6);

console.log(items);
console.log(copy);
// Output:: 
// [ 1, 2, 3, 4, 5 ]
// [ 1, 9, 3, 4, 5, 6 ]

var items = [1, 2, 3, 4, 5];
var copy = items.slice(0, 3);

console.log(copy);
// Output:: [ 1, 2, 3 ]

var items = [1, 2, 3, 4, 5];
var copy = items.slice(3);

console.log(copy);
// Output:: [4, 5]

var items = [1, 2, 3, 4, 5, 6, 7, 8];
var copy = items.slice(-1);

console.log(copy);
// Output:: [8]

var items = [1, 2, 3, 4, 5, 6, 7, 8];
var copy = items.slice(-2);

console.log(copy);
// Output:: [7, 8]

var items = [1, 2, 3, 4, 5, 6, 7, 8];
var copy = items.slice(1, -1);

console.log(copy);
// Output:: [2, 3, 4, 5, 6, 7]

var person = {name: 'Shame'};
var items = [1, person];
var copy = items.slice();

copy[1].name = 'Sally';

console.log(items);
console.log(copy);
// Ouput::
// [ 1, { name: 'Sally' } ]
// [ 1, { name: 'Sally' } ]
