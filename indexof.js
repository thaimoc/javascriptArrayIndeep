/**
 * Created by Kim Nguyen on 4/21/2017.
 */

// Array.prototype.indexOf();

var family = ['Shane', 'Sally', 'Isaac', 'Kittie'];
var kittieExists = family.indexOf('Kittie') > -1;

if(!kittieExists){
    family.push('kittie');
}

console.log(family);

// Output[0]:: [ 'Shane', 'Sally', 'Isaac', 'Kittie' ]

console.log(family.indexOf('Kittie', 4));

// Output[1]:: -1

var shane = {
    name: 'Shane'
};
var sally = {
    name: 'Sally'
};
var kittie = {
    name: 'Kittie'
};

var family2 = [shane, sally];

console.log(family.indexOf(kittie));

// Output[2]:: -1

var whitelist = ['.css', '.js'];

var events = [
    {file: 'css/core.css'},
    {file: 'js/app.js'},
    {file: 'index.html'}
];

var filtered = events.filter(event => {
    var ext = require('path').extname(event.file);
    return whitelist.indexOf(ext) > -1;
});

console.log(filtered);

// Output[3]:: [ { file: 'css/core.css' }, { file: 'js/app.js' } ]