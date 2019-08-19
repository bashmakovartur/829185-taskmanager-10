export const task = {
    descriptions: [`Изучить теорию`, `Сделать домашку`, `Пройти интенсив на соточку`],
    get description(){
        return this.descriptions[Math.floor(Math.random() * this.descriptions.length)];
    },
    dueDate: Date.now(),
    isRepeating: Boolean(Math.round(Math.random())),
    repeatingDays: {
        Mo: Boolean(Math.round(Math.random())),
        Tu: Boolean(Math.round(Math.random())),
        We: Boolean(Math.round(Math.random())),
        Th: Boolean(Math.round(Math.random())),
        Fr: Boolean(Math.round(Math.random())),
        Sa: Boolean(Math.round(Math.random())),
        Su: Boolean(Math.round(Math.random())),
    },
    tags: new Set([
        `homework`,
        `theory`,
        `practice`,
        `intensive`,
        `keks`
    ]),
    colors: [
        `black`,
        `yellow`,
        `blue`,
        `green`,
        `pink`
    ],
    get color(){
        return this.colors[Math.floor(Math.random() * this.colors.length)];
    },
    isFavorite: Boolean(Math.round(Math.random())),
    isArchive: Boolean(Math.round(Math.random())),
};
