// Array.prototype.some()

var tasks = [
    {
        title: 'Do laundry',
        completed: true
    },
    {
        title: 'Feed the cat',
        completed: false
    },
    {
        title: 'Watch the array lessons on UI',
        completed: true
    }
];

var list = document.querySelector('.task-list');
list.classList.add(
    tasks.some(task => task.completed === false)
    ? 'task-list--uncompleted'
    : 'task-list--completed'
);

list.innerHTML = tasks
    .map(x => x.completed ? `<s>${x.title}</s>` : x.title)
    .map(x => `<li>${x}</li>`)
    .join('');

