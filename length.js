/**
 * Created by Kim Nguyen on 4/21/2017.
 */

// Array.prototype.join()

var names = ['Shane', 'Alan', 'Osbourne'];

// console.log(names[0] + ' ' + names[1] + ' ' + names[2]); => the horrible way
// console.log(names.join()); => default case is the comma :: 'Shane,Alan,Osbourne'
console.log(names.join(' '));