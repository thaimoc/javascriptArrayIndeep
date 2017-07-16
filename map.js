// Array.prototype.map

// const items = [1, 2, 3, 4, 5];
// const mapped = items.map(function(item){
//     return item * 2;
// });

// console.log(items);
// console.log(mapped);
// // Output:: 
// // [ 1, 2, 3, 4, 5 ]
// // [ 2, 4, 6, 8, 10 ]

// const items = ["1", "2", "3", "4", "5"];
// const mapped = items.map(function(item){
//     return Number(item);
// });

// console.log(items);
// console.log(mapped);
// // Output:: 
// // [ '1', '2', '3', '4', '5' ]
// // [ 1, 2, 3, 4, 5 ]

const items = [
    {
        firstname: 'Shane',
        lastname: 'Osbourne'
    },
    {
        firstname: 'Sally',
        lastname: 'Osbourne'
    }
];

console.log(createHtmlList(['Cat', 'Dog']));

function createHtmlList(items){
    const listElements = items.map(x=> `    <li>${x}</li>`).join('\n');
    return `<ul>\n${listElements}\n</ul>`;
}

/*Output:: 
<ul>
    <li>Cat</li>
    <li>Dog</li>
</ul>
*/