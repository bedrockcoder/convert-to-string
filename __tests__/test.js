const convertToString = require('../dist/index.js');

test('The function returns the correct data', () => {
    const str = convertToString({
        name: { first: 'John', last: 'Doe' },
        age: 17,
        favoriteFoods: [
            { food: 'Pizza', rating: 5 },
            { food: 'Cake', rating: 4.78 },
            { food: "I really don't know what I'm doing here", rating: 4.6734980 },
            7
        ],
        getFavoriteFood() {
            return this.favoriteFoods[0].food;
        },
        getLeastFavoriteFood: () => this.favoriteFoods[this.favoriteFoods.length - 1].food
    });
    expect(str).toBe(`{ name: { first: 'John', last: 'Doe' }, age: 17, favoriteFoods: [{ food: 'Pizza', rating: 5 }, { food: 'Cake', rating: 4.78 }, { food: "I really don't know what I'm doing here", rating: 4.673498 }, 7], getFavoriteFood: getFavoriteFood() {\n      return this.favoriteFoods[0].food;\n    }, getLeastFavoriteFood: () => this.favoriteFoods[this.favoriteFoods.length - 1].food }`)
});