const hashTags = ['some', 'hash', 'taGs', 'and', 'shIt'];
const text = ['eat', 'sleep', 'rave', 'repeat', 'code'];
const colors = ['black', 'blue', 'green', 'pink', 'red', 'yellow'];
const mockTask = () => ({
        color: colors[Math.floor(Math.random()*6)],
        titleText: text.slice(Math.floor(Math.random()*5), Math.floor(Math.random()*5)).join(' '),
        dateValue: Math.floor(new Date() * Math.random() * 10),
        hashTags: hashTags.slice(Math.floor(Math.random()*5), Math.floor(Math.random()*5)),
        isRepeating: Math.random() >= 0.5,
        isDeadline: Math.random() >= 0.5,
        isFavorite: Math.random() >= 0.5,
        isArchive: Math.random() >= 0.5,
        isOverdue: Math.random() >= 0.5,
        isToday: Math.random() >= 0.5
});

const mockTasks = new Array(8).fill(``).map(mockTask);

export default mockTasks;
