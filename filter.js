// Array.prototype.filter();

var items = [1, 2, 3, 4, 5];
var filtered = items.filter(x => x > 3);

console.log(items);
console.log(filtered);
// Output:: 
// [ 1, 2, 3, 4, 5 ]
// [ 4, 5 ]

var people = [
    {
        name: 'Shane',
        pets: ['cat', 'dog']
    },
    {
        name: 'Simon',
        pets: ['horse']
    },
    {
        name: 'Ben',
        pets: []
    }
];

var filtered = people.filter(x => x.pets.length);

console.log(filtered);
// Output:: 
// [ { name: 'Shane', pets: [ 'cat', 'dog' ] },
//   { name: 'Simon', pets: [ 'horse' ] } ]
// Tip:: [].length == 0 => false

var lessons = [
    {
        title: 'Javascript Arrays in Depth - join',
        views: 960,
        tags: ['array', 'join']
    },
    {
        title: 'Javascript Arrays in Depth - concat',
        views:1050,
        tags: ['array', 'concat']
    },
    {
        title: 'Javascript Arrays in Depth - slice',
        views: 2503,
        tags: ['array', 'slice']
    },
    {
        title: 'Javascript Arrays in Depth - bind',
        views: 2500,
        tags: ['functions', 'bind']
    },
];

var minViews = 1000;
var searchTerm = 'array';

var filtered = lessons
    .filter(x => x.tags.indexOf(searchTerm) > -1)
    .filter(x => x.views > minViews)
    .sort((a, b) => b.views - a.views)
    .map(x => `    <li>${x.title}</li>`)
    .join('\n');

console.log(`<ul>
${filtered}
</ul>`);