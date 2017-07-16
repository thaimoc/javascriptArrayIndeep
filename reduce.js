// Array.prototype.reduce

const items = [1, 2, 3, 4, 5];
const sum = items.reduce((prev, item)=> {
    console.log('prev', prev, 'item', item);
    return prev + item;
}, 0);
// Output:: 
// prev 1 item 2
// prev 3 item 3
// prev 6 item 4
// prev 10 item 5

const albums = [
    {
        title: 'Holiday in Spain',
        images: ['01.jpg', '02.jpg']
    },
    {
        title: 'House renovation',
        images: ['03.jpg', '04.jpg', '05.jpg']
    }
];

const numImages = albums.reduce((prev, album) => {
    return prev.concat(album.images);
}, []);

console.log(numImages);

const users = [
    {
        id: '01',
        name: 'Shane'
    },
    {
        id: '02',
        name: 'Sally'
    }
];

const newUsers = users.reduce((obj, user) => {
    obj[user.id] = user;
    return obj;
}, {});

console.log(newUsers);