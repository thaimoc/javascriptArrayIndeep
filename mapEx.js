// Array.prototype.map
const items = [
    {
        active: true,
        firstname: 'Shane',
        lastname: 'Osbourne'
    },
    {
        active: true,
        firstname: 'Sally',
        lastname: 'Osbourne'
    },
    {
        active: false,
        firstname: 'Ben',
        lastname: 'Barker'
    }
];

const mapped = items
    .filter(x => x.active)
    .map(x => x.firstname);

console.log(createHtmlList(mapped));

function createHtmlList(items){
    const listHtml = items.map(x => `    <li>${x}</li>`).join('\n');
    return `<ul>\n${listHtml}\n</ul>`
}

/*Output:: 
<ul>
    <li>Shane</li>
    <li>Sally</li>
</ul>
*/