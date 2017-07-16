/**
 * Created by Kim Nguyen on 4/21/2017.
 */

// Array.prototype.join()

var help = [
    'Usage',
    '   foo-app <input>'
];

if(process.argv[2] === 'help'){
    console.log(help.join('\n'));
}

// Run: Terminal:: 'node join.js help'

// Output:
// .your-computer-location\javascript-arrays-in-depth>node join.js help
// Usage
// foo-app <input>


var name = 'shane osbourne';

var upper = name.split(' ')
.map(x=>x.charAt(0).toUpperCase() + x.slice(1))
.join(' ');

console.log(upper); // Output:: 'Shane Osbourne'