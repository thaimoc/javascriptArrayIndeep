// Array.prototype.every
const items1 = [1, 2, 3, 4, 5];
const result1 = items1.every(x => {
    console.log('Called with', x);
    return x < 5;
});

console.log(result1);
// Ouput:: 
// Called with 1
// Called with 2
// Called with 3
// Called with 4
// Called with 5

const items2 = [5, 2, 3, 4, 1];
const result2 = items2.every(x => {
    console.log('Called with', x);
    return x < 5;
});

console.log(result2);
// Output:: 
// Called with 5
// false
// Tip:: run one times.

const fields = [
    {
        field: 'email',
        value: 'shane@example.com',
        errors: []
    },
    {
        field: 'name',
        value: '',
        errors: ['No name provided']
    }
];

const isValid = fields.every(x => x.errors.length === 0);

console.log(isValid);

const videos = [
    {
        title: 'Array methods in depth: concat',
        length: 310,
        viewed: 310
    },
    {
        title: 'Array methods in depth: join',
        length: 420,
        viewed: 360
    }
];

function complete(x){
    return x.viewed === x.length;
}

const isComplete = videos.every(complete);
const completed = videos.filter(complete);

console.log(isComplete);
console.log(completed);

// Output::
// false
// [ 
//     { 
//         title: 'Array methods in depth: concat',
//         length: 310,
//         viewed: 310 
//     } 
// ]