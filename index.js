/**
 * Created by Kim Nguyen on 4/21/2017.
 */

// Array.prototype.concat();

// Basic
var items = [1, 2];
// var newItems = items.concat(3); => [1, 2, 3]
// var newItems = items.concat(3, 4, 5, 'string', undefined); => [ 1, 2, 3, 4, 5, 'string', undefined ]
// var newItems = items.concat([3, 4], [5, 6, 7, 8]); => [ 1, 2, 3, 4, 5, 6, 7, 8 ]
// var newItems = items.concat([3, 4], [5, 6, 7, 8], 9); => [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// var newItems = items.concat([3, 4], [5, [6, 7, 8]]); => [ 1, 2, 3, 4, 5, [ 6, 7, 8 ] ]
var newItems = items.concat([3, 4], [5, [6, 7, 8]]);

console.log(newItems);

// With objects
var people = [
    {name: 'Shane'},
    {name: 'Sally'}
];

var people2 = [
    {name: 'Simon'},
    {name: 'Ben'}
];

people
    .concat(people2)
    .forEach(function (person) {
        console.log(person.name);
    });